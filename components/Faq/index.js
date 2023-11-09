import Image from "next/image";
import React from "react";
import { Accordion } from "flowbite-react";

export default function Faq() {
  return (
    <section id="faq" className="max-w-screen pt-36">
      <div className="container mx-auto">
        <div className="lg:grid grid-rows-0 grid-flow-col gap-4">
          <div className="col-span-0 lg:mr-40 ml-10 md:mt-10">
            <h1 className="text-2xl font-normal mb-2">Faq</h1>
            <p className="text-4xl font-semibold lg:w-5/6">
              Pencapaian Melalui Metodologi Kami yang Berbeda
            </p>
            <div className="divide-y divide-black mt-10 w-2/3">
              <p className="text-xl font-normal mb-2">Learn More</p>
              <div></div>
            </div>
            <div className="mt-5 m-2">
              <Accordion collapse>
                <Accordion.Panel>
                  <Accordion.Title>
                    Reference site about Lorem Ipsum?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    Reference site about Lorem Ipsum?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    Reference site about Lorem Ipsum?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
          <div className="row-span-2">
            <div className="flex justify-end">
              <div className="lg:max-w-xl m-10 ml-10 bg-[#868686] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  src="/faq.png"
                  width={500}
                  height={600}
                  alt="Company Logo"
                  className="m-5 md:-mt-8 w-full md:-ml-10 -ml-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
