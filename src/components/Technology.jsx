import Articles from "./Articles";
import RowContainer from "./RowContainer";
import SingleContainer from "./SingleContainer";
import 'remixicon/fonts/remixicon.css';

export default function Technology(){
    return <>
    {/* Technology section */}
    
    <div className="grid grid-cols-7 mx-5">
    <section className="flex flex-col col-span-5 mx-10 my-5 gap-5">
        {/* heading and icon */}

        <div className=" col-span-full flex gap-4 mb-7 items-center">
            <h1 className="font-bold text-blue-shade text-xl uppercase">Science & Technology</h1>
            <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center hover:bg-blue-shade transition-all duration-100 ">
                <i class="ri-arrow-right-s-line text-lg font-bold text-blue-shade hover:text-white"></i>
            </div>
            
        </div>

        {/* science and technology articles */}

        <div>
            <RowContainer />
        </div>
        <div>
            <RowContainer />
        </div>
        <div>
            <RowContainer />
        </div>
        <div>
            <RowContainer />
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