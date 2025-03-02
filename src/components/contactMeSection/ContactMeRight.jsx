import ContactInfo from "./ContactInfo"
import ContactSocial from "./ContactSocial"


const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 sm:gap-7">
      <img src="../../public/images/msg.png" alt="Contact me" 
      className="max-w-[300px]" />

      <ContactInfo/>
      <ContactSocial/>
    </div>
  )
}

export default ContactMeRight
