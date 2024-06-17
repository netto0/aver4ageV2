import React, { useState } from "react";
import ISubject from "../interfaces/ISubject";
import { getSubjectsService } from "../components/Table";

type Props = {
  children: React.ReactNode;
};

type GlobalContextType = {
  subjectsList: ISubject[];
  getSubjects: () => void;
  activeModal: boolean | string;
  setActiveModal: (state:boolean|string) => void;
};

const initialValue = {
  subjectsList: [],
  getSubjects: () => {},
  activeModal: false,
  setActiveModal: () => {},
};

export const GlobalContext =
  React.createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: Props) => {
  
  const [subjectsList, setSubjectsList] = useState<ISubject[]>([]);
  const [activeModal, setActiveModal] = useState<boolean | string>("del");
  // const [activeModal, setActiveModal] = useState<boolean | string>(false);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
