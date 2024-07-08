import React, { InputHTMLAttributes } from "react";
import { GlobalContext } from "../providers/GlobalContext";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type: "number" | "text";
  readonly?: boolean;
  handleChange?: any;
  value?: any;
  register?: any;
  error?: any;
  rest?:any
}

export default function Input({
  name,
  label,
  type,
  // readOnly,
  handleChange,
  value,
  register,
  error,
  ...rest
}: Props) {
  const { formFields } = React.useContext(GlobalContext);
  let inputValue;
  if (value == null) {
    inputValue = "";
  } else {
    inputValue = value;
  }
  if (value) {
    inputValue = value;
  } else {
    inputValue = (formFields as unknown as Record<string, undefined>)[name]
      ? (formFields as unknown as Record<string, undefined>)[name]
      : "";
  }

  return (
    <>
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <input
        {...register}
        id={name}
        name={name}
        type={type}
        value={inputValue}
        className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        onChange={handleChange}
        {...rest}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </>
  );
}
