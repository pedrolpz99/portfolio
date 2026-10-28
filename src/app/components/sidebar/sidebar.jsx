"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { links, linkClassName } from "../navigation/links.js";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-[170px] py-20 md:block">
      <nav className="flex h-full w-full flex-col gap-12 overflow-visible">
        <div className="flex w-full flex-col p-3 items-start gap-4 text-left">
          <Image
            className="w-16 h-16 object-cover rounded-full"
            src="/media/profile.jpg"
            alt="Pedro López"
            width={64}
            height={64}
            priority
          />
          <div>
            <span className="text-lg text-gray-300 font-medium">
              Pedro A. Lopez Garcia
            </span>
            <p className="whitespace-nowrap">Software Developer</p>
          </div>
        </div>
        <ul className="flex list-none flex-col gap-2">
          {links.map(({ id, link, name, icon: Icon }) => (
            <li key={id}>
              <Link
                href={link}
                className={linkClassName(pathname === link)}
                aria-current={pathname === link ? "page" : undefined}
              >
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
