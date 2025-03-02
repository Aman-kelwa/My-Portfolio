import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/varients"

const AboutMeImage = () => {
  return (
    <motion.div 
    variants={fadeIn("left", 0.2)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
    className="  items-end">
      <div className="h-[270px] w-[237px] ">
        <img src="../../public/images/aboutme.jpg" alt="Ak" className=" object-cover"/>
      </div>
    </motion.div>
  )
}

export default AboutMeImage
