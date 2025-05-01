import axios from "axios";
import { TaskData } from "../common/types";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTaskAllData = async () => {
  try {
    const response = await axios.get(`http://${API_URL}/api/v1/task`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTaskApi = async (data: TaskData) => {
  try {
    const response = await axios.post(`http://${API_URL}/api/v1/task`, {
      name: data.name,
      period: data.period,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
