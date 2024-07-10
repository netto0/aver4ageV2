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
  setSubjectsList: any;
  getSubjects: () => void;
  activeModal: boolean | string;
  setActiveModal: (state: boolean | string) => void;
  formFields: IForm;
  setFormFields: Dispatch<IForm>;
  successToast: object;
  resetScrollInsideTable: () => void;
  defaultForm: IForm;
  closeModal: () => void;
  average: (
    ava: number | null,
    exam: number | null,
    pim: number | null,
    rtk?: number | null
  ) => number | null | void;
  sortParameters: any;
  setSortParameters: Dispatch<any>;
};

function average(
  ava: number | null,
  exam: number | null,
  pim: number | null,
  rtk?: number | null
): number | null {
  if (ava && exam && pim) {
    let regularMD: number;
    // CÁLCULO PARA MATRÍCULA A PARTIR DE 2023 - Cursos Tecnólógicos
    regularMD = (7 * exam + 2 * pim + ava) / 10;
    // console.log("MD: ", regularMD)
    if (rtk) {
      // console.log("MF: ", (regularMD + rtk) / 2)
      return (regularMD + rtk) / 2;
    } else {
      return regularMD;
    }
  } else {
    return null;
  }
}

const defaultForm = {
  name: null,
  semester: null,
  avaGrade: null,
  examGrade: null,
  pimGrade: null,
  retakeGrade: null,
};

const defaultSort = {
  criteria: null,
  ascending: true,
};

const initialValue = {
  subjectsList: [],
  setSubjectsList: () => {},
  getSubjects: () => {},
  activeModal: false,
  setActiveModal: () => {},
  formFields: defaultForm,
  setFormFields: () => {},
  successToast: {},
  resetScrollInsideTable: () => {},
  defaultForm,
  closeModal: () => {},
  average: () => {},
  sortParameters: defaultSort,
  setSortParameters: () => {},
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
  const [sortParameters, setSortParameters] = useState(defaultSort);

  const getSubjects = async () => {
    const response = await getSubjectsService();
    if (response) {
      setSubjectsList(response);
    }
  };

  const closeModal = () => {
    setActiveModal(false);
    setFormFields(defaultForm);
  };

  return (
    <GlobalContext.Provider
      value={{
        subjectsList,
        setSubjectsList,
        getSubjects,
        activeModal,
        setActiveModal,
        formFields,
        setFormFields,
        successToast,
        resetScrollInsideTable,
        defaultForm,
        closeModal,
        average,
        sortParameters,
        setSortParameters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
