'use client'


import { useEffect, useState } from "react";

const AvailableItems = ({ onSelectItem }) => {
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/Aitems");
        const data = await response.json();
        setAvailableItems(data);
        console.log("Available Items Populated Successfully", data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      {availableItems.length > 0 ? (
        availableItems.map(item => (
          <div className="" key={item._id}>
            <h1 className="">{item.name}</h1>
            <p className="">{item.description}</p>
          </div>
        ))
      ) : (
        <p>No available items</p>
      )}
    </div>
  );
};

export default AvailableItems;
