import SubscribeSection from "@/components/SubscribeSection";

export default function Projects() {
  return (
    <>
      <section>
        <div className="container">
          <div className="ml-[100px]">
            <div className="text-[40px] text-gray-900 fond-font-semibold mb-[20px] mt-[100px]">
              <h2>All Project</h2>
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
                <p>All Project</p>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-[67px] pl-[101px]">
              <div>
                <p className="text-[16px] pb-[15px] text-[#20B15A]">
                  All Project
                </p>
              </div>
              <div>
                <h2 className="text-[30px] font-semibold pb-[72px]">
                  Better Agency/SEO Solution At <br /> Your Fingertips
                </h2>
              </div>
            </div>
            <div className="container mx-auto justify-between items-center">
              <div className="grid grid-cols-12  gap-[30px] mb-[90px]">
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div>
                      <img src="/assets/project-1.png" alt="image" />
                    </div>
                    <div>
                      <div className="text-center font-bold text-[24px] mt-[30px] pb-[40px]">
                        <h2>Lorem ipsum dolor sit consectutar</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div>
                      <img src="/assets/project-2.png" alt="image" />
                    </div>
                    <div>
                      <div className="text-center font-bold text-[24px] mt-[30px] pb-[40px]">
                        <h2>Lorem ipsum dolor sit consectutar</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div>
                      <img src="/assets/project-3.png" alt="image" />
                    </div>
                    <div>
                      <div className="text-center font-bold text-[24px] mt-[30px] pb-[40px]">
                        <h2>Lorem ipsum dolor sit consectutar</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div>
                      <img src="/assets/project-4.png" alt="image" />
                    </div>
                    <div>
                      <div className="text-center font-bold text-[24px] mt-[30px] pb-[40px]">
                        <h2>Lorem ipsum dolor sit consectutar</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div>
                      <img src="/assets/project-5.png" alt="image" />
                    </div>
                    <div>
                      <div className="text-center font-bold text-[24px] mt-[30px] pb-[40px]">
                        <h2>Lorem ipsum dolor sit consectutar</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="shadow-xl rounded-xl">
                    <div>
                      <img src="/assets/project-6.png" alt="image" />
                    </div>
                    <div>
                      <div className="text-center font-bold text-[24px] mt-[30px] pb-[40px]">
                        <h2>Lorem ipsum dolor sit consectutar</h2>
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
