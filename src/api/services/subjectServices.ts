import axios from "axios";
import { baseUrl } from "../axios.ts";

const getSubjectsService = async () => {
  try {
    const response = await axios.get(`${baseUrl}/subject`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const createSubjectService = async (body: {}) => {
  try {
    const response = await axios.post(`${baseUrl}/subject`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteSubjectService = async (id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/subject/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateSubjectService = async (id: string, body:{}) => {
  try {
    const response = await axios.patch(`${baseUrl}/subject/${id}`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export { getSubjectsService, createSubjectService, deleteSubjectService, updateSubjectService };
