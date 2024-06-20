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
  deleteSubject: IDelete;
  setDeleteSubject: Dispatch<IDelete>;
  successToast: object;
  resetScrollInsideTable: () => void
};

interface IDelete {
  _id: string;
  name: string;
}

const initialValue = {
  subjectsList: [],
  getSubjects: () => {},
  activeModal: false,
  setActiveModal: () => {},
  deleteSubject: {
    _id: "",
    name: "",
  },
  setDeleteSubject: () => {},
  successToast:{},
  resetScrollInsideTable: () => {}
};

const successToast: ToastOptions = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

function resetScrollInsideTable() {
  let tableBody = document.getElementById("table")
  tableBody!.scrollTo(0, tableBody!.scrollHeight)
}

export const GlobalContext =
  React.createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: Props) => {
  const [deleteSubject, setDeleteSubject] = useState<IDelete>(initialValue.deleteSubject);
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
        deleteSubject,
        setDeleteSubject,
        successToast,
        resetScrollInsideTable
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
