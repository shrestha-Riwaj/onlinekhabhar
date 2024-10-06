import SingleContainer from "./SingleContainer";
import 'remixicon/fonts/remixicon.css';

export default function Sports(){
    return <>
    {/* Sports section */}
    
    <section className="grid grid-cols-4 mx-20 my-5 gap-5">
        {/* heading and icon */}

        <div className=" col-span-full flex gap-4 mb-7 items-center">
            <h1 className="font-bold text-blue-shade text-xl uppercase">Sports</h1>
            <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center hover:bg-blue-shade transition-all duration-100 ">
                <i class="ri-arrow-right-s-line text-lg font-bold text-blue-shade hover:text-white"></i>
            </div>
            
        </div>

        {/* sports articles */}

        <div>
            <SingleContainer />
        </div>
        <div>
            <SingleContainer />
        </div>
        <div>
            <SingleContainer />
        </div>
        <div>
            <SingleContainer />
        </div>


    </section>
    </>
}