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

const AllSkills = () => {
  return (
    <div>
       <div className="flex items-center justify-center relative gap-2 max-w-[1200]px mx-auto]">
       {skills.map((item ,index)=>{
          return (
          // eslint-disable-next-line react/jsx-key
          <motion.div
          variants={fadeIn("up", `0.${index}`)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          >
            <SingleSkills key={index} text={item.skill} imgSvg={<item.icon/>}/>
          </motion.div>
        )
        })}
       </div>
    </div>
  )
}

export default AllSkills
