import Desktop from '../images/desktop.jpg'

export default function TravelContainer(){

    return <>
    
    {/* travel post */}
    <section className=" grid grid-cols-3 gap-3 my-5">

        {/* first post */}
        <div className='felx flex-col gap-3 space-y-2'>
            {/* images */}
            <div>
                <img src={Desktop} alt="" />
            </div>
            {/* days */}
            <div className='flex  gap-2 font-light text-gray-400'>
            <i class="ri-time-line"></i>
                <p>3 days ago</p>
            </div>
        </div>

        {/* second post */}
        <div className='felx flex-col gap-3'>
            {/* images */}
            <div>
                <img src={Desktop} alt="" />
            </div>
            {/* days */}
            <div className='flex  gap-2 font-light text-gray-400'>
            <i class="ri-time-line"></i>
                <p>3 days ago</p>
            </div>
        </div>

        {/* third post */}
        <div className='felx flex-col gap-3'>
            {/* images */}
            <div>
                <img src={Desktop} alt="" />
            </div>
            {/* days */}
            <div className='flex  gap-2 font-light text-gray-400'>
            <i class="ri-time-line"></i>
                <p>3 days ago</p>
            </div>
        </div>
        
    </section>
    
    </>
}