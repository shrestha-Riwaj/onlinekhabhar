import Desktop from '../images/desktop.jpg'
import Articles from './Articles'
import TravelContainer from './TravelContainer'
export default function Travel(){

    return <>
    
    {/* travel Section */}

    <div className="grid grid-cols-7 mx-5">
        <section className="flex flex-col col-span-5 mx-10 my-5 gap-5">
            {/* heading and icon */}

        <div className=" col-span-full flex gap-4 mb-5 items-center">
            <h1 className="font-bold text-blue-shade text-xl uppercase">Travels</h1>
            <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center hover:bg-blue-shade transition-all duration-100 ">
                <i class="ri-arrow-right-s-line text-lg font-bold text-blue-shade hover:text-white"></i>
            </div>
            
        </div>
            <div className="col-span-3">
                <div className='relative '>
                    <img  className='' src={Desktop} alt="" />
                    <div className="flex flex-col gap-2 items-start mx-10 absolute bottom-0">
                        <button className="bg-red-600 border-2 border-red-600 p-1 rounded-md px-2 mt-1 text-white text-sm inline">Blog</button>
                        <h2 className="font-bold text-lg text-gray-300">From couch to climb: Dicovering the joy of trekking</h2>
                        <div className='flex  gap-2 font-light mb-2 text-gray-400'>
                            <i class="ri-time-line"></i>
                            <p>3 days ago</p>
                        </div>
                    </div>
                </div>
                {/* Other post */}
                <div>
                    <TravelContainer />
                </div>
            </div>
        </section>
        <div className="col-span-2 space-y-2 mt-20">
        <div className='flex gap-3 items-center border-2 bg-blue-200 border-blue-200 mx-1 px-1'>
                <div className='w-4 h-4 rounded-full bg-blue-300 flex items-center justify-center'>
                    <div className='w-2 h-2 rounded-full bg-blue-800'></div>
                </div>
                <h2 className='font-bold text-blue-900 uppercase text-lg'>Most Read Articles</h2>
            </div>
            <Articles />
            <Articles />
            <Articles />
            <Articles />
        </div>
    </div>
    
    
    </>
}