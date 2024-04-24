import axios from "axios";
import { baseUrl } from "../axios.ts";

const getSubjectsService = async () => {
  try {
    const response = await axios.get(`${baseUrl}/subject`);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const subjects = [
  {
    _id: "66283fb69d2cbf042e0f84e0",
    name: "Projeto de interface com o usuário",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1.5, 2.5, 2, 2.5],
    createdAt: "2024-04-23T23:09:42.327Z",
    updatedAt: "2024-04-23T23:15:32.304Z",
    __v: 0,
    examGrade: 5,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "6628405c9d2cbf042e0f84e2",
    name: "Programação orientada a objetos",
    semester: 3,
    avaQtt: 4,
    avaGrades: [2.25, 2.5, 2.25, 1.5],
    examGrade: 8.75,
    createdAt: "2024-04-23T23:12:28.384Z",
    updatedAt: "2024-04-23T23:12:28.384Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "6628419a9d2cbf042e0f84eb",
    name: "Engenharia de Software II",
    semester: 3,
    avaQtt: 4,
    avaGrades: [2, 2.25, 1.5, 2.25],
    examGrade: 8,
    createdAt: "2024-04-23T23:17:46.656Z",
    updatedAt: "2024-04-23T23:17:46.656Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f84ed",
    name: "Economia e Mercado",
    semester: 3,
    avaQtt: 4,
    avaGrades: [2, 2, 1.25, 0.75],
    examGrade: 6,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  {
    _id: "662841e39d2cbf042e0f99ed",
    name: "Matéria de Teste",
    semester: 3,
    avaQtt: 4,
    avaGrades: [1, 2, 3, 4],
    examGrade: 5,
    createdAt: "2024-04-23T23:18:59.300Z",
    updatedAt: "2024-04-23T23:18:59.300Z",
    __v: 0,
    pimGrade: null,
    retakeGrade: null
  },
  
];

export { getSubjectsService, subjects };
