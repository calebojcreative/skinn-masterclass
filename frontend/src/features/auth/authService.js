import axios from "axios";

const API_URL = "/api/subscribers";

// Register subscriber
const subscribe = async (subscriberData) => {
  const response = await axios.post(API_URL, subscriberData);

  if (response.data) {
    localStorage.setItem("subscriber", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  subscribe,
};

export default authService;
