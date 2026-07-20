export const SAMPLE_PRESETS = [
  {
    id: 'sf-suburban',
    name: 'San Francisco Suburban',
    tagline: 'High income, moderate age, prime location',
    values: {
      MedInc: 8.3252,
      HouseAge: 41,
      AveRooms: 6.9841,
      AveBedrms: 1.0238,
      Population: 322,
      AveOccup: 2.5555,
      Latitude: 37.88,
      Longitude: -122.23
    }
  },
  {
    id: 'la-coastal',
    name: 'Los Angeles Coastal',
    tagline: 'Upper middle income, near ocean corridor',
    values: {
      MedInc: 6.5400,
      HouseAge: 21,
      AveRooms: 5.8200,
      AveBedrms: 1.0500,
      Population: 1200,
      AveOccup: 2.8000,
      Latitude: 34.05,
      Longitude: -118.25
    }
  },
  {
    id: 'san-diego-suburb',
    name: 'San Diego Modern',
    tagline: 'Newer construction, family occupancy',
    values: {
      MedInc: 5.2100,
      HouseAge: 12,
      AveRooms: 5.6000,
      AveBedrms: 1.0100,
      Population: 1850,
      AveOccup: 3.1000,
      Latitude: 32.71,
      Longitude: -117.16
    }
  },
  {
    id: 'sacramento-budget',
    name: 'Sacramento Inland',
    tagline: 'Affordable inland valley housing block',
    values: {
      MedInc: 2.8500,
      HouseAge: 35,
      AveRooms: 4.5000,
      AveBedrms: 1.1000,
      Population: 2100,
      AveOccup: 3.4000,
      Latitude: 38.58,
      Longitude: -121.49
    }
  }
];

export const MODEL_SPECS = {
  datasetName: "California Housing Dataset",
  totalSamples: "20,640",
  algorithmName: "Linear Regression",
  framework: "Scikit-Learn (Python)",
  targetVariable: "Median House Value ($)",
  featuresCount: 8,
};
