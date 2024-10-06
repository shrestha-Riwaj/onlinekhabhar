import Laptop from '../images/laptop1.jpg';

export default function SingleContainer(){

    return <>
    
    {/* craeting articles */}
    <div className="flex flex-col gap-2">
        {/* Images */}
        <div>
            <img src={Laptop} alt="" />
        </div>
        {/* heading paragraph */}
        <div className='flex flex-col gap-1'>
            <h1 className='font-bold text-xl hover:text-blue-900 cursor-pointer'>Nepal to face Bahrain in AFC U-20</h1>
            <p className='font-normal text-lg line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        {/* time */}
        <div className='flex  gap-2 font-light text-gray-400'>
        <i class="ri-time-line"></i>
            <p>3 days ago</p>
        </div>
    </div>
    </>
}