import mainImage from '../assets/image background-01.png'
const Main = () => {
  return (
    <div className='w-full h-[70%] '>
        <div className='flex justify-around items-center my-[15rem] mt-[5rem]'>

            <div className='mx-auto  w-1/3 py-11 flex-col items-center'>

                <h1 className='text-teal-400 text-6xl font-extrabold'>

                    <span>
                        Best <br/>
                        Cryptocurrency <br/>
                    </span>

                    <span className='text-yellow-400 font-extrabold'>
                        Marketplace
                    </span>

                </h1>

                <p className='text-white py-11'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium assumenda fugit officiis illo, est dolore quae blanditiis eveniet sint sed, aut quam officia! Quas vel porro necessitatibus suscipit laborum exercitationem.
                </p>

                <button className='text-white rounded-full w-2/4 bg-teal-400 p-4 px-6'>
                Get Started
                </button>

            </div>

            <div className='mx-auto  w-2/4'>
                <img src={mainImage} className='w-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main