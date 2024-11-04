import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HeaderLogo } from "../HeaderLogo";

export function Footer() {
  return (
    <footer id="contact-me">
      <div className="w-screen mt-20 pt-10 bg-gradient-to-r from-blue-600 to-blue-500 text-font_color">
        <div className="w-full flex flex-col items-center border-b border-slate-950">
          <div className="w-[90%] max-w-[1180px] flex-col items-center flex justify-center pb-10">
            <HeaderLogo />
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <a href="#start" className="hover:underline">
                  Início
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-4 gap-5">
          <h1 className="text-lg md:text-xl">Entre em contato comigo</h1>
          <div className="w-[90%] max-w-[1180px] flex justify-center">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li className="p-2 border-2 border-[#ADADAD] rounded-full md:transition-transform md:duration-300 md:ease-in-out md:transform md:hover:scale-110 md:hover:border-transparent transition-none duration-0 ease-in-out">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hover:text-purple-600 transition-colors duration-300"
                  aria-label="Visit Bruno Manfredini's Instagram profile"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="p-2 border-2 border-[#ADADAD] rounded-full md:transition-transform md:duration-300 md:ease-in-out md:transform md:hover:scale-110 md:hover:border-transparent transition-none duration-0 ease-in-out">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hover:text-green-500 transition-colors duration-300"
                  aria-label="Chat with Bruno Manfredini on WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
