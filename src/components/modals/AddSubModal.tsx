import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../providers/GlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ISubject from "../../interfaces/ISubject";
import Input from "../Input";
import {
  createSubjectService,
  updateSubjectService,
} from "../../api/services/subjectServices";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  edit?: boolean;
}

interface IFormFields {
  name: string;
  semester: number | null;
  avaGrade: number | null;
  pimGrade: number | null;
  examGrade: number | null;
  retakeGrade: number | null;
}

const defaultValues: IFormFields = {
  name: "",
  semester: null,
  avaGrade: null,
  pimGrade: null,
  examGrade: null,
  retakeGrade: null,
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Insira o nome da matéria!")
    .min(3, "O nome precisa ter 3 letras"),
  semester: yup.number().required("Informe o semestre"),
  avaGrade: yup.number().required(),
  pimGrade: yup.number().required(),
  examGrade: yup.number().required(),
  retakeGrade: yup.number().required(),
});

export default function AddSubModal({ edit }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [avg, setAvg] = useState<any>(null);
  const [showDiv, setShowDiv] = useState<boolean>(false);

  const {
    getSubjects,
    successToast,
    resetScrollInsideTable,
    formFields,
    setFormFields,
    closeModal,
    average,
  } = React.useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>({
    defaultValues,
    resolver: yupResolver<IFormFields>(validationSchema),
  });

  const postSubject = async () => {
    setLoading(true);
    const response = await createSubjectService(formFields);
    if (response) {
      closeModal();
      getSubjects();
      toast.success("Matéria incluída com sucesso!", successToast);
      setInterval(resetScrollInsideTable, 500);
      return response;
    } else {
      console.log("Algo deu errado");
    }
  };

  const editSubject = async (id: string) => {
    setLoading(true);
    const response = await updateSubjectService(id, formFields);
    if (response) {
      closeModal();
      getSubjects();
      toast.success("Matéria alterada com sucesso!", successToast);
      setInterval(resetScrollInsideTable, 500);
      return response;
    } else {
      console.log("Algo deu errado");
    }
  };

  const onSubmit = handleSubmit(() => {
    if (edit) {
      editSubject(formFields._id!);
    } else {
      postSubject();
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name != "name" && e.target.name != "semester") {
      setFormFields({
        ...formFields,
        [e.target.name]: parseFloat(e.target.value),
      });
    } else {
      setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    let media = average(
      formFields.avaGrade!,
      formFields.examGrade!,
      formFields.pimGrade!,
      formFields.retakeGrade!
    )!;
    const rtkNull = !formFields.retakeGrade;
    setAvg(media);
    if (!rtkNull) {
      setShowDiv(true);
    } else {
      if (media == null) {
        setShowDiv(false);
      } else {
        if (media > 7) {
          setShowDiv(false);
        } else {
          setShowDiv(true);
        }
      }
    }
  }, [formFields]);

  return (
    <>
      <div className="absolute z-50 w-full max-w-md max-h-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {edit ? "Editar matéria" : "Adicionar nova matéria"}
            </h3>
            <span className="bg-yellow-200">{avg}</span>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={onSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <Input
                  register={{ ...register("name") }}
                  name="name"
                  label="Nome"
                  type="text"
                  handleChange={handleChange}
                  autoFocus={true}
                  placeholder="Digite o nome da matéria..."
                  error={errors.name}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("semester") }}
                  name="semester"
                  label="Semestre"
                  type="number"
                  handleChange={handleChange}
                  placeholder="1"
                  error={errors.semester}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("avaGrade") }}
                  name="avaGrade"
                  label="AVA"
                  type="number"
                  handleChange={handleChange}
                  placeholder="1"
                  error={errors.avaGrade}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("pimGrade") }}
                  name="pimGrade"
                  label="PIM"
                  type="number"
                  handleChange={handleChange}
                  placeholder="1"
                  error={errors.pimGrade}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("examGrade") }}
                  name="examGrade"
                  label="Prova"
                  type="number"
                  handleChange={handleChange}
                  placeholder="1"
                  error={errors.examGrade}
                />
              </div>
              {showDiv && (
                <div className="col-span-2 sm:col-span-1">
                  <Input
                    register={{ ...register("retakeGrade") }}
                    name="retakeGrade"
                    label="Exame"
                    type="number"
                    handleChange={handleChange}
                    placeholder="1"
                    error={errors.retakeGrade}
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {loading ? "Enviando..." : "Adicionar Matéria"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
