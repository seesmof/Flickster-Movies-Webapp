const Input = ({
  type,
  placeholder,
  className,
  id,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} rounded-xl p-2 px-3 bg-inherit border-2 border-neutral-700 hover:border-indigo-600/90 focus:outline-none focus:border-indigo-600/90`}
      id={id}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
