"use client";
// import AddItems from '@components/AddItems'
import SendGiftForm from "@components/SendGiftForm";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const AppPage = () => {
  const {data : session} = useSession()
  // const user = session?.user.username
  console.log('session name is' , session?.user)

  const [availableItems, setAvailableItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/aitems");
        console.log("response: ", response);
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
    setSelectedItem(item);
  };

  const handleSendGift = (selectedItem, recipient) => {
    console.log("Sending Gift:", selectedItem,'from',session?.user , "to Users:", recipient);
    setSelectedItem(null);
  };

  // if(!session){
  //   return(
  //     <div className="">Loading ....</div>
  //   )
  // }
  return (
    <section className="app  w-screen h-screen">
      <div className=""> <p className="text-center font-bold text-2xl text-green-700"> Hi {session?.user.name} , Gift A fellow Techi Now</p></div>
      <div className="flex flex-col items-center max-h-32">
        {availableItems.length > 0 ? (
          availableItems.map((item) => (
            <div
              className="w-[50%] border px-10 py-8 my-4 wishCard text-white text-sm"
              key={item._id}
              onClick={() => handleItemClick(item)}
            >
              <h1 className="text-center text-green-600 font-extrabold">
                {item.name}
              </h1>
              <p className="text-center font-bold italic">{item.description}</p>
            </div>
          ))
        ) : (
          <p>No available items</p>
        )}
      </div>
      <div className="">
        {selectedItem ? (
          <SendGiftForm
            selectedItem={selectedItem}
            onSendGift={handleSendGift}
          />
        ) : null}
      </div>
      {/* <AddItems /> */}
    </section>
  );
};

export default AppPage;
