import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id='contact' className="text-gray-700z body-font relative">
        <div className="container sm:px-5 pt-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-4xl font-semibold title-font text-gray-900" data-aos='zoom-in' data-aos-duration='1000'>
              CONTACT ME
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2" data-aos='zoom-in'>
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input type="text" id="name" name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2" data-aos='zoom-in' data-aos-duration='1000'>
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input type="email" id="email" name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full" data-aos='zoom-in' data-aos-duration='1000'>
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea id="message" name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full" data-aos='zoom-in' data-aos-duration='2000'>
                <button type='submit' className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded-sm text-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
