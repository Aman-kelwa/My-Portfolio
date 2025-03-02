
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/varients"

import SingleSkills from './SingleSkills';

const skills = [
  {
    skill : "HTML",
    icon : FaHtml5 ,
  },
  {
    skill : "CSS",
    icon : FaCss3Alt,
  },
  {
    skill : "Java Script",
    icon : IoLogoJavascript,
  },
  {
    skill : "Tailwind CSS",
    icon : RiTailwindCssFill,
  },
  {
    skill : "React JS",
    icon : FaReact,
  },
  {
    skill : "NextJs",
    icon : SiNextdotjs,
  },
  {
    skill : "Python",
    icon : FaPython,
  },
  {
    skill : "JAVA",
    icon : FaJava,
  },
  
  
  
];

const AllSkillSM = () => {
  return <div className="grid md:grid sm:grid-cols-2 gap-12 my-12">
    
      {skills.map((item ,index)=>{
        return <motion.div
         variants={fadeIn("up", `0.${index}`)} 
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
          key={index} className="flex flex-col items-center ">
                <item.icon className="text-7xl text-orange sm:transition-all  sm:duration-500 sm:transform sm:hover:scale-105 sm:hover:text-grey "/>
                <p className="text-center mt-4 sm:transition-all  sm:duration-500 sm:transform sm:hover:scale-105 sm:hover:text-lightOrange text-white">{item.skill}</p>
            </motion.div>
      })}
    </div>;
}

export default AllSkillSM
