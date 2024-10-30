import React from "react";
import logo from "../Assests/Group 4.png"; // Corrected typo in 'Assets'
import twitter from "../Assests/Twitter.png";
import fb from "../Assests/Facebook.png";
import LinkedIn from "../Assests/Lnkdn.png";// Corrected 'Linkdin' to 'LinkedIn'
import Insta from "../Assests/Instagram.png";

export default function Footer() {
  return (
    <footer className="bg-customBlue py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-b-2 border-white py-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={logo} alt="Footer logo" className="w-24 h-auto" />
            <p className="text-white text-sm">&copy; R Sighania</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 mt-6 md:mt-0">
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-2">Company</h3>
              <ul className="text-white space-y-1">
                <li>About</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-2">Terms</h3>
              <ul className="text-white space-y-1">
                <li>Data Privacy</li>
                <li>Terms</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-2">Related</h3>
              <ul className="text-white space-y-1">
                <li>Find Buyer</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end items-center space-x-4 mt-6 md:mt-0">
            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
            <img src={fb} alt="Facebook" className="w-6 h-6" />
            <img src={Insta} alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
