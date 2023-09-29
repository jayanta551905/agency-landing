import SubscribeSection from "@/components/SubscribeSection";

export default function Services() {
  return (
    <>
      <section>
        <div className="container">
          <div className="ml-[100px]">
            <div className="text-[40px] text-gray-900 fond-font-semibold mb-[20px] mt-[100px]">
              <h2>Our Services</h2>
            </div>
            <div className="flex mx-auto">
              <div className="mr-[5px]">
                <p>Home</p>
              </div>
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-6 mr-[5px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-[#20B15A]">
                <p>Our Services</p>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-[67px] pl-[101px]">
              <div>
                <p className="text-[16px] pb-[15px] text-[#20B15A]">
                  Our All Services
                </p>
              </div>
              <div>
                <h2 className="text-[30px] font-semibold pb-[72px]">
                  We Provide BestWeb design <br /> services
                </h2>
              </div>
            </div>
            <div className="mx-auto justify-between items-center]">
              <div className="grid grid-cols-12  gap-[30px] mb-[90px]">
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div className="ml-[30px] text-[26px] font-semibold">
                      <h2>Build & Launch without problems</h2>
                    </div>
                    <div className="ml-[30px] text-[16px] text-[#9D9D9D]">
                      <p>
                        Increase your team’s productivity and save time with a
                        bot that answers and fields customer inquiries
                      </p>
                    </div>
                    <div className="grid grid-cols-6 mx-auto justify-between items-center">
                      <div className="col-span-3">
                        <div className="flex">
                          <img src="/assets/service-1-1.png" alt="" />
                          <img src="/assets/service-1-2.png" alt="" />
                        </div>
                        <div className="flex">
                          <img src="/assets/service-1-3.png" alt="" />
                          <img src="/assets/service-1-4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div className="ml-[30px] text-[26px] font-semibold">
                      <h2>Build & Launch without problems</h2>
                    </div>
                    <div className="ml-[30px] text-[16px] text-[#9D9D9D]">
                      <p>
                        Increase your team’s productivity and save time with a
                        bot that answers and fields customer inquiries
                      </p>
                    </div>
                    <div className="grid grid-cols-6 mx-auto justify-between items-center">
                      <div className="col-span-3">
                        <div className="flex">
                          <img src="/assets/service-2-1.png" alt="" />
                          <img src="/assets/service-2-2.png" alt="" />
                        </div>
                        <div className="flex">
                          <img src="/assets/service-2-3.png" alt="" />
                          <img src="/assets/service-2-4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl mt-[50px]">
                    <div className="ml-[30px] text-[26px] font-semibold">
                      <h2>Build & Launch without problems</h2>
                    </div>
                    <div className="ml-[30px] text-[16px] text-[#9D9D9D]">
                      <p>
                        Increase your team’s productivity and save time with a
                        bot that answers and fields customer inquiries
                      </p>
                    </div>
                    <div className="grid grid-cols-6 mx-auto justify-between items-center">
                      <div className="col-span-3">
                        <div className="flex">
                          <img src="/assets/service-3-1.png" alt="" />
                          <img src="/assets/service-3-2.png" alt="" />
                        </div>
                        <div className="flex">
                          <img src="/assets/service-3-3.png" alt="" />
                          <img src="/assets/service-3-4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl mt-[50px]">
                    <div className="ml-[30px] text-[26px] font-semibold">
                      <h2>Build & Launch without problems</h2>
                    </div>
                    <div className="ml-[30px] text-[16px] text-[#9D9D9D]">
                      <p>
                        Increase your team’s productivity and save time with a
                        bot that answers and fields customer inquiries
                      </p>
                    </div>
                    <div className="grid grid-cols-6 mx-auto justify-between items-center">
                      <div className="col-span-3">
                        <div className="flex">
                          <img src="/assets/service-4-1.png" alt="" />
                          <img src="/assets/service-4-2.png" alt="" />
                        </div>
                        <div className="flex">
                          <img src="/assets/service-4-3.png" alt="" />
                          <img src="/assets/service-4-4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubscribeSection />
        </div>
      </section>
    </>
  );
}
