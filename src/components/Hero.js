async function getData() {
  const res = await fetch(process.env.BASE_URL + "/HeroList");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  return res.json();
}

export async function Hero() {
  const data = await getData();
  return (
    <div>
      <section className="pt-[100px] pb-[20px] bg-[#D7F5DC]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12  justify-between items-center gap-[30px]">
            <div className="col-span-6">
              <h2 className="text-5xl font-semibold mb-7">
                <span className="relative after:bg-amber-400/60 after:h-6 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
                  {data.title}
                </span>
              </h2>
              <p className="text-gray-600 leading-7">{data["description"]}</p>
              <div className="flex flex-wrap items-center mt-16 gap-6">
                <a href="#" className="myBtn">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-span-6">
              <div className="col-span-3">
                <div className="flex">
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                    src={data["image1"]}
                    alt="image"
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                    src={data["image2"]}
                    alt="image"
                  />
                </div>
                <div className="flex">
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                    src={data["image3"]}
                    alt="image"
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
                    src={data["image4"]}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block mt-[80px] mb-[20px] bg-[#F8FFF9] w-full h-auto ml-auto">
          <div className="py-[50px] flex gap-[150px] justify-center items-center ">
            <img src="/assets/logos_google.png" alt="" />
            <img src="/assets/Trello-logo-blue 1.png" alt="" />
            <img src="/assets/logos_monday.png" alt="" />
            <img src="/assets/Notion.png" alt="" />
            <img src="/assets/Slack.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
