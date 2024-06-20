import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createSubjectService } from "../api/services/subjectServices";
import { GlobalContext } from "../providers/GlobalContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Subject = {
  name: string;
  semester: number | null;
  avaQtt: number;
  avaGrades: { [k: string]: number } | undefined;
  examGrade: number | null;
  pimGrade: number | null;
  retakeGrade: number | null;
};

export default function AddSubModal() {
  const [formFields, setFormFields] = useState({
    name: "",
    semester: null,
    avaQtt: 0,
    avaGrades: {},
    examGrade: null,
    pimGrade: null,
    retakeGrade: null,
  });

  const [showAva, setShowAva] = useState<boolean | string>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { getSubjects, setActiveModal, successToast, resetScrollInsideTable } = React.useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Subject>();

  // ===================================================================

  const postSubject = async () => {
    setLoading(true);
    const response = await createSubjectService(formFields);
    if (response) {
      setActiveModal(false);
      getSubjects();
      toast.success("Matéria incluída com sucesso!", successToast)
      setInterval(resetScrollInsideTable, 500)
      return response;
    } else {
      console.log("Algo deu errado");
    }
  };

  const onSubmit = handleSubmit(() => {
    postSubject();
  });

  // ===================================================================

  const toggleAva = () => {
    if (formFields.avaQtt != 0) {
      setShowAva(!showAva);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetNames = ["name", "semester", "avaQtt", "pimGrade", "examGrade"];
    let grades = formFields.avaGrades;

    if (targetNames.includes(e.target.name)) {
      setFormFields({ ...formFields, [e.target.name]: e.target.value });
    } else {
      grades = { ...grades, [e.target.name]: parseFloat(e.target.value) };
      setFormFields({ ...formFields, avaGrades: grades });
    }
  };

  const avaList = [];

  for (let i = 1; i <= formFields.avaQtt; i++) {
    avaList.push(
      <div className="col-span-1 sm:col-span-1" key={i}>
        <label
          htmlFor={`ava${i}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {`AVA ${i}`}
        </label>
        <input
          type="number"
          name={`ava${i}`}
          id={`ava${i}`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="0"
          min={0}
          onClick={(e) =>
            console.log(e.currentTarget.name + " " + e.currentTarget.value)
          }
          onChange={handleChange}
        />
      </div>
    );
  }

  return (
    <>
      <div className="absolute z-50 w-full max-w-md max-h-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Adicionar nova matéria
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
                  // {...register("name", { required: true })}
                  // https://react-hook-form.com/advanced-usage
                  type="text"
                  name="name"
                  id="name"
                  value={formFields.name}
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
                  Quantidade AVA *
                </label>
                <div className="flex flex-col">
                  <div className="flex gap-1 items-center">
                    <input
                      {...register("avaQtt", { required: true })}
                      type="number"
                      name="avaQtt"
                      id="avaQtt"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0"
                      min={0}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="text-gray-400  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="crud-modal"
                      onClick={toggleAva}
                    >
                      {showAva ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-up-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-down-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.avaQtt && (
                    <span className="text-red-500 text-sm">
                      Campo obrigatório
                    </span>
                  )}
                </div>
              </div>
              <div
                className={`col-span-2 flex w-full h-fit max-h-[155px] overflow-auto no-scrollbar gap-3 ${
                  !showAva && "hidden"
                } flex-wrap justify-between`}
              >
                {avaList}
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
