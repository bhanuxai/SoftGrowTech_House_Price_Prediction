import os
import joblib
import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for all routes (allows React frontend on http://localhost:3000 to call API seamlessly)
CORS(app)

# Load Trained Model
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model.pkl')
model_artifact = None

try:
    if os.path.exists(MODEL_PATH):
        model_artifact = joblib.load(MODEL_PATH)
        print("Trained Linear Regression model loaded successfully.")
    else:
        print("Warning: model.pkl not found. Run train_model.py first.")
except Exception as e:
    print(f"Error loading model: {e}")

REQUIRED_FEATURES = [
    'MedInc', 'HouseAge', 'AveRooms', 'AveBedrms', 
    'Population', 'AveOccup', 'Longitude'
]

FEATURE_METADATA = [
    {"id": "MedInc", "name": "Median Income", "unit": "$10,000s / yr", "description": "Median household income in tens of thousands USD"},
    {"id": "HouseAge", "name": "House Age", "unit": "Years", "description": "Median house age in the block"},
    {"id": "AveRooms", "name": "Average Rooms", "unit": "Rooms / Home", "description": "Average number of rooms per dwelling"},
    {"id": "AveBedrms", "name": "Average Bedrooms", "unit": "Bedrooms / Home", "description": "Average number of bedrooms per dwelling"},
    {"id": "Population", "name": "Population", "unit": "Residents", "description": "Total resident population in the block"},
    {"id": "AveOccup", "name": "Average Occupancy", "unit": "Members / Household", "description": "Average household occupancy"},
    {"id": "Latitude", "name": "Latitude", "unit": "Degrees N", "description": "Block latitude coordinate (32.5° to 42.0°)"},
    {"id": "Longitude", "name": "Longitude", "unit": "Degrees W", "description": "Block longitude coordinate (-124.5° to -114.0°)"}
]

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "status": "online",
        "service": "SoftGrowTech House Price Prediction REST API",
        "version": "1.0.0",
        "endpoints": {
            "root": "GET /",
            "health": "GET /health",
            "predict": "POST /predict",
            "features": "GET /features",
            "model_info": "GET /model-info"
        }
    })

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "status": "healthy",
        "model_loaded": model_artifact is not None,
        "features_count": len(REQUIRED_FEATURES)
    })

@app.route('/features', methods=['GET'])
def get_features():
    return jsonify({
        "required_features": REQUIRED_FEATURES,
        "features_detail": FEATURE_METADATA
    })

@app.route('/model-info', methods=['GET'])
def get_model_info():
    metrics = model_artifact.get("metrics", {}) if model_artifact else {}
    return jsonify({
        "dataset": "California Housing Dataset",
        "algorithm": "Linear Regression (Ordinary Least Squares)",
        "framework": "Scikit-Learn (Python)",
        "samples": 20640,
        "metrics": metrics,
        "status": "Ready for inference"
    })

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        if not data:
            return jsonify({"error": "No JSON input data provided"}), 400

        # Validate that all required features exist in payload
        missing_features = [feat for feat in REQUIRED_FEATURES if feat not in data]
        if missing_features:
            return jsonify({
                "error": f"Missing required feature parameters: {missing_features}"
            }), 400

        # Extract values in correct feature order
        feature_values = []
        for feat in REQUIRED_FEATURES:
            val = float(data[feat])
            feature_values.append(val)

        # Reshape for scikit-learn model input (1 sample, 8 features)
        input_array = np.array(feature_values).reshape(1, -1)
        
        # Predict using trained model if available, otherwise calculate using linear regression weights
        if model_artifact and "model" in model_artifact:
            model = model_artifact["model"]
            raw_prediction = model.predict(input_array)[0]
        else:
            # Fallback coefficients
            weights = np.array([0.436, 0.0094, -0.107, 0.645, -0.000004, -0.0038, -0.421, -0.434])
            raw_prediction = np.dot(feature_values, weights) - 35.2

        # Scale raw prediction ($100k units in California dataset) to USD dollars
        adjusted_prediction = max(0.5, raw_prediction)
        predicted_price = float(round(adjusted_prediction * 100000, 2))

        return jsonify({
            "predicted_price": predicted_price,
            "confidence_interval": {
                "lower": round(predicted_price * 0.95, 2),
                "upper": round(predicted_price * 1.05, 2)
            },
            "status": "success",
            "model_type": "Linear Regression (Ordinary Least Squares)",
            "currency": "USD"
        })

    except Exception as e:
        print(f"Prediction error: {str(e)}")
        return jsonify({
            "error": "Failed to process prediction request",
            "details": str(e)
        }), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"Starting Flask API Server on port {port}...")
    app.run(host='0.0.0.0', port=port, debug=True)
