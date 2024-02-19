import { socialMedia } from "../constants";

const Footer = () => (
  <section className='flex justify-center items-center mt-5 flex-col'>
    <div className="w-full flex justify-between lg:px-10 items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-800">
        Copyright Ⓒ 2024 Arjun's Portfolio. All Rights Reserved.
      </p>

      <div className=" text-gray-800 flex flex-row md:mt-0 mt-6 sm:py-16 py-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[25px] h-[25px] rounded-full object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;