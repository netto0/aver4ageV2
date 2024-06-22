import React, { useState, Dispatch } from "react";
import ISubject from "../interfaces/ISubject";
import IForm from "../interfaces/IForm";
import { getSubjectsService } from "../components/Table";
import { ToastOptions } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

type GlobalContextType = {
  subjectsList: ISubject[];
  getSubjects: () => void;
  activeModal: boolean | string;
  setActiveModal: (state: boolean | string) => void;
  formFields: IForm;
  setFormFields: Dispatch<IForm>;
  successToast: object;
  resetScrollInsideTable: () => void;
};

const defaultForm = {
  name: null,
  semester: null,
  avaGrade: null,
  examGrade: null,
  pimGrade: null,
  retakeGrade: null
};

const initialValue = {
  subjectsList: [],
  getSubjects: () => {},
  activeModal: "add",
  setActiveModal: () => {},
  formFields: defaultForm,
  setFormFields: () => {},
  successToast: {},
  resetScrollInsideTable: () => {},
};

const successToast: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

function resetScrollInsideTable() {
  let tableBody = document.getElementById("table");
  tableBody!.scrollTo(0, tableBody!.scrollHeight);
}

export const GlobalContext =
  React.createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: Props) => {
  const [formFields, setFormFields] = useState<IForm>(defaultForm);
  const [subjectsList, setSubjectsList] = useState<ISubject[]>([]);
  const [activeModal, setActiveModal] = useState<boolean | string>(
    initialValue.activeModal
  );

  const getSubjects = async () => {
    const response = await getSubjectsService();
    if (response) {
      setSubjectsList(response);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        subjectsList,
        getSubjects,
        activeModal,
        setActiveModal,
        formFields,
        setFormFields,
        successToast,
        resetScrollInsideTable,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
