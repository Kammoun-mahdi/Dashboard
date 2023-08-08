import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Not from "./Not";
import Sb from "./Sb";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const NavAd = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  

  const imgUrl =
    "https://media.licdn.com/dms/image/D4E0BAQG3lpMi1U6-Xg/company-logo_200_200/0/1686253176957?e=2147483647&v=beta&t=LW57lU1IsKRSR4qyAwrPRYLjGjl3mIjCorKytOUKPmk";

  return (
    <nav  className="bg-amber-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Sidebar />

        <div className="flex items-center md:order-2">
          <Not />
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-1/2 justify-center  rounded-3xl  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <img
                  style={{ borderRadius: "50%" }}
                  className="h-10 w-20"
                  src={imgUrl}
                  alt=""
                />
                <ChevronDownIcon className=" " aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right--10 z-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    <Link to='/settings'>
                      
                        Account settings
                      
                    </Link>
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      
                        <button
                          type="submit"
                          >
                          Sign out
                        </button>
                    
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <Sb />
      </div>
    </nav>
  );
};

export default NavAd;
