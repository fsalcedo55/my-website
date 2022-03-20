import React from "react";
import { ExternalLink } from "react-external-link";

export default function Contact() {
  return (
    <section className="text-gray-300 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <div className="flex justify-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-16 font-mono h-20 items-center">
            <p>Let's Get in Touch</p>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-extralight text-sm">
            Feel free to contact me if you're interested in collaborating
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto z-50">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="text-indigo-500">fsalcedo55@hotmail.com</p>
              <p className="text-indigo-500">(786) 368-4392</p>
              <p className="leading-normal my-5">Miami, FL</p>
              <span className="inline-flex">
                <ExternalLink href="https://github.com/fsalcedo55">
                  <button className="flex items-center border p-3 rounded-lg shadow-lg hover:bg-gray-300 hover:text-indigo-500">
                    <span>
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                      </svg>
                    </span>
                    <div className="ml-2">
                      <h1>Follow me on GitHub</h1>
                    </div>
                  </button>
                </ExternalLink>
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute 2xl:-top-80 2xl:right-80 xl:-top-80 xl:right-80 lg:-top-80 lg:right-80 md:-top-96 md:right-64 -top-96 right-32 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 lg:w-64 lg:h-64 md:w-48 md:h-48 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob z-0"></div>
          <div className="absolute 2xl:-top-80 2xl:right-96 xl:-top-80 xl:right-96 lg:-top-80 lg:right-96 md:-top-80 md:right-72 -top-80 right-36 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 lg:w-64 lg:h-64 md:w-48 md:h-48 w-32 h-32 bg-indigo-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-2000 z-0"></div>
          <div className="absolute 2xl:-top-96 2xl:right-96 xl:-top-96 xl:right-96 lg:-top-96 lg:right-96 md:-top-96 md:right-80 -top-96 right-28 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 lg:w-64 lg:h-64 md:w-48 md:h-48 w-32 h-32 bg-pink-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-4000 z-0"></div>
        </div>
      </div>
    </section>
  );
}
