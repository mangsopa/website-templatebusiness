import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="flex flex-wrap md:justify-center md:items-center">
        <div className="w-full px-10 mb-10 lg:w-1/4 mt-10">
          <h3 className="text-4xl font-bold text-center">About</h3>
        </div>
        <div className="w-max-full lg:w-1/4">
          <p className="md:py-10 text-xl ml-5">
            Is In publishing and graphic design, Lorem ipsum is a placeholder
            text commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>

      <div className="py-12 px-12 mx-auto max-w-screen-xl lg:py-10 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col justify-center no-wrap mt-14">
          <div className="md:max-w-lg p-6 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-stretch justify-start">
              <div className="self-end -mt-20">
                <div className="w-max-full rounded-full shadow-xl mb-2">
                  <Image
                    src="/ic-about4.svg"
                    width={40}
                    height={40}
                    alt="Company Logo"
                  />
                </div>
              </div>
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
                Lorem Ipsum
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Is In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center no-wrap mt-14">
          <div className="max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-stretch justify-start">
              <div className="self-end -mt-20">
                <div className="w-max-full rounded-full shadow-xl mb-2">
                  <Image
                    src="/ic-about2.svg"
                    width={40}
                    height={40}
                    alt="Company Logo"
                  />
                </div>
              </div>
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
                Lorem Ipsum
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Is In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center no-wrap mt-14">
          <div className="max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-stretch justify-start">
              <div className="self-end -mt-20">
                <div className="w-max-full rounded-full shadow-xl mb-2">
                  <Image
                    src="/ic-about3.svg"
                    width={40}
                    height={40}
                    alt="Company Logo"
                  />
                </div>
              </div>
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
                Lorem Ipsum
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Is In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center no-wrap mt-14">
          <div className="max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-stretch justify-start">
              <div className="self-end -mt-20">
                <div className="w-max-full rounded-full shadow-xl mb-2">
                  <Image
                    src="/ic-about1.svg"
                    width={40}
                    height={40}
                    alt="Company Logo"
                  />
                </div>
              </div>
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
                Lorem Ipsum
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Is In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
