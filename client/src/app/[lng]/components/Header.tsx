"use client"

import Link from "next/link";
import Image from "next/image";

export default function Header(): React.ReactNode {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center border-b border-[#ededed] px-15 py-4 bg-[#ffffff] font-[family-name:var(--font-geist-sans)]">
      <div className="mr-10">
        <Link href="#">
          <Image
            className="dark:invert"
            src="/assets/next.svg"
            alt="Next.js logo"
            width={89.76}
            height={18}
            priority
          />
        </Link>
      </div>
      <nav className="space-x-6 text-[14px] text-[#666666]">
        <Link href="#" className="hover:text-[#171717] transition duration-200 ease-in-out">
          Showcase
        </Link>
        <Link href="#" className="hover:text-[#171717] transition duration-200 ease-in-out">
          Docs
        </Link>
        <Link href="#" className="hover:text-[#171717] transition duration-200 ease-in-out">
          Blog
        </Link>
        <Link href="#" className="hover:text-[#171717] transition duration-200 ease-in-out">
          Templates
        </Link>
        <Link href="#" className="hover:text-[#171717] transition duration-200 ease-in-out">
          Enterprise
        </Link>
      </nav>
      <div className="ml-auto flex space-x-3">
        <button className="border border-[#f2f2f2] bg-[#f2f2f2] text-[14px] text-[#666666] px-[6px] py-[5px] rounded-lg hover:bg-[#ebebeb] hover:border-[#ebebeb] transition duration-200 ease-in-out">
          Search documentation...
          <span className="border border-[#dfdfdf] bg-[#ffffff] text-[12px] text-[#171717] font-medium px-[6px] py-[3px] rounded-lg ml-15">
            CtrlK
          </span>
        </button>
        <button className="border border-[#ededed] text-[14px] text-[#171717] font-medium px-3 py-[5px] rounded-lg hover:bg-[#f2f2f2] transition duration-200 ease-in-out">
          Deploy
        </button>
        <button className="border border-[#171717] bg-[#171717] text-[14px] text-[#ededed] font-medium px-3 py-[5px] rounded-lg hover:bg-[#666666] hover:border-[#666666] transition duration-200 ease-in-out">
          Learn
        </button>
      </div>
    </header>
  );
};
