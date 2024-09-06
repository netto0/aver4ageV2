import React, { useState } from "react";
import { deleteSubjectService } from "../../api/services/subjectServices";
import { GlobalContext } from "../../providers/GlobalContext";
import { toast } from "react-toastify";
import Input from "../Input";
import CloseBtn from "../CloseBtn";
import Button from "../Button";

export default function DelSubDesktop() {
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
    return (
      <>
        <div
          id="DelModal"
          className={`absolute z-50 w-full max-w-md max-h-full left-[50%] translate-x-[-50%] hidden sm:block transition-all ${
            activeModal == "del" ? "top-1/3" : "-top-full"
          }`}
        >
          <div className="relative bg-color2 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {/* Excluir matéria ? */}
                AAAAAAAAA
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
