"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


import { sidebarLinks } from "@/constants";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar rounded-3xl m-5 leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <h1 className="text-heading1-bold flex justify-center mb-10 text-black">
          CompliX
        </h1>
        <Image src={'/logo.png'} width={500} height={500} alt="Logo of website"/>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-white"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-black max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
