const Button = ({ type, className, children, onClick, ...props }) => {
  return (
    <button
      type={type}
      className={`${className} bg-indigo-600/90 border-2 border-indigo-600/90 hover:bg-indigo-500/95 hover:border-indigo-500/95 duration-300 text-white font-medium rounded-xl p-2 px-4 md:px-6 active:scale-95`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
