import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="bg-zinc-100 dark:bg-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Blog
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Latest Posts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Authors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Archives
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Tags
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Submit a Post
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Advertise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-200 dark:border-zinc-700 pt-8">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4  dark:text-zinc-300">
                <a href="#" undefinedlabel="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" undefinedlabel="Twitter">
                  <FiTwitter />
                </a>
                <a href="#" undefinedlabel="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" undefinedlabel="LinkedIn">
                  <CiLinkedin />
                </a>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                &copy; 2024 PostWave
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
