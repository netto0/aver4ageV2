import React, { useState, Dispatch } from "react";
import ISubject from "../interfaces/ISubject";
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
  currentSubject: ISubject;
  setCurrentSubject: Dispatch<ISubject>;
  successToast: object;
  resetScrollInsideTable: () => void
};

const initialValue = {
  subjectsList: [],
  getSubjects: () => {},
  activeModal: false,
  setActiveModal: () => {},
  currentSubject: {
    _id: "",
    name: "",
    semester: "",
    avaQtt: "",
    avaGrades: {},
    createdAt: "",
    updatedAt: "",
    __v: "",
    examGrade: "",
    pimGrade: "",
    retakeGrade: ""
  },
  setCurrentSubject: () => {},
  successToast:{},
  resetScrollInsideTable: () => {}
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
  let tableBody = document.getElementById("table")
  tableBody!.scrollTo(0, tableBody!.scrollHeight)
}

export const GlobalContext =
  React.createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: Props) => {
  const [currentSubject, setCurrentSubject] = useState<ISubject>(initialValue.currentSubject);
  const [subjectsList, setSubjectsList] = useState<ISubject[]>([]);
  const [activeModal, setActiveModal] = useState<boolean | string>(initialValue.activeModal);

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
        currentSubject,
        setCurrentSubject,
        successToast,
        resetScrollInsideTable
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
