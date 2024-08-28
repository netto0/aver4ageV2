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

  const defaultClass = `bg-color2 sm:bg-color3 h-20 sm:h-fit truncate sm:border sm:border-none placeholder-color3 
    sm:placeholder-color1 pl-1.5 text-blue-200 text-lg sm:text-sm sm:rounded-lg block w-full p-2.5 inputDarkModeOverride focus:outline-none`;

  const readOnlyClass =
    "bg-color4 border border-none text-blue-200 text-sm rounded-lg block w-full p-2.5 outline-none hover:cursor-auto inputDarkModeOverride";

  return (
    <div className="w-full sm:block flex border-b border-color4 sm:border-none">
      {label && (
        <label
          htmlFor={label}
          className={`flex gap-1 text-xl sm:text-sm items-center sm:px-0 pl-5 sm:w-fit w-fit ${
            readOnly ? "text-sky-800" : "text-sky-600 sm:text-blue-300"
          }`}
        >
          {label}
          <span className="sm:hidden">:</span>
        </label>
      )}

      <input
        {...register}
        id={name}
        name={name}
        type={type}
        value={inputValue}
        className={readOnly ? readOnlyClass : defaultClass}
        readOnly={readOnly}
        onChange={handleChange}
        {...rest}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
}
