import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"
const Cd = ({data, refer}) => {
  return (
  <motion.div drag dragConstraints={refer} whileDrag={{scale : 1.2}} dragElastic={.2}  className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
    <FaFileAlt/>
    <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
    <div className="footer absolute bottom-0  left-0 w-full ">
      <div className="flex items-center justify-between mb-3 py-5 px-8">
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
        {data.close ? <IoCloseOutline/> : <FiDownload size='.7em' color='#fff'/> }
        </span>
      </div>
      {
        data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "nil" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold text-white '> {data.tag.tagTitle}</h3>
        </div>
        )}
     
    </div>
    </motion.div>
  )
}

export default Cd