import os
import joblib
import pandas as pd
import numpy as np
from sklearn.datasets import fetch_california_housing
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

def train_and_save_model():
    print("Loading California Housing Dataset...")
    housing = fetch_california_housing(as_frame=True)
    X = housing.data
    y = housing.target  # Target is median house value in $100,000 units

    feature_names = list(X.columns)
    print(f"Features loaded: {feature_names}")

    # Train/Test Split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Training Linear Regression model...")
    model = LinearRegression()
    model.fit(X_train, y_train)

    # Evaluate
    y_pred = model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    print(f"Model Training Complete! MSE: {mse:.4f}, R2 Score: {r2:.4f}")

    # Package model artifact
    artifact = {
        "model": model,
        "feature_names": feature_names,
        "metrics": {"mse": mse, "r2": r2}
    }

    # Save artifact
    output_path = os.path.join(os.path.dirname(__file__), "model.pkl")
    joblib.dump(artifact, output_path)
    print(f"Model saved successfully to {output_path}")

if __name__ == "__main__":
    train_and_save_model()
