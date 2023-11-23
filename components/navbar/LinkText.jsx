import Link from "next/link";

const LinkText = ({ href, children, active }) => {
  return (
    <Link
      className={`font-medium ${
        active
          ? "text-neutral-50 underline underline-offset-4 decoration-indigo-700/80 decoration-2"
          : "hover:underline hover:underline-offset-4 hover:decoration-indigo-700/80 hover:decoration-2"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkText;
