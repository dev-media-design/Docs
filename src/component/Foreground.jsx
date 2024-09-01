import React, { useRef, useState } from "react";
import Card from "./Card";



function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagTitle: "Upload", tagColor: "blue" },
    },
  ];
  // useState()
  return (
    <div ref={ref} className=" fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference = {ref} />
      ))}
    </div>
  );
}

export default Foreground;
