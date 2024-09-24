import React, { useState, Dispatch } from "react";
import { ToastOptions } from "react-toastify";
import { getSubjectsService } from "../components/Table";
import ISubject from "../interfaces/ISubject";
import IForm from "../interfaces/IForm";

import { resetScrollInsideTable, average } from "../utils/functions";

interface IProps {
  children: React.ReactNode;
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

const successToast: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

type GlobalContextType = {
  subjectsList: ISubject[];
  setSubjectsList: any;
  formFields: IForm;
  setFormFields: Dispatch<IForm>;
  searchStr: string;
  setSearchStr: Dispatch<any>;
  loading: boolean;
  setLoading: Dispatch<any>;
  completeOnly: boolean;
  setCompleteOnly: Dispatch<any>;
  sortParameters: any;
  setSortParameters: Dispatch<any>;
  activeModal: boolean | string;
  setActiveModal: (state: boolean | string) => void;
  showSortMenu: boolean;
  setShowSortMenu: Dispatch<any>;

  getSubjects: () => void;
  resetScrollInsideTable: () => void;
  closeModal: () => void;
  average: (
    ava: number | null,
    exam: number | null,
    pim: number | null,
    rtk?: number | null,
    log?: boolean
  ) => number | null | void;

  successToast: object;
  defaultForm: IForm;
  defaultSubs: any;
  sortedList: any;
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
  defaultSubs: [],
  searchStr: "",
  setSearchStr: () => {},
  loading: false,
  setLoading: () => {},
  completeOnly: false,
  setCompleteOnly: () => {},
  showSortMenu: false,
  setShowSortMenu: () => {},
  sortedList: [],
};

export const GlobalContext =
  React.createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: IProps) => {
  const [formFields, setFormFields] = useState<IForm>(initialValue.formFields);
  const [defaultSubs, setDefaultSubs] = useState(initialValue.defaultSubs);
  const [searchStr, setSearchStr] = useState(initialValue.searchStr);
  const [loading, setLoading] = useState<boolean>(initialValue.loading);
  const [showSortMenu, setShowSortMenu] = useState<boolean>(
    initialValue.showSortMenu
  );
  const [subjectsList, setSubjectsList] = useState<ISubject[]>(
    initialValue.subjectsList
  );
  const [sortParameters, setSortParameters] = useState(
    initialValue.sortParameters
  );
  const [activeModal, setActiveModal] = useState<boolean | string>(
    initialValue.activeModal
  );
  const [completeOnly, setCompleteOnly] = useState<boolean>(
    initialValue.completeOnly
  );

  async function getSubjects() {
    const response = await getSubjectsService();
    if (response) {
      setSubjectsList(response);
      setDefaultSubs(response);
    }
  }

  function closeModal() {
    setTimeout(() => {
      setActiveModal(false);
      setFormFields(defaultForm);
      setLoading(false);
    }, 0);
  }

  function sortFunc(a: any, b: any) {
    if (
      typeof a[sortParameters.criteria!] == "string" &&
      typeof b[sortParameters.criteria!] == "string"
    ) {
      if (sortParameters.ascending) {
        return a[sortParameters.criteria!].localeCompare(
          b[sortParameters.criteria!]
        );
      } else {
        return b[sortParameters.criteria!].localeCompare(
          a[sortParameters.criteria!]
        );
      }
    } else {
      if (sortParameters.ascending) {
        return a[sortParameters.criteria!] - b[sortParameters.criteria!];
      } else {
        return b[sortParameters.criteria!] - a[sortParameters.criteria!];
      }
    }
  }

  const sortedList = subjectsList.slice();
  sortedList.sort(sortFunc);

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
        defaultSubs,
        searchStr,
        setSearchStr,
        loading,
        setLoading,
        completeOnly,
        setCompleteOnly,
        showSortMenu,
        setShowSortMenu,
        sortedList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
