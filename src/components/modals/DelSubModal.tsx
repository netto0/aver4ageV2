import React, { useState } from "react";
import { deleteSubjectService } from "../../api/services/subjectServices";
import { GlobalContext } from "../../providers/GlobalContext";
import { toast } from "react-toastify";
import Input from "../Input";
import CloseBtn from "../CloseBtn";
import Button from "../Button";

export default function DelSubModal() {
  const [loading, setLoading] = useState<boolean>(false);

  const { getSubjects, formFields, successToast, closeModal, activeModal } =
    React.useContext(GlobalContext);

  async function deleteSbj(e: any) {
    e.preventDefault();
    setLoading(true);
    const response = await deleteSubjectService(formFields._id!);
    if (response) {
      closeModal();
      getSubjects();
      toast.success("Matéria excluída com sucesso", successToast);
      return response;
    } else {
      console.log("Algo deu errado");
    }
  }

  function MobileDelModal() {
    return (
      <div
        id="DelModal"
        className={`absolute flex flex-col z-50 left-[50%] opacity-95 translate-x-[-50%] bg-color3 rounded-lg text-sky-200 transition-all sm:hidden font-semibold w-80 text-center ${
          // activeModal == "del" ? "top-1/3" : "-top-full"
          activeModal == "del" ? "top-1/3" : "-top-full"
        }`}
      >
        <div className="bg-color4 rounded-t-lg py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x absolute right-1 top-1 hover:cursor-pointer hover:text-color1 transition-all"
            viewBox="0 0 16 16"
            onClick={closeModal}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
          <h1>Excluir matéria?</h1>
        </div>
        <form onSubmit={deleteSbj}>
          <p className="pt-2 text-2xl">{formFields.name}</p>
          <div className="flex justify-center gap-3 w-full h-full rounded-b-lg px-4 py-4">
            <Button color="gray" clickFunc={closeModal}>
              Cancelar
            </Button>
            <Button type="submit" color="red">
              Excluir
            </Button>
          </div>
        </form>
      </div>
    );
  }

  function DesktopDelModal() {
    return (
      <>
        <div
          className="absolute z-50 w-full max-w-md max-h-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] hidden sm:block"
        >
          <div className="relative bg-color2 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Excluir matéria ?
              </h3>
              <CloseBtn clickFunc={closeModal} />
            </div>
            <form className="p-4 md:p-5" onSubmit={deleteSbj}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <Input name="name" type="text" readOnly={true} />
                </div>
              </div>
              <Button type="submit" color="red">
                {loading ? "Excluindo..." : "Excluir Matéria"}
              </Button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DesktopDelModal />
      <MobileDelModal />
    </>
  );
}
