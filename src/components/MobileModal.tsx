import React from "react";
import { GlobalContext } from "../providers/GlobalContext";
import Input from "./Input";
import { createSubjectService } from "../api/services/subjectServices";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import IForm from "../interfaces/IForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function MobileModal() {
  const {
    formFields,
    setFormFields,
    closeModal,
    setLoading,
    getSubjects,
    successToast,
    resetScrollInsideTable,
  } = React.useContext(GlobalContext);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Insira o nome da matéria.")
      .min(3, "O nome precisa ter 3 letras"),
    semester: yup.string().required("Insira o semestre."),
  });

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
      setTimeout(resetScrollInsideTable, 500);
      return response;
    } else {
      console.log("Algo deu errado");
    }
  };

  const onSubmit = handleSubmit(() => {
    postSubject();
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

  return (
    <div className="absolute sm:hidden bg-color2 z-50 w-full h-100%">
      <div className="flex text-textColor justify-between items-center p-5 bg-color1 sticky top-0">
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

        <h1 className="text-xl font-semibold">Adicionar matéria</h1>
        <button
          // type="submit"
          onClick={onSubmit}
          className="bg-customOrange font-semibold text-color1 py-2 px-4 rounded-full"
        >
          Enviar
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          register={{ ...register("name") }}
          name="name"
          type="text"
          placeholder="Nome"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.name}
        />
        <Input
          register={{ ...register("semester") }}
          name="semester"
          type="text"
          placeholder="Semestre"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.semester}
        />
        <Input
          register={{ ...register("avaGrade") }}
          name="avaGrade"
          type="text"
          placeholder="AVA"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.avaGrade}
        />
        <Input
          register={{ ...register("pimGrade") }}
          name="pimGrade"
          type="text"
          placeholder="PIM"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.pimGrade}
        />
        <Input
          register={{ ...register("examGrade") }}
          name="examGrade"
          type="text"
          placeholder="Prova"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.examGrade}
        />
        <Input
          register={{ ...register("retakeGrade") }}
          name="retakeGrade"
          type="text"
          placeholder="Exame"
          handleChange={handleChange}
          autoComplete="off"
          error={errors.retakeGrade}
        />
      </form>
      <div className="w-fit ml-auto mr-2 mt-2 bg-color4 rounded-xl px-9 py-2 text-center text-textColor flex flex-col items-center">
        <span className="absolute">Média</span>
        <h1 className="text-4xl mt-5">
          {formFields.avg ? formFields.avg.toFixed(2) : (0.0).toFixed(2)}
        </h1>
      </div>
    </div>
  );
}
