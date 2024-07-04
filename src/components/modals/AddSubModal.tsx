import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../providers/GlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Input";
import {
  createSubjectService,
  updateSubjectService,
} from "../../api/services/subjectServices";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IForm from "../../interfaces/IForm";
import CloseBtn from "../CloseBtn";
import Button from "../Button";

interface Props {
  edit?: boolean;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Insira o nome da matéria!")
    .min(3, "O nome precisa ter 3 letras"),
  semester: yup
  .number()
  .required("Informe o semestre")
  .min(3,"Informe um valor")
  
});

export default function AddSubModal({ edit }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
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
  } = useForm<IForm>({
    resolver: yupResolver<any>(validationSchema),
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
            <CloseBtn clickFunc={closeModal} />
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
            <Button type="submit" color="green">
              {loading ? <p>Enviando...</p> : <p>+ Adicionar Matéria</p>}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
