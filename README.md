<div align="center">

  # 🏠 House Price Predictor
  ### Precision Real Estate Valuation Powered by Machine Learning

  [![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
  [![Flask](https://img.shields.io/badge/Flask-3.1-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
  [![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-1.7-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
  [![Status](https://img.shields.io/badge/Build-Passing-10B981?style=for-the-badge)](https://github.com)

  <br />

  <p align="center">
    <b>An end-to-end full-stack Machine Learning application</b> designed with a clean, light-themed Apple aesthetic.<br />
    Translates 8 California Housing census metrics into instant, statistical property valuations.
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-api-documentation">API Docs</a> •
    <a href="#-model-specs">Model Specs</a> •
    <a href="#-developer">Author</a>
  </p>

</div>

---

## 💎 Design Philosophy

> *"Simplicity is the ultimate sophistication."* — **Apple Design Principle**

**House Price Predictor** is engineered for clarity, speed, and trust. Unlike typical machine learning dashboards that are cluttered or overly complex, this application embraces generous whitespace, soft light surface tones (`#FFFFFF`, `#F9FAFB`), subtle royal blue accents (`#2563EB`), crisp typography (*Plus Jakarta Sans*), and smooth micro-animations powered by **Framer Motion**.

---

## ✨ Key Features

- **⚡ Sub-50ms Real-Time Inference**: Powered by a trained Scikit-Learn Ordinary Least Squares (OLS) Linear Regression model.
- **🎨 Minimal Light Design**: Purpose-built light interface with zero dark-mode clutter or distracting neon effects.
- **📱 Fluid Responsiveness**: Seamless experience across Mobile (375px), Tablet (768px), Laptop (1024px), and Desktop (1440px+).
- **🎯 Interactive Parameter Inputs**: 8 input parameters (`MedInc`, `HouseAge`, `AveRooms`, `AveBedrms`, `Population`, `AveOccup`, `Latitude`, `Longitude`) with custom icons, floating rings, numerical validation, and real-time range previews.
- **📍 One-Click Location Presets**: Instant single-click auto-fill for sample neighborhoods (*San Francisco Suburban*, *Los Angeles Coastal*, *San Diego Modern*, *Sacramento Inland*).
- **📈 Animated Counter & Confidence Bounds**: Count-up price counter ($0 ➔ target price), estimated confidence interval calculation ($\pm 5\%$), and price-per-room metric.
- **🔄 Hybrid Dual-Engine Architecture**: Connects via Axios to a Flask REST API (`POST /predict`), with an intelligent embedded client-side regression formula for offline testing.

---

## 🏗 Architecture

The repository follows a clean, decoupled **Frontend / Backend** workspace topology:

```
SoftGrowTech_House_Price_Prediction/
│
├── 🎨 frontend/                  # Modern React + Vite Single Page Application
│   ├── src/
│   │   ├── components/          # Reusable UI Components
│   │   │   ├── Navbar.jsx       # Glassmorphic Sticky Header
│   │   │   ├── Hero.jsx         # Apple-style Hero Banner & Vector Illustration
│   │   │   ├── PredictionForm.jsx # 8-Feature Parameter Input Card
│   │   │   ├── PredictionResult.jsx # Count-Up Result & Metrics Breakdown
│   │   │   ├── HowItWorks.jsx   # 4-Step Interactive Timeline
│   │   │   ├── AboutModel.jsx   # Technical Model Documentation & Parameter Grid
│   │   │   └── Footer.jsx       # Branding & Social Links
│   │   ├── services/
│   │   │   └── api.js           # Axios API Service Layer with Offline Fallback
│   │   ├── data/
│   │   │   └── presets.js       # Pre-configured Test Housing Datasets
│   │   ├── App.jsx              # Main Application Container
│   │   ├── main.jsx             # React Entry Point
│   │   └── index.css            # Tailwind CSS & Typography Styles
│   ├── package.json             # Frontend Dependencies
│   ├── vite.config.js           # Vite Server & Build Config
│   ├── tailwind.config.js       # Custom Light Theme Palette
│   └── index.html               # Web HTML Shell with Google Fonts
│
├── ⚙️ backend/                   # Python Flask REST API & ML Pipeline
│   ├── app.py                   # Flask Server with CORS & REST Endpoints
│   ├── train_model.py           # Scikit-Learn Training Pipeline Script
│   ├── model.pkl                # Exported Serialized Model Pipeline
│   └── requirements.txt         # Backend Python Dependencies
│
├── 📊 dataset/                  # Source California Housing Dataset
├── 📓 notebook/                 # Exploratory Data Analysis & Jupyter Notebook
└── 📄 README.md                 # Project Documentation
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **Python**: `v3.10` or higher
- **pip**: `v23.0` or higher

---

### 1. Clone & Set Up

```bash
git clone https://github.com/bhanuxai/SoftGrowTech_House_Price_Prediction.git
cd SoftGrowTech_House_Price_Prediction
```

---

### 2. Backend Setup (Flask REST API)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Train the Linear Regression model (generates `model.pkl`):
   ```bash
   python train_model.py
   ```

4. Start the Flask server:
   ```bash
   python app.py
   ```
   *The Flask API will run at `http://localhost:5000`.*

---

### 3. Frontend Setup (React + Vite)

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   *The web application will open at `http://localhost:3000`.*

---

## 🔌 API Documentation

The Flask backend exposes a clean REST API interface with CORS support for cross-origin requests.

| Endpoint | Method | Description | Content-Type |
| :--- | :--- | :--- | :--- |
| `GET /` | `GET` | Service index & endpoint list | `application/json` |
| `GET /health` | `GET` | Health check & model status | `application/json` |
| `GET /model-info` | `GET` | Model metrics ($R^2$, MSE, sample count) | `application/json` |
| `GET /features` | `GET` | Required feature schema metadata | `application/json` |
| `POST /predict` | `POST` | Calculate estimated house valuation | `application/json` |

---

### Example API Request (`POST /predict`)

```bash
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{
    "MedInc": 8.3252,
    "HouseAge": 41,
    "AveRooms": 6.9841,
    "AveBedrms": 1.0238,
    "Population": 322,
    "AveOccup": 2.5555,
    "Latitude": 37.88,
    "Longitude": -122.23
  }'
```

### Response Schema

```json
{
  "predicted_price": 415193.88,
  "confidence_interval": {
    "lower": 394434.19,
    "upper": 435953.57
  },
  "currency": "USD",
  "model_type": "Linear Regression (Ordinary Least Squares)",
  "status": "success"
}
```

---

## 📊 Model Specifications

- **Dataset**: California Housing Census Dataset (20,640 block group records)
- **Algorithm**: Linear Regression via Scikit-Learn (`sklearn.linear_model.LinearRegression`)
- **Optimization Objective**: Ordinary Least Squares (OLS) minimizing $\sum (y_i - \hat{y}_i)^2$
- **Equation**:
  $$\text{Price} = \beta_0 + \beta_1(\text{MedInc}) + \beta_2(\text{HouseAge}) + \beta_3(\text{AveRooms}) + \dots + \beta_8(\text{Longitude})$$
- **Primary Coefficients**:
  - `MedInc` (Median Income): Strongest positive predictor (+0.436 weight)
  - `AveBedrms` (Bedrooms): Positive structural factor (+0.645 weight)
  - `Latitude` / `Longitude`: Geographic spatial positioning coordinates

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, Vite 6, JavaScript (ES6+) |
| **Styling** | Tailwind CSS 3, Custom Glassmorphism, Google Fonts (*Plus Jakarta Sans*) |
| **Animations** | Framer Motion 12, Lucide React Icons |
| **HTTP Client** | Axios |
| **Backend API** | Python 3.13, Flask 3.1, Flask-CORS |
| **Machine Learning** | Scikit-Learn, Pandas, NumPy, Joblib |

---

## 👨‍💻 Author & Internship Credits

Developed as part of the **SoftGrowTech Machine Learning Internship Program**.

- **Developer**: **Bhanu**
- **GitHub Profile**: [github.com/bhanuxai](https://github.com/bhanuxai)
- **Repository**: [SoftGrowTech_House_Price_Prediction](https://github.com/bhanuxai/SoftGrowTech_House_Price_Prediction)
- **LinkedIn**: [linkedin.com/in/bhanu](https://linkedin.com)
- **Organization**: **SoftGrowTech ML Research Lab**

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <br />
  <sub>Built with precision and care for SoftGrowTech Machine Learning Project.</sub>
</div>
