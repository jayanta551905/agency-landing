import Link from "next/link";

export default function SubscribeSection() {
  return (
    <>
      <section>
        <div className="container flex mx-auto justify-center items-center mt-[90px] mb-[137px] px-[422px]">
          <div className="">
            <div className="flex justify-center items-center mx auto text-[20px] text-[#20B15A] pb-[22px]">
              <h2>SUBSCRIBE</h2>
            </div>
            <div className="flex justify-center items-center text-center mx auto text-[30px] font-semibold text-gray-900 mb-[5px]">
              <h2>Subscribe to get the latest news about us</h2>
            </div>
            <div className="text-[#8B8B8B] text-[16px] text-center mb-[15px]">
              <p>
                Please drop your email below to get daily update about what we
                do
              </p>
            </div>
            <div className="relative flex justify-center items-center px-[20px] py-[10px] rounded-xl border border-gray-900">
              <div className="">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-[105px] py-[10px]"
                />
              </div>
              <div className="absolute right-[5px] bg-[#F55F1D] rounded-lg px-[20px] py-[10px] text-white">
                <Link href="#">Subscribe</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
