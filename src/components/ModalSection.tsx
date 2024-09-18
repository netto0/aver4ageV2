import React from "react";
import { GlobalContext } from "../providers/GlobalContext";
import AddSubDesktop from "./modals/AddSubDesktop";
import AddSubMobile from "./modals/AddSubMobile";
import DelSubMobile from "./modals/DelSubMobile";
import DelSubDesktop from "./modals/DelSubDesktop";
import SideMenu from "./modals/SideMenu";

export default function ModalSection() {
  const { activeModal, closeModal } = React.useContext(GlobalContext);

  return (
    <div
      id="ModalSection"
      onClick={closeModal}
      className={`w-full z-50 backdrop-blur-sm h-screen fixed transition-all duration-300 flex justify-center items-center animate-fadeIn`}
    >
      {(activeModal == "add" || activeModal == "edit") && (
        <>
          <AddSubDesktop /> <AddSubMobile />
        </>
      )}
      {activeModal == "del" && (
        <>
          <DelSubMobile /> <DelSubDesktop />
        </>
      )}
      {activeModal == "side" && <SideMenu />}
    </div>
  );
}
