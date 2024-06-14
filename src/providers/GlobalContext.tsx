import React, { useState } from "react";
import ISubject from "../interfaces/ISubject";
import { getSubjectsService } from "../components/Table";

type Props = {
  children: React.ReactNode;
};

type GlobalContextType = {
  subjectsList: ISubject[];
  getSubjects: () => void;
  addModal: boolean;
  delModal: boolean;
  toggleAddModal: () => void;
  toggleDelModal: () => void;
};

const initialValue = {
  subjectsList: [],
  getSubjects: () => {},
  addModal: false,
  delModal: false,
  toggleAddModal: () => {},
  toggleDelModal: () => {},
};

export const GlobalContext =
  React.createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: Props) => {
  const [subjectsList, setSubjectsList] = useState<ISubject[]>([]);

  const [addModal, setAddModal] = useState(false);
  const [delModal, setDelModal] = useState(false);

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const toggleDelModal = () => {
    setDelModal(!delModal);
  };

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
        addModal,
        toggleAddModal,
        delModal,
        toggleDelModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
