import React,{useState,useEffect} from 'react';
import authority from '../vectors/favicon.ico';


const Header=(props)=>{

//getting language attribute
const [language,setLanguage]=useState(false)
useEffect(()=>{
    setLanguage(localStorage.getItem("language"));
   },[language]);


    return(
    <header class="text-gray-600 body-font bg-white">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 text-gray-900 hover:text-gray-900" id={props.item1_href}>
          {props.item1}
        </a>
        <button class="mr-5 text-gray-900 hover:text-gray-900" onClick={props.item2Click}>{props.item2}</button>
        {/* <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          class="text-white bg-gray-900 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          type="button"
        >
          Location
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button> */}

        {/* <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
      <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <img
        src={authority}
        class="rounded-lg w-10"
        alt="Avatar"
      />
        <span class="ml-3 text-xl">{props.waterauthority}</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button class="mr-5 text-gray-900 hover:text-gray-900" onClick={props.item3Click}>{props.item3}</button>
        <button class="mr-5 text-gray-900 hover:text-gray-900" onClick={props.item4Click}>{props.item4}</button>
      </div>
    </div>
  </header>
  
  );
};

export default Header;