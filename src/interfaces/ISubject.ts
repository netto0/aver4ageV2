export default interface ISubject {
    _id: string,
    name: string,
    semester: number,
    avaQtt: number,
    avaGrades: {},
    createdAt: string,
    updatedAt: string,
    __v: number,
    examGrade: number | null,
    pimGrade: number | null,
    retakeGrade: number | null
  }