import React from "react";

export default function Footer() {
  return (
    <>
      <section className="bg-violet-950 text-white">
        <div class="mx-auto max-w-screen-xl py-12 px-12 mt-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="w-full max-w-lg">
              <h1 class="text-black-500 dark:text-white text-2xl font-bold mb-5">
                Contact Us
              </h1>

              <p class="text-lg font-normal mb-2">Business Consulting</p>
              <p class="text-lg font-normal mb-2">No.123456 Freedom, Unknown</p>
              <p class="text-lg font-normal mb-2">+12345678910</p>
              <p class="text-lg font-normal mb-2">Demo@exampledemo.com</p>
            </div>

            <div class="w-full max-w-sm">
              <h1 class="text-black-500 dark:text-white text-2xl font-bold mb-5">
                Information
              </h1>

              <p class="text-lg font-normal mb-2">Product Support</p>
              <p class="text-lg font-normal mb-2">Checkout</p>
              <p class="text-lg font-normal mb-2">License Policy</p>
              <p class="text-lg font-normal mb-2">Affiliate</p>
            </div>

            <div class="w-full max-w-sm">
              <h1 class="text-black-500 dark:text-white text-2xl font-bold mb-5">
                Customer Service
              </h1>

              <p class="text-lg font-normal mb-2">Help Center</p>
              <p class="text-lg font-normal mb-2">Redeem Voucher</p>
              <p class="text-lg font-normal mb-2">Contact Us</p>
              <p class="text-lg font-normal mb-2">Policies & Rules</p>
            </div>
          </div>
        </div>
      </section>

      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div class="col-span-2">
          <p class="text-sm text-gray-900 dark:text-white">
            Copy Right © 2023 | Dibuat dengan 💖 by Sofa Ramadhan
          </p>
        </div>
      </div>
    </>
  );
}
