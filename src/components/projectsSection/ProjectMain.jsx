import ProjectText from "./ProjectText"
import SingleProject from "./SingleProject"
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/varients"


const projects = [
    {
        name: "Nature and Wildlife",
        year : "April 2023",
        align : "left",
        image : "../../public/images/wildlife.jpg",
        link : "https://aman-kelwa.github.io/Nature-and-wildlife/?fbclid=PAY2xjawH3DF9leHRuA2FlbQIxMQABpkREkJScnHeNvaTjYx2w9qhpJ5cAINdPcEfH0w_L3FWKkN3kuAkP1PfxVA_aem_I9XlldlClPqbpBQUw0vNGg",
    },
    {
        name: "My fitness",
        year : "May 2023",
        align : "right",
        image : "../../public/images/gym.jpg",
        link : "https://aman-kelwa.github.io/My-Fitness/?fbclid=PAY2xjawH3DHdleHRuA2FlbQIxMQABpirJcG-i2TdGP5S6GKcv3QkgfIyQqwHYo9lbfaXOjLCsfUyArk-kDnEktQ_aem_5ZtVnpWEaGz3KhcbzwHZDQ",
    },
    {
        name: "Weather Application",
        year : "August 2023",
        align : "left",
        image : "../../public/images/try.jpg",
        link : "https://aman-kelwa.github.io/Weather-application/?fbclid=PAY2xjawH3DIVleHRuA2FlbQIxMQABpqYGRzBB-Y2SFFTchcKKTSM-z1Y-uwfsapZoZzkcjfiS-VcgfHv6dn9NqA_aem_Q3WWT_9DPpa_xmxadOp8xA",
    },
]

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div
        variants={fadeIn("up", .2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        >
        <ProjectText/>
        </motion.div>
        <div className="flex flex-col lg:gap-20 max-w-[1100px] mx-auto mt-12">
            {projects.map((item,index)=>{
                return <SingleProject 
                key={index} 
                name={item.name} 
                year={item.year} 
                align={item.align} 
                image={item.image}
                link={item.link}/>
            })}
        </div>
    </div>
  )
}

export default ProjectMain
