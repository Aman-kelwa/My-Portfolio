import SingleContactSocial from "./SingleContactSocial"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link='https://github.com/Aman-kelwa' Icon={FaGithub}/>
      <SingleContactSocial link='https://www.linkedin.com/in/aman-kelwa-9355042ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' Icon={FaLinkedinIn}/>
      <SingleContactSocial link='https://www.instagram.com/aman_kelwa_/?igsh=OGQ5ZDc2ODk2ZA%3D%3D#' Icon={FaInstagram}/>


    </div>
  )
}

export default ContactSocial
