import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTaskAllData = async () => {
  try {
    const response = await axios.get(`http://${API_URL}/api/v1/task`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
