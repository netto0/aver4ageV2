export default interface ISubject {
    _id?: string,
    name: string,
    semester: number | string,
    avaQtt?: number | string,
    avaGrades: {},
    createdAt?: string,
    updatedAt?: string,
    __v?: number | string,
    examGrade?: number | string,
    pimGrade?: number | string,
    retakeGrade?: number | string
  }
// export default interface ISubject {
//     _id: string,
//     name: string,
//     semester: number,
//     avaQtt: number,
//     avaGrades: {},
//     createdAt: string,
//     updatedAt: string,
//     __v: number,
//     examGrade: number | null,
//     pimGrade: number | null,
//     retakeGrade: number | null
//   }