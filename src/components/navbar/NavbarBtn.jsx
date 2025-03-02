import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = ()=>{

    return(
        <button className="px-3 py-1 text-white text-xl flex  rounded-full gap-1 items-center justify-center w-53 font-semibold bg-gradient-to-r from-cyan to-orange border-cyan hover:scale-110 hover:from-darkCyan hover:to-orange hover:border-orange hover:shadow-cyanShadow border transition-all duration-500 ">
            Hire Me
            <div className="sm:hidden md:block">
             <FiArrowDownRight/>
            </div>
            
        </button>
    )
}

export default NavbarBtn