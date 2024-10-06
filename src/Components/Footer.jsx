import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function Footer() {
  return (
    <>
      <footer className="font-sans tracking-wide bottom-0 bg-white py-10 px-10 border border-gray-500">
        <div className="flex justify-center items-center">
          <ul className="flex gap-12">
            <li>
              <a href="https://api.whatsapp.com/send?phone=916379940593">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hariharachandru-front-end-developer/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/Harii10">
                <IoLogoGithub />
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
          <p className="text-black text-[15px]">
            © ReadymadeUI. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
