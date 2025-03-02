import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/varients"

const AboutMeText = () => {
  return (
    <motion.div
    variants={fadeIn("right", 0.2)} 
    whileInView="show"
    initial="hidden"
    viewport={{ once: false, amount: 0 }}
    className="flex sm:p-10 p-20 flex-col sm:items-center sm:text-center md:text-left md:items-start  ">
      <h1 className="text-cyan text-6xl mb-7 ">About Me</h1>
      <p className="text-white  text-xl pt-5">My name is Aman Kelwa, and I am currently a B.Tech Engineering student specializing in Information Technology (IT), with a strong passion for web development. As I continue my academic journey, I am expanding my skills in Full Stack Web Development, where I am gaining hands-on experience with both front-end and back-end technologies. My goal is to leverage my technical knowledge to build dynamic, user-friendly web applications and contribute to the evolving landscape of technology.</p>

      <button className="text-white font-bold border-orange border rounded-full py-2 px-4 text-lg flex items-center mt-6 hover:bg-orange transition-all duration-500 md:self-start sm:self-center ">My Projects</button>
    </motion.div>
    
  )
}

export default AboutMeText
