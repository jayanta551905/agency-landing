import Link from "next/link";

export default function FutureProjects() {
  return (
    <>
      <section>
        <div className="container bg-[#D7F5DC]">
          <div className="pt-[67px] pl-[101px]">
            <div>
              <p className="text-[16px] pb-[15px] text-[#20B15A]">
                Featured Project
              </p>
            </div>
            <div>
              <h2 className="text-[30px] font-semibold pb-[72px]">
                We provide the Perfect Solution <br /> to your business growth
              </h2>
            </div>
          </div>
          <div className="container mx-auto justify-between items-center">
            <div className="grid grid-cols-12  gap-[30px]">
              <div className="col-span-6">
                <div>
                  <div>
                    <img src="/assets/Mask.png" alt="image" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[14px] pt-[15px] pb-[10px]">
                      <span>App Design - June 20, 2022</span>
                    </div>
                    <div className="font-bold text-[24px] mb-[84px]">
                      <h2>App Redesign</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div>
                  <div className="flex mx-auto justify-center items-center gap-[30px]">
                    <div>
                      <div>
                        <img src="/assets/Mask-1.png" alt="image" />
                      </div>
                      <div className="py-[12px] text-[14px] text-gray-500">
                        <p>App Design - June 20, 2022</p>
                      </div>
                      <div className="font-bold text-[18px] mb-[30px]">
                        <h2>Redesign channel website landng page</h2>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img src="/assets/Mask-2.png" alt="image" />
                      </div>
                      <div className="py-[12px] text-[14px] text-gray-500">
                        <p>App Design - June 20, 2022</p>
                      </div>
                      <div className="font-bold text-[18px] mb-[30px]">
                        <h2>Redesign channel website landng page</h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex mx-auto justify-center items-center gap-[30px]">
                    <div>
                      <div>
                        <img src="/assets/Mask-3.png" alt="image" />
                      </div>
                      <div className="py-[12px] text-[14px] text-gray-500">
                        <p>App Design - June 20, 2022</p>
                      </div>
                      <div className="font-bold text-[18px] mb-[30px]">
                        <h2>Redesign channel website landng page</h2>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img src="/assets/Mask-4.png" alt="image" />
                      </div>
                      <div className="py-[12px] text-[14px] text-gray-500">
                        <p>App Design - June 20, 2022</p>
                      </div>
                      <div className="font-bold text-[18px] mb-[30px]">
                        <h2>Redesign channel website landng page</h2>
                      </div>
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
