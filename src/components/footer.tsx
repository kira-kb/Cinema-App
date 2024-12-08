import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";

export const Footer: React.FC = () => {
  return (
    // <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <footer className="bg-white shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Cinema App Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cinema App
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://github.com/kira-kb"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Git-hub
              </a>
            </li>
            <li>
              <a
                href="mailto:kirubelbewket@gmail.com"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Cinima App
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
