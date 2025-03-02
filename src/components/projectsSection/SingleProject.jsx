/* eslint-disable react/prop-types */
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/varients"

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div 
    variants={fadeIn("up", .2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
    className={`flex w-full sm:flex-col-reverse sm:gap-2 lg:gap-10 items-center gap-8 ${align === "right" ? "md:flex-row" : "md:flex-row-reverse"} justify-end`}>
      <div className={"sm:mb-6 mt-2"}>
        <h2 className="md:text-3xl sm:text-2xl  text-orange">{name}</h2>
        <h2 className={`text-xl font-thin text-white sm:text-center ${align === "right" ? "md:text-right" : "md:text-left"}`}>{year}</h2>
        <a
          href={link} target="_blank" 
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 hover:scale-105 sm:justify-self-center cursor-pointer ${align === "right" ? "md:justify-self-end" : "md:justify-self-start"}`}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[440px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500  relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block "></div>
        <img src={image} alt={`${name} - Project`} className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;

