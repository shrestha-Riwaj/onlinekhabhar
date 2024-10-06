import Desktop from '../images/desktop.jpg'

export default function Home(){

    return <>
    {/* main section */}

    <section className=" grid grid-cols-5 mt-3">

        
        <div className="col-span-3">
                <div className='relative '>
                    <img  className='' src={Desktop} alt="" />
                    <div className="flex flex-col gap-2 items-start mx-10 absolute bottom-0">
                        <button className="bg-red-600 border-2 border-red-600 p-1 rounded-md px-2 mt-1 text-white text-sm inline">Blog</button>
                        <h2 className="font-bold text-lg text-gray-300">From couch to climb: Dicovering the joy of trekking</h2>
                        <div className='flex  gap-2 font-light mb-10 text-gray-400 items-center'>
                            <div className='w-10 h-10 rounded-full'>
                                <img className='w-10 h-10 rounded-full' src={Desktop} alt="" />
                            </div>
                            <p>Author</p>
                            <i class="ri-time-line"></i>
                            <p>3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
       
       <div className='col-span-2 ml-7 flex flex-col gap-2'>
                <div className='relative '>
                        <img  className='' src={Desktop} alt="" />
                        <div className="flex flex-col gap-2 items-start mx-10 absolute bottom-0">
                            <button className="bg-red-600 border-2 border-red-600 p-1 rounded-md px-2 mt-1 text-white text-sm inline">Blog</button>
                            <h2 className="font-bold text-lg text-gray-300">From couch to climb: Dicovering the joy of trekking</h2>
                            <div className='flex  gap-2 font-light mb-10 text-gray-400 items-center'>
                                <div className='w-10 h-10 rounded-full'>
                                    <img className='w-10 h-10 rounded-full' src={Desktop} alt="" />
                                </div>
                                <p>Author</p>
                                <i class="ri-time-line"></i>
                                <p>3 days ago</p>
                            </div>
                        </div>
                </div>

                <div className='flex gap-5 mt-5'>
                    <div className='w-[550px]'>
                        <img src={Desktop} alt="" />
                    </div>
                    <div>
                    <button className="bg-red-600 border-2 border-red-600 p-1 rounded-md px-2 mt-1 text-white text-sm inline">Blog</button>
                    <h2 className="font-bold text-base text-black">From couch to climb: Dicovering the joy of trekking</h2>
                        <div className='flex  gap-1 font-light mb-10 text-gray-400 items-center'>
                            <div className='w-7 h-7 rounded-full bg-red-600'>
                                <img className='w-7 h-7 rounded-full' src={Desktop} alt="" />
                            </div>
                            <p>Author</p>
                            <i class="ri-time-line"></i>
                            <p>3 days ago</p>
                        </div>
                    </div>
                </div>
       </div>
    </section>
    
    </>
}