import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface itemprop {
  Icon: IconType;
  label: string;
  active: boolean;
  href: string;
  isopen: boolean;
}

const NavItem = ({ Icon, label, active, href, isopen }: itemprop) => {
  return (
    <div>
      <Link
        href={href}
        className={`text-lg cursor-pointer flex flex-row items-center w-full gap-x-8 h-auto hover:text-sky-500 ${
          active && "text-sky-500"
        }`}
      >
        <Icon className="text-lg" />
        {isopen ? <p>{label}</p> : <p></p>}
      </Link>
    </div>
  );
};

export default NavItem;
