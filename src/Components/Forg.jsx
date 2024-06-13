import React, { useRef } from "react";
import Cd from "./Cd";
function Forg() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Hello this is me niloy and this is my dynamic project in react.",
      filesize: "20mb",
      close: true,
      tag: { isOpen: true , tagTitle : "Download Now", tagColor : "green"},
    },
    {
      desc: "hello you can drag this cards.",
      filesize: "5mb",
      close: false,
      tag: { isOpen: true , tagTitle : "Upload Now", tagColor : "nil"},
    },
    {
      desc: "yes you really can drag this cards.",
      filesize: "5mb",
      close: true,
      tag: { isOpen: true , tagTitle : "Download Now", tagColor : "green"},
    },
    
  ];
  return (
    <>
      <div ref={ref} className="fixed p-5 top-0 left-0 z-[5] w-full h-full  flex gap-5 flex-wrap">
        {data.map((item,index) => (
          <Cd key={index} data={item} refer={ref}/>
        ))}
      </div>
    </>
  );
}

export default Forg;
