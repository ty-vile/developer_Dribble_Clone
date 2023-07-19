import { footerLinks } from "@/constants";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

type FooterColumnProps = {
  title: string;
  links: Array<string>;
};

type FooterColumnLinkProps = {
  link: string;
  i: number;
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="col-span-1">
    <h3 className="font-semibold mb-4">{title}</h3>
    <ul className="flex flex-col gap-2">
      {links.map((link, i) => (
        <FooterLink link={link} i={i} />
      ))}
    </ul>
  </div>
);

const FooterLink = ({ link, i }: FooterColumnLinkProps) => (
  <li className="text-sm">
    <Link href="/" key={i}>
      {link}
    </Link>
  </li>
);

function Footer() {
  return (
    <footer className="p-6 flex flex-col">
      <section className="mb-10">
        <Image
          src="/logo-purple.svg"
          width={115}
          height={40}
          alt="Company Logo"
        />
        <p className="text-sm pt-4">
          Flexxible is a community for the creative developer to share, grow and
          express yourself
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-10">
        <FooterColumn
          title={footerLinks[0].title}
          links={footerLinks[0].links}
        />
        <FooterColumn
          title={footerLinks[1].title}
          links={footerLinks[1].links}
        />
        <FooterColumn
          title={footerLinks[2].title}
          links={footerLinks[2].links}
        />
        <FooterColumn
          title={footerLinks[3].title}
          links={footerLinks[3].links}
        />
      </section>
      <div className="border-4 bg-gradient-to-r bg-green-500 bg-red-500" />
      <section className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          @ 2023 Flexibble. All rights reserved
        </div>
        <div className="flex items-center gap-2 pt-4">
          <AiFillTwitterCircle className="text-4xl text-purple-500 cursor-pointer hover:scale-95 transition-fast" />
          <BsFacebook className="text-3xl text-purple-500 cursor-pointer hover:scale-95 transition-fast" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
