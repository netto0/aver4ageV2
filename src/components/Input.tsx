import React, { InputHTMLAttributes } from "react";
import { GlobalContext } from "../providers/GlobalContext";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: "number" | "text";
  value: any;
  handleChange: any;
}

export default function Input({
  name,
  type,
  value,
  handleChange,
  ...rest
}: Props) {
  const { formFields } = React.useContext(GlobalContext);

  return (
    <input
      className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
      type={type}
      name={name}
      id={name}
      // value={value}
      value={
        (formFields as Record<string, undefined>)[name]
          ? (formFields as Record<string, IconType | undefined>)[name]
          : ""
      }
      onChange={handleChange}
      {...rest}
    />
  );
}
