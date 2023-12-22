"use client";

import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { FaCheck } from "react-icons/fa6";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const SendGiftForm = ({ selectedItem, onSendGift }) => {
  const [users, setusers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      console.log("Returned data are:", data);
      setusers(data);
    };

    fetchUsers();
  }, []);

  const handleSendGift = () => {
    const randomlySelectedUserIndex = Math.floor(Math.random() * selectedUsers.length);
  const randomlySelectedUser = selectedUsers[randomlySelectedUserIndex]

    onSendGift(selectedItem, randomlySelectedUser);
  };

  return (
    <div className="fixed top-16 w-72">
      <Listbox value={selectedUsers} onChange={setSelectedUsers} multiple>
        {" "}
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedItem.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {users.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.username}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
            
          </Transition>
            <button
                className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                onClick={handleSendGift}
              >
                Send Gift
              </button>
        </div>
      </Listbox>
    </div>
  );
};

export default SendGiftForm;








// import React, { useEffect, useState } from "react";

// const SendGiftForm = ({ selectedItem, onSendGift }) => {
//   const [users, setusers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch("/api/users");
//       const data = await response.json();
//       console.log("Returned data are:", data);
//       setusers(data);
//     };

//     fetchUsers();
//   }, []);

//   const handleUserSelection = (e) => {
//     const selectedOptions = Array.from(
//       e.target.selectedOptions,
//       (option) => option.value
//     );
//     setSelectedUsers(selectedOptions);
//   };
//   const handleSendGift = () => {
//     onSendGift(selectedItem, selectedUsers);
//   };

//   return (
//   <div>
//     <h2 className="">Select Users to Send {selectedItem.name}</h2>
//     <label htmlFor="">
//         Select Users:
//         <select multiple value={selectedUsers} onChange={handleUserSelection}>
//             {
//                 users.map((user) => (
//                     <option key={user.id}>{user.username}</option>
//                 ))
//             }
//         </select>
//     </label>
//     <button onClick={handleSendGift}>Send Gift</button>
//   </div>
//   );
// };

// export default SendGiftForm;
