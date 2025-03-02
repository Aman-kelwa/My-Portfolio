import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return (
    <div className="flex flex-col text-white gap-4">
      <SingleInfo text="akelwa23@gmail.com" Image={MdOutlineEmail}/>
      <SingleInfo text="6264191498" Image={MdOutlineLocalPhone}/>
      <SingleInfo text="Indore ,Madhaya Pradesh" Image={IoLocationOutline}/>



    </div>
  )
}
export default ContactInfo
