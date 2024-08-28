import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className=" text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute  w-full  bottom-0 left-0 ">
        <div className="flex item-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose />
            ) : (
              <IoDownloadOutline size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isopen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default card;
