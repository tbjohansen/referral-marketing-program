import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const year = moment().format("YYYY");
  return (
    <footer className="bg-[#0A365C] text-white min-h-[200px]">
      <div className="grid grid-cols-3 place-items-center h-full max-sm:grid-cols-2 max-md:grid-cols-2 max-sm:gap-x-4 max-md:gap-x-4 max-sm:place-items-start max-md:place-items-start">
        <div className="h-full p-5">
          <h4 className="mb-5 font-semibold text-xl">Quick Links</h4>
          <ul>
            <li className="my-2 hover:text-thirdColor text-sm transition-all ease-in-out duration-300">
              <Link href="/">Referral Marketing</Link>
            </li>
          </ul>
        </div>
        <div className="h-full p-5">
          <h4 className="mb-5 font-semibold text-xl">Legal</h4>

          <ul>
            <li className="my-2 hover:text-thirdColor text-sm transition-all ease-in-out duration-300">
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li className="my-2 hover:text-thirdColor text-sm transition-all ease-in-out duration-300">
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="h-full p-5">
          <h4 className="mb-5 font-semibold text-xl">Social</h4>
          <ul>
            <li className="my-2 hover:text-thirdColor text-sm transition-all ease-in-out duration-300 flex flex-row items-center gap-1">
              <BsFacebook className="text-lg" />
              <Link href="/">Facebook</Link>
            </li>
            <li className="my-2 hover:text-thirdColor text-sm transition-all ease-in-out duration-300 flex flex-row items-center gap-1">
              <RiInstagramFill className="text-lg" />
              <Link href="https://www.instagram.com/caicapharmacy/?hl=en">
                Instagram
              </Link>
            </li>
            <li className="my-2 hover:text-thirdColor text-sm transition-all ease-in-out duration-300 flex flex-row items-center gap-1">
              <BsTwitter className="text-lg" />
              <Link href="/">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full p-2">
        <p className="text-white text-center text-sm max-sm:text-xs max-md:text-xs">
          Copyright &copy; {year}. All rights reserved.
        </p>
        <p className="text-white text-center text-sm max-sm:text-xs max-md:text-xs">
          Developed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.buibuitech.co.tz"
            className="hover:underline"
          >
            Thomas Johansen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
