import axios from "axios";
import { baseUrl } from "../axios.ts";

const offlineList = [
  {
    _id: "667a9430ccec3e55914ad5e1",
    name: " (offline) Análise de sistemas orientada a objetos",
    semester: 3,
    avaGrade: 9.25,
    pimGrade: 7,
    examGrade: 8,
    retakeGrade: null,
    createdAt: "2024-06-25T09:56:00.545Z",
    updatedAt: "2024-08-15T09:22:50.709Z",
    __v: 0,
    avg: 7.925,
  },
  {
    _id: "667a9469ccec3e55914ad5ed",
    name: " (offline) Banco de dados",
    semester: 3,
    avaGrade: 8.25,
    pimGrade: 7,
    examGrade: 6,
    retakeGrade: 9,
    createdAt: "2024-06-25T09:56:57.661Z",
    updatedAt: "2024-07-12T09:34:38.698Z",
    __v: 0,
    avg: 7.7125,
  },
  {
    _id: "667d387e89c5558b69312e1c",
    name: " (offline) Economia e mercado",
    semester: 3,
    avaGrade: 6,
    pimGrade: 7,
    examGrade: 6,
    retakeGrade: 6,
    createdAt: "2024-06-27T10:01:34.903Z",
    updatedAt: "2024-07-12T09:34:40.671Z",
    __v: 0,
    avg: 6.1,
  },
  {
    _id: "667d38a189c5558b69312e1f",
    name: " (offline) Engenharia de software",
    semester: 3,
    avaGrade: 8,
    pimGrade: 7,
    examGrade: 8,
    retakeGrade: null,
    createdAt: "2024-06-27T10:02:09.678Z",
    updatedAt: "2024-07-12T09:34:42.923Z",
    __v: 0,
    avg: 7.8,
  },
  {
    _id: "667d391289c5558b69312e22",
    name: " (offline) Gestão estratégica de recurso humanos",
    semester: 3,
    avaGrade: 9.25,
    pimGrade: 7,
    examGrade: 8,
    retakeGrade: null,
    createdAt: "2024-06-27T10:04:02.093Z",
    updatedAt: "2024-08-12T10:08:20.633Z",
    __v: 0,
    avg: 7.925,
  },
  {
    _id: "667d393b89c5558b69312e25",
    name: " (offline) Programação orientada a objetos",
    semester: 3,
    avaGrade: 8.5,
    pimGrade: 7,
    examGrade: 8.75,
    retakeGrade: null,
    createdAt: "2024-06-27T10:04:43.880Z",
    updatedAt: "2024-07-12T09:34:48.037Z",
    __v: 0,
    avg: 8.375,
  },
  {
    _id: "667d395789c5558b69312e28",
    name: " (offline) Projeto de interface com o usuário",
    semester: 3,
    avaGrade: 8.5,
    pimGrade: 7,
    examGrade: 5,
    retakeGrade: 8,
    createdAt: "2024-06-27T10:05:11.857Z",
    updatedAt: "2024-07-12T09:34:49.736Z",
    __v: 0,
    avg: 6.875,
  },
  {
    _id: "66a4ba7bd8abf29c12e276a2",
    name: " (offline) teste2",
    semester: 2,
    avaGrade: null,
    pimGrade: null,
    examGrade: null,
    retakeGrade: null,
    avg: null,
    createdAt: "2024-07-27T09:14:35.317Z",
    updatedAt: "2024-08-16T10:16:18.792Z",
    __v: 0,
  },
  {
    _id: "66a8bdf839d1ca01c92da299",
    name: " (offline) Teste editado",
    semester: 1,
    avaGrade: 4,
    pimGrade: 10,
    examGrade: 9,
    retakeGrade: null,
    avg: 8.7,
    createdAt: "2024-07-30T10:18:32.302Z",
    updatedAt: "2024-08-15T23:22:20.794Z",
    __v: 0,
  },
];

async function getSubjectsService() {
  try {
    const response = await axios.get(`${baseUrl}/subject`);
    return response.data;
  } catch (error) {
    return offlineList;
  }
}

async function createSubjectService(body: {}) {
  try {
    const response = await axios.post(`${baseUrl}/subject`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deleteSubjectService(id: string) {
  try {
    const response = await axios.delete(`${baseUrl}/subject/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateSubjectService(id: string, body: {}) {
  try {
    const response = await axios.patch(`${baseUrl}/subject/${id}`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

getSubjectsService();
export {
  getSubjectsService,
  createSubjectService,
  deleteSubjectService,
  updateSubjectService,
};
