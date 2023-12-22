"use client";

import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";

const SendGiftForm = ({ selectedItem, setSelectedItems, onSendGift }) => {
  const [users, setusers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      console.log("Returned data are:", data);
      setusers(data);
    };

    fetchUsers();
  }, []);

  const handleSendGift = async () => {
    const randomlySelectedUserIndex = Math.floor(
      Math.random() * selectedUsers.length
    );
    const recipient = selectedUsers[randomlySelectedUserIndex];

    const payload = {
      senderId: session?.user.id,
      senderName: session?.user.name,
      recipientId: recipient._id,
      recipientUserName: recipient.username,
      GiftId: selectedItem._id,
      GiftTitle: selectedItem.name,
      Gift: selectedItem.description,
    };

    try {
      // const response = await axios.post('/api/giftsave' , payload)
      const response = await fetch("/api/giftsave", {
        method: "POST",
        body: JSON.stringify({
          payload: payload,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const success = response.ok;

      if (success) {
        console.log("Gift sent succesfully", response);
      } else {
        throw new Error("failed to save the sent gift");
      }

      setSelectedItems(null);
    } catch (error) {
      console.log("", error);
    }

    onSendGift(selectedItem, recipient);
  };

  return (
    <div className="fixed top-16 right-10 w-72">
      <Listbox value={selectedUsers} onChange={setSelectedUsers} multiple>
        {" "}
        <div className="flex justify-between items-center p-1 rounded-2xl bg-white">
          <div className="relative mt-1 w-full">
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
          </div>
                <button
                  className=" p-1 bg-amber-500 text-white rounded-md hover:bg-amber-600"
                  onClick={handleSendGift}
                >
                  send
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
