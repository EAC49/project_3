import React from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Connection from './Connection';
import {
  BellIcon,
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
const navigation = [
  { name: "Home", href: "/", current: true }, //Explore
  { name: "Create", href: "/createAndSell", current: false }, //Categories
  { name: "My NFTs", href: "/mynfts", current: false }, //create NFT
  { name: "About", href: '/about', current: false},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-primary main-navbar ">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-purple-500"> 
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex">
                  <Link href="/">
                    <a>
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://ipfs.io/ipfs/QmdGrnHncHCqvi7qkEy83Pny3ANTUtfxjXHsEvXKPnF8bj"
                        alt="Marketplace"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://ipfs.io/ipfs/QmdGrnHncHCqvi7qkEy83Pny3ANTUtfxjXHsEvXKPnF8bj"
                        alt="Marketplace"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.href === router.asPath
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white", //change text color here
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              <Connection /> 
                {/* Profile dropdown */}
                <Menu as="div" className="user-button ml-3 relative">
                  <div>
                    <Menu.Button className=" flex text-sm rounded-full">
                      <Link href="myProfile">
                        <>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png"
                            alt=""
                          />
                        </>
                      </Link>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg px-8 py-1 bg-primary ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/">
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 dropdown-item"
                              )}
                            >
                              <Menu.Button className=" flex items-center text-sm rounded-full p-0">
                                <>
                                  <Link href="myProfile">
                                    <a className="flex">
                                      <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png"
                                        alt=""
                                      />
                                      
                                    </a>
                                  </Link>
                                </>
                              </Menu.Button>
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link href="purchasedItems">
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 dropdown-item items-center hover:text-grey-500 link-hover"
                              )}
                            >
                              <img src="./d1.png" className="mr-2" />
                              NFT Purchased
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/">
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block link-hover px-4 py-2 text-sm text-gray-700 dropdown-item"
                              )}
                            >
                              <img src="./d2.png" className="mr-2" />
                              Settings
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/">
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 link-hover py-2 text-sm text-gray-700 dropdown-item"
                              )}
                            >
                              <img src="./d3.png" className="mr-2" />
                              Sign out
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    className={classNames(
                      item.href === router.asPath
                        ? "bg-gray-900 text-white"
                        : "text--300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;