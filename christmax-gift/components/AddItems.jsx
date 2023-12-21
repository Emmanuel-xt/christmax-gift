// "use client";

// import { useEffect } from "react";


// const AddItems = () => {
    
//     useEffect(() => {
//         const addItems = async () => {
//             const itemsToAdd = [
//                 { name: "Chistmas Wish", description: "May your days be wrapped in warmth, your nights be filled with sparkle, and your heart be light with the magic of the season! 🌟🎄 1" },
//                 { name: "Holiday Wish", description: "Wishing you a holiday season wrapped in happiness, sprinkled with laughter, and filled with the warmth of cherished moments. Happy holidays! 🌟🎁✨" },
//                 { name: "Lovely Wish", description: "Sending love wrapped in festive cheer, may our hearts dance together in the magic of the season. Merry Christmas, my dearest! ❤️🎄" },
//                 { name: "Chistmas Wish", description: "Wishing you a Christmas filled with joy, warmth, and delightful surprises. May this festive season bring you moments of happiness and laughter! 🎅🌟" },
//                 { name: "Less Bug Wish", description: "Wishing your code a holiday season with fewer bugs and more festive hugs! May your debugging sessions be short, and your code shine bright. Happy coding! 🎄🐞✨" },
//             ];
            
//             try {
//                 const response = await fetch("/api/items", {
//                     method: "POST",
//                     body: JSON.stringify({
//                         items: itemsToAdd,
//                 }),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
            
//             if (response.ok) {
//                 const insertedItems = await response.json();
//                 console.log("Insertd Items are:", insertedItems);
//             } else {
//                 const errorData = await response.json();
//                 console.error(`Error adding available items: ${errorData.error}`);
//             }
//         } catch (error) {
//             console.error("Error adding Awailable Items:", error.message);
//         }
//     };
//     addItems();
// }, []);

// return (
//   <div>
//    add item page
//   </div>
// )
// }
// export default AddItems