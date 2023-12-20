'use client'
// import AddItems from '@components/AddItems'
import SendGiftForm from '@components/SendGiftForm';
import { useEffect, useState } from 'react';

const AppPage = () => {
  const [availableItems, setAvailableItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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

    const handleItemClick = (item) => {
      setSelectedItem(item)
    }

    const handleSendGift = (selectedItem , selectedUsers ) => {
      console.log('Sending Gift:' , selectedItem , 'to Users:' , selectedUsers)
      setSelectedItem(null)
    }
  return (
    <div>
      App Page
      <div className="">

      </div>

      {availableItems.length > 0 ? (
        availableItems.map((item) => (
          <div className="" key={item._id} onClick={() => handleItemClick(item)}>
            <h1 className="">{item.name}</h1>
            <p className="">{item.description}</p>
          </div>
        ))
      ) : (
        <p>No available items</p>
      )}

      <div className="">
        {
          selectedItem ? (
            <SendGiftForm selectedItem={selectedItem} onSendGift={handleSendGift}/>

          ): null
        }
      </div>

      
      {/* <AddItems /> */}
    </div>
  );
};



export default AppPage;
