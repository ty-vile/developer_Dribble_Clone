import Link from "next/link";
import { NavLinks } from "@/constants";
import Image from "next/image";
// auth
import AuthProviders from "../Auth/AuthProviders";
// functions
import { getCurrentUser } from "@/lib/session";
// components
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

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

      <div className="flex items-center justify-center gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link
              href="/create-project"
              className="bg-purple-500 rounded-md px-3 py-2 text-white hover:scale-95 transition-fast"
            >
              Create Project
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
