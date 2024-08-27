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

export default function AddSubModal({ edit }: Props) {
  console.log("ADDSUB");
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
    console.log("HandleChange");
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
    console.log("UseEffect (Não é)");
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

  function DesktopVersion() {
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
      <>
        <div
          id="desktop"
          className="hidden sm:block absolute z-50 w-full max-w-md max-h-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        >
          <div className="relative bg-color2 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-color3">
              <h3 className="text-lg font-semibold text-blue-200">
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
                    type="number"
                    error={errors.avg}
                    readOnly
                  />
                </div>
              </div>
              <Button type="submit" color="green">
                {loading ? (
                  <p>Enviando...</p>
                ) : (
                  <p>{edit ? "Salvar" : "Enviar"}</p>
                )}
              </Button>
            </form>
          </div>
        </div>
      </>
    );
  }

  function MobileVersion() {
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
      <div id="mobile" className="fixed top-0 sm:hidden bg-color2 z-50 w-full h-screen">
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

          <h1 className="text-xl font-semibold">
            {edit ? "Editar matéria" : "Adicionar nova matéria"}
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
            handleChange={handleChange}
            autoComplete="off"
            error={errors.name}
          />
          <Input
            register={{ ...register("semester") }}
            label="Semestre"
            name="semester"
            type="text"
            handleChange={handleChange}
            autoComplete="off"
            error={errors.semester}
          />
          <Input
            register={{ ...register("avaGrade") }}
            label="AVA"
            name="avaGrade"
            type="text"
            handleChange={handleChange}
            autoComplete="off"
            error={errors.avaGrade}
          />
          <Input
            register={{ ...register("pimGrade") }}
            label="PIM"
            name="pimGrade"
            type="text"
            handleChange={handleChange}
            autoComplete="off"
            error={errors.pimGrade}
          />
          <Input
            register={{ ...register("examGrade") }}
            label="Prova"
            name="examGrade"
            type="text"
            handleChange={handleChange}
            autoComplete="off"
            error={errors.examGrade}
          />
          {formFields.avg! < 7 && formFields.avg! != null && (
            <Input
              register={{ ...register("retakeGrade") }}
              label="Exame"
              name="retakeGrade"
              type="text"
              handleChange={handleChange}
              autoComplete="off"
              error={errors.retakeGrade}
            />
          )}
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
  return (
    <>
      <DesktopVersion />
      <MobileVersion />
    </>
  );
}
