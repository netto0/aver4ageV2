import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createSubjectService } from "../api/services/subjectServices";
import { GlobalContext } from "../providers/GlobalContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ISubject from "../interfaces/ISubject";

interface Props {
  edit?: boolean;
}

export default function AddSubModal({ edit }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    getSubjects,
    setActiveModal,
    successToast,
    resetScrollInsideTable,
    formFields,
    setFormFields,
  } = React.useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubject>();

  const postSubject = async () => {
    setLoading(true);
    const response = await createSubjectService(formFields);
    if (response) {
      setActiveModal(false);
      getSubjects();
      toast.success("Matéria incluída com sucesso!", successToast);
      setInterval(resetScrollInsideTable, 500);
      return response;
    } else {
      console.log("Algo deu errado");
    }
  };

  const onSubmit = handleSubmit(() => {
    postSubject();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute z-50 w-full max-w-md max-h-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {edit ? "Editar matéria" : "Adicionar nova matéria"}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={() => setActiveModal(false)}
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
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={onSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nome *
                </label>
                <input
                  {...register("name", { minLength: 3 })}
                  type="text"
                  name="name"
                  id="name"
                  value={formFields.name ? formFields.name : ""}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Digite o nome da matéria..."
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    O nome precisa ter no mínimo 3 letras
                  </span>
                )}
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="semester"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Semestre *
                </label>
                <input
                  {...register("semester", { required: true })}
                  type="number"
                  name="semester"
                  id="semester"
                  value={formFields.semester ? formFields.semester : ""}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="1"
                  min={1}
                  onChange={handleChange}
                />
                {errors.semester && (
                  <span className="text-red-500 text-sm">
                    Campo obrigatório
                  </span>
                )}
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="avaQtt"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nota AVA
                </label>
                <div className="flex flex-col">
                  <div className="flex gap-1 items-center">
                    <input
                      type="number"
                      name="avaGrade"
                      id="avaGrade"
                      value={formFields.avaGrade ? formFields.avaGrade : ""}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0"
                      min={0}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="pimGrade"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  PIM
                </label>
                <input
                  type="number"
                  name="pimGrade"
                  id="pimGrade"
                  value={formFields.pimGrade ? formFields.pimGrade : ""}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="1"
                  min={0}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="examGrade"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prova
                </label>
                <input
                  type="number"
                  name="examGrade"
                  id="examGrade"
                  value={formFields.examGrade ? formFields.examGrade : ""}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="1"
                  min={0}
                  onChange={handleChange}
                />
              </div>
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

            {JSON.stringify(formFields)}
          </form>
        </div>
      </div>
    </>
  );
}
