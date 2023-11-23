"use client";
import Link from "next/link";
import LinkText from "./LinkText";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../Input";

const DesktopBar = ({ links, pathname }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center p-4">
      <Link href={"/"}>
        <img
          src="/cinema.png"
          alt="Website logo"
          loading="lazy"
          className="h-10 w-10 hover:scale-105 duration-300 active:scale-100"
        />
      </Link>
      <div className="flex items-center justify-center gap-4">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <LinkText key={link.href} href={link.href} active={isActive}>
              {link.label}
            </LinkText>
          );
        })}
      </div>
      <Input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setSearchQuery(searchQuery);
            router.push(`/search/${searchQuery}`);
          }
        }}
      />
    </div>
  );
};

export default DesktopBar;
