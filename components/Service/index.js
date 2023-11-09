import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section id="service" className="max-w-screen pt-36 pb-16">
      <div className="container mx-auto">
        <div className="lg:grid grid-rows-1 grid-flow-col gap-4">
          <div className="row-span-2">
            <div className="lg:max-w-xl m-10 ml-10 bg-[#868686] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                src="/service.png"
                width={500}
                height={600}
                alt="Company Logo"
                className="m-5 md:-mt-8 w-full lg:-mr-10"
              />
            </div>
          </div>
          <div className="col-span-1 lg:ml-40 ml-10 md:mt-10">
            <h1 className="text-2xl font-normal mb-2">Service</h1>
            <p className="text-4xl font-semibold lg:w-4/5">Lorem ipsum</p>
            <div className="divide-y divide-black mt-10 w-2/3">
              <p className="text-xl font-normal mb-2">Learn More</p>
              <div></div>
            </div>

            <div className="md:grid grid-cols-1 items-center justify-center lg:w-2/3">
              <div className="flex space-x-8 mt-10 place-items-center">
                <Image
                  src="/service1.png"
                  width={100}
                  height={100}
                  alt="Company Logo"
                  className="w-14 h-14 "
                />
                <div className="flex flex-col">
                  <h1>Lorem Ipsum lorem ipsum</h1>
                  <p className="text-sm">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content
                  </p>
                </div>
              </div>
              <div className="flex space-x-8 mt-10 place-items-center">
                <Image
                  src="/service2.png"
                  width={100}
                  height={100}
                  alt="Company Logo"
                  className="w-14 h-14 "
                />
                <div className="flex flex-col">
                  <h1>Lorem Ipsum lorem ipsum</h1>
                  <p className="text-sm">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content
                  </p>
                </div>
              </div>
              <div className="flex space-x-8 mt-10 place-items-center">
                <Image
                  src="/service3.png"
                  width={100}
                  height={100}
                  alt="Company Logo"
                  className="w-14 h-14 "
                />
                <div className="flex flex-col">
                  <h1>Lorem Ipsum lorem ipsum</h1>
                  <p className="text-sm">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
