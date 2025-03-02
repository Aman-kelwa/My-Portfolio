// import AboutGradient from "./AboutGradient"
import AboutMeImage from "./AboutMeImage"
import AboutMeText from "./AboutMeText"

const AboutMeMain = () => {
  return (
    <div id="aboutme" className="max-w-[1200px] flex md:flex-row sm:flex-col  justify-between items-center mx-auto px-4  w-full  gap-4 mt-2">
      <AboutMeText/>
      <AboutMeImage/>
      {/* <AboutGradient/> */}
    </div>
  )
}

export default AboutMeMain
