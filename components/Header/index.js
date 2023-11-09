// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header class="bg-transparent absolute top-0 left-0 w-full justify-center flex items-center z-10">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-4">
            <Link href="/" class="font-bold text-lg text-primary block py-6">
              <Image
                src="/logo.svg"
                width={200}
                height={100}
                alt="Company Logo"
              />
            </Link>
          </div>
          <div class="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              class="block absolute right-4 lg:hidden">
              <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span class="hamburger-line transition duration-300 ease-in-out"></span>
              <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              class="text-white hidden dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500 absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <ul class="block lg:flex">
                <li class="group">
                  <Link
                    href="#home"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">
                    Home
                  </Link>
                </li>
                <li class="group">
                  <Link
                    href="#about"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">
                    About
                  </Link>
                </li>
                <li class="group">
                  <Link
                    href="#service"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">
                    Services
                  </Link>
                </li>
                <li class="group">
                  <Link
                    href="#faq"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">
                    Faq
                  </Link>
                </li>
                <li class="group">
                  <Link
                    href="#contact"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
