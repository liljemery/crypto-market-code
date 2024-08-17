import Logo from '../assets/Logo-01.png'
const Nav = () => {
  return (
    <nav className='flex justify-around  items-center text-gray-300'>
        <img src={Logo} alt="" className='w-[20rem]' />
        <div>
            <ul className='flex gap-8 cursor-pointer'>
                <li>Markets</li>
                <li>News</li>
                <li>Prices</li>
                <li>Brokers</li>
                <li>More</li>
            </ul>
        </div>
        <div>
            <button className='text-white rounded-full bg-teal-400 p-4  px-11'>
                Login
            </button>
        </div>
    </nav>
  )
}

export default Nav