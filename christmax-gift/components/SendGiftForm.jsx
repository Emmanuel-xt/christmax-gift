import React, { useEffect, useState } from "react";

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

  const handleUserSelection = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedUsers(selectedOptions);
  };
  const handleSendGift = () => {
    onSendGift(selectedItem, selectedUsers);
  };

  return (
  <div>
    <h2 className="">Select Users to Send {selectedItem.name}</h2>
    <label htmlFor="">
        Select Users:
        <select multiple value={selectedUsers} onChange={handleUserSelection}>
            {
                users.map((user) => (
                    <option key={user.id}>{user.username}</option>
                ))
            }
        </select>
    </label>
    <button onClick={handleSendGift}>Send Gift</button>
  </div>
  );
};

export default SendGiftForm;
