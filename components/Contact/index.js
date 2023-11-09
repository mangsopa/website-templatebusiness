import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" class="pt-32 pb-16">
      <div class="container mx-auto">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center">
            <h4 class="font-semibold text-lg text-black mb-2">Need Support</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl text-black">
              Contact Us
            </h2>
            <p class="font-medium text-md md:text-lg">
              Contact us for any inquiries or support you may need. Our
              dedicated team is ready to assist you and provide the best
              solutions.
            </p>
          </div>
        </div>
        <div className="py-12 px-12 mx-auto max-w-screen-xl lg:py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center no-wrap mt-14">
            <div className="max-w-sm p-6 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
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
                Is In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual.
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
                Is In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual.
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
                Is In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-20 mb-20">
        <h4 class="font-semibold text-lg text-black mb-2">Need Support</h4>
        <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl text-black">
          Contact Us
        </h2>
        <p class="font-medium text-md md:text-lg">
          Contact us for any inquiries or support you may need. Our dedicated
          team is ready to assist you and provide the best solutions.
        </p>
      </div>

      <div class="grid grid-rows-2 xl:grid-flow-col gap-4">
        <div class="row-span-3">
          <div className="lg:w-full p-10 w-5/0 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 xl:mx-64 ml-10">
            <form>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    First name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Last name
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."></textarea>
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div class="col-span-2 ">
          <div className="max-w-md p-6 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 xl:ml-64 ml-10 mr-10">
            <div className="mb-2">
              <Image
                src="/ic-about3.svg"
                width={40}
                height={40}
                alt="Company Logo"
              />
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

        <div class="row-span-2 col-span-2">
          <div className="max-w-md p-6 bg-white border shadow border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 xl:ml-64 ml-10 mr-10">
            <div className="mb-2">
              <Image
                src="/ic-about3.svg"
                width={40}
                height={40}
                alt="Company Logo"
              />
            </div>
            <a href="#">
              <h5 className=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
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
