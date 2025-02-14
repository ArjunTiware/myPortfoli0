const Footer = () => (
  <section className="flex justify-center items-center mt-5 flex-col">
    <div className="w-full flex justify-between lg:px-10 items-center md:flex-row flex-col">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-800">
        Copyright Ⓒ 2024 Arjun's Portfolio. All Rights Reserved.
      </p>

      <div class="flex flex-row sm:py-8">
        <ul class="wrapper">
          <a href="https://github.com/ArjunTiware" target="_blank">
            <li class="icon github">
              <span class="tooltip">Github</span>
              <span>
                <i class="fa-brands fa-github"></i>
              </span>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/tiwariarjun/"  target="_blank">
            <li class="icon linkedin">
              <span class="tooltip">Linkedin</span>
              <span>
                <i class="fa-brands fa-linkedin-in"></i>
              </span>
            </li>
          </a>
          <a href="https://codepen.io/Arjun-" target="_blank">
            <li class="icon codepen">
              <span class="tooltip">Codepen</span>
              <span>
                <i class="fa-brands fa-codepen"></i>
              </span>
            </li>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=7579294829&text&type=phone_number&app_absent=0"  target="_blank">
            <li class="icon whatsapp">
              <span class="tooltip">Whatsapp</span>
              <span>
                <i class="fa-brands fa-whatsapp"></i>
              </span>
            </li>
          </a>
          <a href="mailto:at8949681@gmail.com"  target="_blank">
            <li class="icon mail">
              <span class="tooltip">Mail</span>
              <span>
                <i class="fa-solid fa-envelope"></i>
              </span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
