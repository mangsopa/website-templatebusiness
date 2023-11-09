import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex items-center justify-center h-screen mb-10 bg-fixed bg-center bg-cover bg-[url('/home.jpg')]">
        <div className="container mx-auto">
          <div className="p-5 text-white z-[2] ml-15 mt-10 tracking-wide-[2] line-clamp-none">
            <div className="flex flex-wrap justify-between">
              <div className="w-full px-10 mb-10 lg:w-1/2">
                <h2 className="text-5xl font-bold">
                  Elevate Your Business To Greater Heights
                </h2>
                <p className="py-5 text-xl">
                  Together, we manage and empower markets by utilizing both
                  established and emerging channels for potential growth
                </p>
                <button className="rounded-full border-white-100 w-md-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read More
                </button>
              </div>
              <div className="w-full px-10 lg:w-1/4 mt-20">
                <button className="btn btn-primary w-md-full bg-white rounded-full">
                  <Image
                    src="/play-button.svg"
                    width={100}
                    height={100}
                    alt="Company Logo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a href="#about">
        <div className="flex items-stretch justify-center">
          <div className="self-end -mt-20">
            <button className="btn btn-primary w-md-full bg-white rounded-full shadow-xl">
              <Image
                src="/down-arrow.svg"
                width={80}
                height={100}
                alt="Company Logo"
              />
            </button>
          </div>
        </div>
      </a>
    </>
  );
}
