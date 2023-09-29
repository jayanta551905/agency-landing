import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-black text-white">
      <div>
        <div className="container mx-auto justify-between items-center">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <div>
                <div>
                  <div className="px-[106] pt-[57px] font-bold text-[30px]">
                    <h2>WEB LOGO</h2>
                  </div>
                  <div>
                    <p>
                      Some footer text about the Agency. Just a little
                      description to help people understand you better
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[15px] mb-[90px] mt-[20px]">
                  <div>
                    <Link href="https://www.facebook.com">
                      <img src="/assets/fbIcon.png" alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.twitter.com">
                      <img src="/assets/twitIcon.png" alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.linkedin.com">
                      <img src="/assets/linkedIcon.png" alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.instagram.com">
                      <img src="/assets/instaIcon.png" alt="" />
                    </Link>
                  </div>
                </div>
                <p className="mb-[30px]">&copy; Design Agency 2023</p>
              </div>
            </div>
            <div className="col-span-4">
              <div className="justify-center items-center mt-[75px] px-[100px]">
                <div className="text-[20px] font-semibold my-[16px]">
                  <h2>Quick Links</h2>
                </div>
                <div className="py-[10px]">
                  <div className="text-[18px] font-medium py-[10px]">
                    <Link href="/services">Services</Link>
                  </div>
                  <div className="text-[18px] font-medium py-[10px]">
                    <Link href="#">Portfolio</Link>
                  </div>
                  <div className="text-[18px] font-medium py-[10px]">
                    <Link href="#">About Us</Link>
                  </div>
                  <div className="text-[18px] font-medium py-[10px]">
                    <Link href="#">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="justify-center items-center mt-[75px] px-[100px]">
                <div className="text-[20px] font-semibold my-[16px]">
                  <h2>Address</h2>
                </div>
                <div className="py-[10px]">
                  <div className="text-[18px] font-medium pt-[10px]">
                    <h2>
                      Design Agency Head Office. Airport Road United Arab
                      Emirate
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
