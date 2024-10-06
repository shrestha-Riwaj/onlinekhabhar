import Navigation from "./Navigation";
import Marcom from '../images/marcom.png';

export default function Header(){

    return <>
    {/* header section */}

    <header className="grid grid-cols-7 items-center bg-blue-shade">
        <div className="col-span-2 bg-gray-200 px-2 py-2">
            {/* title and date */}
            <img className="w-28" src={Marcom} alt="" />
            <p className="text-sm text-gray-500 font-light">Monday, September 30, 2024</p>
        </div>

        <nav className="col-span-3 px-1 pl-5">
            
            <Navigation />
        </nav>

        {/* search and all */}
        <div className="col-span-2 flex items-center justify-end px-10 gap-3">
        
            <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center hover:bg-blue-shade transition-all duration-100 ">
                <i class="ri-arrow-right-s-line text-lg font-bold text-blue-shade hover:text-white"></i>
            </div>
            <button className="border-2 p-1 px-5 text-white text-lg border-white bg-blue-shade">Sign up</button>
        </div>

    </header>
    </>
}