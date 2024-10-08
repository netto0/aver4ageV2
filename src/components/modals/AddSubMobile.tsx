import { GlobalContext } from "../../providers/GlobalContext";
import React, { useEffect } from "react";
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

interface Props {
  edit?: boolean;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Insira o nome da matéria.")
    .min(3, "O nome precisa ter 3 letras"),
  semester: yup.string().required("Insira o semestre."),
});

export default function AddSubMobile({ edit }: Props) {
  const {
    getSubjects,
    successToast,
    resetScrollInsideTable,
    formFields,
    setFormFields,
    closeModal,
    average,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name != "name") {
      let maxValue = 10
      if (e.target.name == "semester"){
        maxValue = 12
      }
      
      if (parseFloat(e.target.value) >= maxValue) {
        setFormFields({
          ...formFields,
          [e.target.name]: maxValue,
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
  }, [
    formFields.avaGrade,
    formFields.examGrade,
    formFields.pimGrade,
    formFields.retakeGrade,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver<any>(validationSchema),
  });

  const onSubmit = handleSubmit(() => {
    if (edit) {
      editSubject(formFields._id!);
    } else {
      postSubject();
    }
  });
  return (
    <div
      id="AddSubMobile"
      onClick={(e) => e.stopPropagation()}
      className={`absolute sm:hidden bg-color2 z-50 opacity-95 backdrop-blur-sm w-full h-screen transition-all animate-dropDown`}
    >
      <div className="flex text-textColor justify-between items-center p-5 bg-color1 rounded-t-lg">
        <button
          className="hover:bg-color4 hover:text-color1 p-1 rounded-md transition-all"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg font-bold"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>

        <h1 className="text-xl font-semibold">
          {activeModal == "edit" && "Editar matéria"}
          {activeModal == "add" && "Adicionar matéria"}
        </h1>
        <button
          onClick={onSubmit}
          className="bg-customOrange font-semibold text-color1 py-2 px-4 rounded-full"
        >
          Enviar
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          register={{ ...register("name") }}
          label="Nome"
          name="name"
          type="text"
          autoFocus={activeModal == "add" ? true : false}
          handleChange={handleChange}
          autoComplete="off"
          error={errors.name}
        />
        <Input
          register={{ ...register("semester") }}
          label="Semestre"
          name="semester"
          type="number"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.semester}
        />
        <Input
          register={{ ...register("avaGrade") }}
          label="AVA"
          name="avaGrade"
          type="number"
          step=".001"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.avaGrade}
        />
        <Input
          register={{ ...register("pimGrade") }}
          label="PIM"
          name="pimGrade"
          type="number"
          step=".001"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.pimGrade}
        />
        <Input
          register={{ ...register("examGrade") }}
          label="Prova"
          name="examGrade"
          type="number"
          step=".001"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.examGrade}
        />
        {formFields.avg! < 7 && formFields.avg! != null && (
          <Input
            register={{ ...register("retakeGrade") }}
            label="Exame"
            name="retakeGrade"
            type="number"
            step=".001"
            handleChange={handleChange}
            autoComplete="off"
            error={errors.retakeGrade}
          />
        )}
      </form>
      <div className="w-fit ml-auto mr-2 mt-2 bg-color4 rounded-xl px-9 py-2 text-center text-textColor flex flex-col items-center">
        <span className="absolute">Média</span>
        <h1 className="text-4xl mt-5">
          {formFields.avg ? formFields.avg.toFixed(2) : (0.0).toFixed(1)}
        </h1>
      </div>
    </div>
  );
}
