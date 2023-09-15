interface IInputProps {
  label: string;
  placeholder?: string;
}

function Input(props: IInputProps) {
  const { label, placeholder } = props;
  return (
    <span className="flex flex-col text-start">
      <label className="font-medium text-white">{label}</label>
      <input className="bg-transparent border-b-2 text-white" placeholder={placeholder} />
    </span>
  );
}

export default Input;
