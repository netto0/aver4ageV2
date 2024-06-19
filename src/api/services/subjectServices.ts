import axios from "axios";
import { baseUrl } from "../axios.ts";

const getSubjectsService = async () => {
  try {
    const response = await axios.get(`${baseUrl}/subject`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createSubjectService = async (body:{}) => {
  try {
    const response = await axios.post(`${baseUrl}/subject`,body);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
const deleteSubjectService = async (id:string) => {
  try {
    const response = await axios.delete(`${baseUrl}/subject/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
//     {
//       "_id": "662841e39d2cbf042e0f84ed",
//       "name": "Economia e Mercado",
//       "semester": 3,
//       "avaQtt": 4,
//       "avaGrades": {
//         "ava1": 2,
//         "ava2": 2,
//         "ava3": 1.25,
//         "ava4": 0.75
//       },
//       "examGrade": 6,
//       "createdAt": "2024-04-23T23:18:59.300Z",
//       "updatedAt": "2024-04-23T23:18:59.300Z",
//       "__v": 0,
//       "pimGrade": null,
//       "retakeGrade": null
//     }

export { getSubjectsService, createSubjectService, deleteSubjectService };

