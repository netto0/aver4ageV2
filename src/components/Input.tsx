interface Props {
  placeholder: string;
  name: string;
  value: any;
  handleChange: any
}

export default function Input({ placeholder, name, value, handleChange }: Props) {
  return (
    <input
      className="rounded-md px-2 placeholder-gray-500 focus:outline-none drop-shadow-md grow"
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
