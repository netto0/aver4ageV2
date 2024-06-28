import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { deleteSubjectService } from "../../api/services/subjectServices";
import { GlobalContext } from "../../providers/GlobalContext";
import { toast } from "react-toastify";

type Subject = {
  name: string;
  semester: number | null;
  avaQtt: number;
  avaGrades: { [k: string]: number } | undefined;
  examGrade: number | null;
  pimGrade: number | null;
  retakeGrade: number | null;
};

export default function DelSubModal() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    getSubjects,
    setActiveModal,
    formFields,
    setFormFields,
    successToast,
    defaultForm,
  } = React.useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Subject>();

  // ===================================================================

  const deleteSbj = async () => {
    setLoading(true);
    const response = await deleteSubjectService(formFields._id!);
    if (response) {
      toast.success("Matéria excluída com sucesso", successToast);
      closeModal();
      getSubjects();
      return response;
    } else {
      console.log("Algo deu errado");
    }
  };

  const onSubmit = handleSubmit(() => {
    deleteSbj();
  });

  const closeModal = () => {
    setActiveModal(false);
    setFormFields(defaultForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="absolute z-50 w-full max-w-md max-h-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Excluir matéria ?
            </h3>
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
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={onSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <input
                  {...register("name", { minLength: 3 })}
                  type="text"
                  name="name"
                  readOnly={true}
                  id="name"
                  value={formFields.name!}
                  className="bg-gray-600 border border-gray-500 text-white text-m font-semibold rounded-lg block w-full p-2.5 outline-none hover:cursor-auto"
                  placeholder="Digite o nome da matéria..."
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    O nome precisa ter no mínimo 3 letras
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-red-500 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {loading ? "Excluindo..." : "Excluir Matéria"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
