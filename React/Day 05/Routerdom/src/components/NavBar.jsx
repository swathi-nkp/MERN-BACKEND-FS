import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='bg-white text-gray-700 font-bold flex gap-10 text-lg font-sans items-center mx-15 p-3'>
      <img className= 'w-20'src="1.jfif"/>
        <Link to ="/">MEN</Link>
        <Link to ="/women">WOMEN</Link>
        <Link to = "/kids">KIDS</Link>
        <Link to ="">HOME</Link>
        <Link to = "">BEAUTY</Link>
        <Link to ="">GENZ</Link>
        <div className='flex gap-1'>
        <Link to = "">STUDIO </Link>
        <p className=' text-pink-700 text-sm'>NEW</p>
        </div>
      </div>
    </>
  )
}

export default NavBar
