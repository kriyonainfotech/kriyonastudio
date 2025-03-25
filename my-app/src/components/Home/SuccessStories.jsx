import React from 'react'

export const SuccessStories = () => {
  return (
    <>
      <div className="xxs:mt-24 sm:mt-36 text-center border border-black-border py-20">
        <h1 className="xxs:text-4xl sm:text-5xl font-semibold leading-tight text-[#222222]">
          Success Stories
        </h1>
      </div>

      <div className=" grid grid-cols-12">
        {/* Row 1 - Left (30%) - 3 Vertical Boxes */}
        <div className="col-span-12 lg:col-span-5 flex flex-col ">
          <div className="p-7 border border-black-border">
            <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
            <p className="text-md mt-5">
              Kriyona Infotech played a crucial role in bringing my startup to
              life. Their team demonstrated exceptional professionalism,
              technical expertise, and a deep understanding of my business
              needs. From concept to execution, they delivered a seamless,
              high-quality platform on time, ensuring scalability and
              efficiency. Their ongoing support and commitment made the entire
              process smooth. Highly recommended!
            </p>
            <div className="flex items-center mt-10">
              <p>Rajiv M. Surati, Founder Of EES121</p>
            </div>
          </div>
          <div className="p-7 border border-black-border">
            <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
            <p className="text-md mt-5">
              Exceptional Web Design Service!😊 The team was incredibly
              creative, professional, and responsive throughout the entire
              process. They delivered a visually stunning and user-friendly
              website that perfectly aligned with our brand. Their expertise in
              modern design trends and attention to detail have significantly
              enhanced our online presence. Highly recommend them to anyone
              seeking outstanding web design solutions!
            </p>
            <div className="flex items-center mt-10">
              <p>Nayan Bhisara, CEO Of Kriyona Studio</p>
            </div>
          </div>
          {/* <div className="p-7 border border-black-border">
                <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
                <p className="text-sm mt-5">Excellent work!</p>
                <div className="flex items-center mt-10">
                  <p>Saurabh Baranwal</p>
                </div>
              </div> */}
        </div>

        {/* Row 1 - Right (60%) - One Large Box */}
        <div className="col-span-12 lg:col-span-7 p-7 border border-black-border flex flex-col justify-center">
          <div className="flex flex-col justify-between">
            <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
            <p className="xxs:text-sm md:text-lg lg:text-2xl leading-[20px] w-5/6 mx-auto">
              Outstanding IT Service! The team was highly professional, quick to
              respond, and delivered exactly what we needed. Their expertise in
              solving technical issues and offering reliable support has made a
              huge difference in our operations. Highly recommend them to anyone
              looking for dependable IT solutions!
            </p>
          </div>
          <div className="flex items-center">
            <p className="flex items-center mt-10 md:mt-20  w-5/6 mx-auto">
              Satish Hirpara, CEO & founder Eveg International Private Limited{" "}
            </p>
          </div>
        </div>

        {/* Row 2 - Three Equal Boxes */}
        {/* <div className="col-span-12 md:col-span-4 p-7 border border-black-border">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">Clean and professional website!</p>
              <div className="flex items-center mt-10">
                <p>Nilesh Sosa</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 p-7 border border-black-border">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">Superb service!</p>
              <div className="flex items-center mt-10">
                <p>Rajiv M. Surati</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 p-7 border border-black-border">
              <img alt="quote" className="w-5 h-5" src="/quote-left.png" />
              <p className="text-sm mt-5">
                Great experience working with them!
              </p>
              <div className="flex items-center mt-10">
                <p>Akash Patel</p>
              </div>
            </div> */}

        {/* Row 3 - Full Width Box */}
        <div className="col-span-12 flex items-center  justify-center py-32 border border-black-border bg-gradient-to-r from-[#FFF4E8] to-[#FFE4FF]">
          <p className="text-lg md:text-4xl text-center">
            Now that's what I call amazing!
          </p>
        </div>
      </div>
    </>
  );
}
