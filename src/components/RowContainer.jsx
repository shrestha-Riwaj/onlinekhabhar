import Laptop from '../images/laptop1.jpg';
export default function RowContainer(){

    return <>
    
    {/* Container */}
    <div className="flex gap-4 mb-7">
        {/* images */}
        <div className='col-span-2  h-[200px] w-[550px]'>
            <img className='h-[200px] w-[350px]' src={Laptop} alt="" />
        </div>
        <div className=' col-span-4 px-2 mx-1'>
            {/* title and time */}
        <div className="flex flex-col gap-5">
            {/* heading */}
            <h1 className='font-bold text-2xl'>OnePlus Nord CE 4 Lite 5G: Mid-range option with sleek and simple design</h1>
            {/* days */}
            <div className='flex  gap-2 font-light text-gray-400'>
                <i class="ri-time-line"></i>
                <p>3 days ago</p>
            </div>
        </div>
        </div>
        
    </div>

    <hr className=" border-1 border-gray-400"/>

    </>
}