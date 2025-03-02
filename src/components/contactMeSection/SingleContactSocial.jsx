/* eslint-disable react/prop-types */

const SingleContactSocial = ({Icon , link}) => {
  return (
    <div className="text-2xl h-12 w-12 border text-orange rounded-full p-3 flex items-center justify-center transition-all duration-500 transform hover:scale-105">
      <a href={link} className="cursor-pointer transition-all duration-500 transform">
        <Icon/>
     </a>
    </div>
  )
}

export default SingleContactSocial
