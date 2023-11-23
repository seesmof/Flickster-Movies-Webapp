"use client";
import { usePathname } from "next/navigation";
import DesktopBar from "./navbar/DesktopBar";
import MobileBar from "./navbar/MobileBar";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/movies", label: "Movies" },
    { href: "/genres", label: "Genres" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="bg-neutral-800 text-neutral-300 z-50 fixed bottom-0 left-0 right-0 md:sticky md:top-0">
        <DesktopBar pathname={pathname} links={links} />
        <MobileBar pathname={pathname} links={links} />
      </nav>
    </>
  );
};

export default Navbar;
