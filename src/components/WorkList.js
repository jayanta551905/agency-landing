import Link from "next/link";

export default function WorkList() {
  return (
    <>
      <section>
        <div className="container">
          <div className="pt-[66px] pl-[105px]">
            <div>
              <p className="text-[16px] pb-[15px] text-[#20B15A]">WORK LIST</p>
            </div>
            <div>
              <h2 className="text-[30px] font-semibold pb-[40px]">
                We provide the Perfect Solution <br /> to your business growth
              </h2>
            </div>
          </div>
          <div className="container mx-auto justify-between items-center">
            <div className="grid grid-cols-12  gap-[45px]">
              <div className="col-span-4">
                <div>
                  <div>
                    <img
                      src="/assets/Activity.png"
                      alt="icon"
                      className="object-cover"
                    />
                  </div>
                  <div className="my-[15px]">
                    <h2 className="text-[24px] font-semibold">
                      Grow Your Business
                    </h2>
                  </div>
                  <div className="mb-[43px]">
                    <span className="text-[18px] text-gray-600 ">
                      We help identify the best ways to improve your business
                    </span>
                  </div>
                  <div className="flex gap-[10px] ml-[30px]">
                    <div className="text-[18px]">
                      <Link href="#">Learn more </Link>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div>
                  <div>
                    <img
                      src="/assets/Heart.png"
                      alt="icon"
                      className="object-cover"
                    />
                  </div>
                  <div className="my-[15px]">
                    <h2 className="text-[24px] font-semibold">
                      Improve brand loyalty
                    </h2>
                  </div>
                  <div className="mb-[43px]">
                    <span className="text-[18px] text-gray-600 ">
                      We help identify the best ways to improve your business
                    </span>
                  </div>
                  <div className="flex gap-[10px] ml-[30px]">
                    <div className="text-[18px]">
                      <Link href="#">Learn more </Link>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div>
                  <div>
                    <img
                      src="/assets/Work.png"
                      alt="icon"
                      className="object-cover"
                    />
                  </div>
                  <div className="my-[15px]">
                    <h2 className="text-[24px] font-semibold">
                      Improve Business Model
                    </h2>
                  </div>
                  <div className="mb-[43px]">
                    <span className="text-[18px] text-gray-600 ">
                      We help identify the best ways to improve your business
                    </span>
                  </div>
                  <div className="flex gap-[10px] ml-[30px]">
                    <div className="text-[18px]">
                      <Link href="#">Learn more </Link>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
