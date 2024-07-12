export default interface IForm {
    _id?: string,
    name: string | null,
    semester: number | null,
    avaGrade: number | null,
    createdAt?: string,
    updatedAt?: string,
    __v?: number,
    pimGrade: number | null,
    examGrade: number | null,
    retakeGrade: number | null,
    avg?: number | null
  }
