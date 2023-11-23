import Input from "../Input";

const FormSection = ({
  labelText,
  inputName,
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
}) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={inputName} className="font-medium cursor-pointer">
        {labelText}
      </label>
      <Input
        type={inputType}
        id={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputOnChange}
      />
    </div>
  );
};

export default FormSection;
