import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "../Auth/AuthProviders";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 ">
      <div className="flex flex-1 items-center justify-start gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={45} alt="Flexibble logo" />
        </Link>
        <ul className="hidden text-small gap-8 xl:flex">
          <ul className="hidden text-small gap-8 group xl:flex">
            {NavLinks.map((link, i) => (
              <Link href={link.href} key={i}>
                <span className="group-hover:text-gray-300 transition-fast">
                  <span className="hover:font-bold hover:text-black transition-fast">
                    {link.text}
                  </span>
                </span>
              </Link>
            ))}
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
