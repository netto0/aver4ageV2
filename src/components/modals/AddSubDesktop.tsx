import { GlobalContext } from "../../providers/GlobalContext";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createSubjectService,
  updateSubjectService,
} from "../../api/services/subjectServices";
import Input from "../Input";
import IForm from "../../interfaces/IForm";
import CloseBtn from "../CloseBtn";
import Button from "../Button";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Insira o nome da matéria.")
    .min(3, "O nome precisa ter 3 letras"),
  semester: yup.string().required("Insira o semestre."),
});

export default function AddSubDesktop() {
  const [readInput, setReadInput] = useState<boolean>(false);
  const {
    getSubjects,
    successToast,
    resetScrollInsideTable,
    formFields,
    setFormFields,
    closeModal,
    average,
    loading,
    setLoading,
    activeModal,
  } = React.useContext(GlobalContext);

  const postSubject = async () => {
    setLoading(true);
    const response = await createSubjectService(formFields);
    if (response) {
      closeModal();
      getSubjects();
      toast.success("Matéria incluída com sucesso!", successToast);
      setTimeout(resetScrollInsideTable, 500);
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
      setTimeout(resetScrollInsideTable, 500);
      return response;
    } else {
      console.log("Algo deu errado");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver<any>(validationSchema),
  });

  const onSubmit = handleSubmit(() => {
    if (activeModal == "edit") {
      editSubject(formFields._id!);
    } else {
      postSubject();
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name != "name" && e.target.name != "semester") {
      if (parseFloat(e.target.value) >= 10) {
        setFormFields({
          ...formFields,
          [e.target.name]: 10,
        });
      } else if (parseFloat(e.target.value) <= 0) {
        setFormFields({
          ...formFields,
          [e.target.name]: 0,
        });
      } else {
        setFormFields({
          ...formFields,
          [e.target.name]: parseFloat(e.target.value),
        });
      }
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
    setFormFields({ ...formFields, avg: media });
    const rtkNull = !formFields.retakeGrade;
    if (!rtkNull) {
      setReadInput(true);
    } else {
      if (media == null) {
        setReadInput(false);
      } else {
        if (media > 7) {
          setReadInput(false);
        } else {
          setReadInput(true);
        }
      }
    }
  }, [
    formFields.avaGrade,
    formFields.examGrade,
    formFields.pimGrade,
    formFields.retakeGrade,
  ]);

  return (
    <>
      <div
        id="AddSubDesktop"
        onClick={(e) => e.stopPropagation()}
        className={`hidden sm:block opacity-95 z-50 w-full max-w-md max-h-full animate-dropDown transition-all backdrop-blur-sm`}
      >
        <div className="relative bg-color2 rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-color3">
            {/* <h3 className="text-lg font-semibold text-blue-200"> */}
            <h3 className="text-lg font-semibold text-gray-400">
              {activeModal == "edit" && "Editar matéria"}
              {activeModal == "add" && "Adicionar matéria"}
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
                  autoFocus
                  placeholder="Digite o nome da matéria..."
                  error={errors.name}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("semester") }}
                  name="semester"
                  label="Semestre"
                  max={10}
                  min={0}
                  type="number"
                  handleChange={handleChange}
                  placeholder="0"
                  error={errors.semester}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("avaGrade") }}
                  name="avaGrade"
                  label="AVA"
                  max={10}
                  min={0}
                  type="number"
                  step=".001"
                  handleChange={handleChange}
                  placeholder="0"
                  error={errors.avaGrade}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("pimGrade") }}
                  name="pimGrade"
                  label="PIM"
                  max={10}
                  min={0}
                  type="number"
                  step=".001"
                  handleChange={handleChange}
                  placeholder="0"
                  error={errors.pimGrade}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("examGrade") }}
                  name="examGrade"
                  label="Prova"
                  max={10}
                  min={0}
                  type="number"
                  step=".001"
                  handleChange={handleChange}
                  placeholder="0"
                  error={errors.examGrade}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("retakeGrade") }}
                  name="retakeGrade"
                  label="Exame"
                  max={10}
                  min={0}
                  type="number"
                  step=".001"
                  handleChange={handleChange}
                  error={errors.retakeGrade}
                  readOnly={!readInput}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  register={{ ...register("avg") }}
                  name="avg"
                  label="Média"
                  max={10}
                  min={0}
                  value={formFields.avg?.toFixed(1)}
                  type="number"
                  step=".001"
                  error={errors.avg}
                  readOnly
                />
              </div>
            </div>
            <Button type="submit" color="green">
              {loading ? (
                <p>Enviando...</p>
              ) : (
                <p>{activeModal == "edit" ? "Salvar" : "Enviar"}</p>
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
