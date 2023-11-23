import Link from "next/link";

const LinkButton = ({ href, children, active }) => {
  return (
    <Link
      href={href}
      className={`p-2 text-center duration-300 grow rounded-xl font-medium ${
        active
          ? "text-neutral-50 bg-indigo-700/80"
          : "hover:bg-indigo-700/80 hover:text-neutral-50"
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
