import React, { InputHTMLAttributes } from "react";
import { GlobalContext } from "../providers/GlobalContext";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type: "number" | "text";
  readOnly?: boolean;
  handleChange?: any;
  value?: any;
  register?: any;
  error?: any;
  rest?: any;
}

export default function Input({
  name,
  label,
  type,
  handleChange,
  value,
  register,
  error,
  readOnly,
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

  const defaultClass =
    "bg-color4 border border-none placeholder-color1 text-blue-200 text-sm rounded-lg focus:ring-color5 focus:border-color5 block w-full p-2.5 inputDarkModeOverride";
  const readOnlyClass =
    "bg-color4 border border-none text-blue-200 text-sm rounded-lg block w-full p-2.5 outline-none hover:cursor-auto inputDarkModeOverride";

  return (
    <>
      {label && (
        <label
          htmlFor={label}
          className={`block mb-2 text-sm ${
            readOnly ? "text-sky-800" : "text-blue-200"
          }`}
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
        className={readOnly ? readOnlyClass  : defaultClass}
        readOnly={readOnly}
        onChange={handleChange}
        {...rest}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </>
  );
}
