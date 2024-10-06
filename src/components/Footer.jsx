import Logo from '../images/marcom.png'

export default function Footer(){

    return <>
    
    {/* footer section */}
    <footer className='bg-blue-shade'>
    <section className="grid grid-cols-4 mx-10 px-4 mt-5 py-4 ">
        {/* first grid */}
        <div className="flex flex-col text-white space-y-3">
            {/* company logo and name */}
            <div className="flex w-[150px] gap-3 mb-2">
                <img src={Logo} alt="companyLogo" />
                {/* <h1 className=''>online khabar</h1> */}
            </div>
            {/* short description of company */}
            <div className='space-y-3'>
                <p>
                The English Edition of Nepal's No 1 News Portal
                 <a href='https://english.onlinekhabar.com/'>Onlinekhabar.com</a> 
                </p>
                {/* contact details */}
                <div className='space-y-3'>
                    <div className='flex gap-1 flex-wrap'>
                        <h2 className='font-bold text-gray-300'>Phone:</h2>
                        <p>+977-1-123456</p>
                        <p>,</p>
                        <p>+977-1-123456</p>
                    </div>
                    <div className='flex gap-1'>
                        <h2 className='font-bold text-gray-300'>Email:</h2>
                        <a href="#">english@onlinekhabar.com</a>
                    </div>
                </div>

                {/* social links */}
                <div className='flex gap-4'>
                <a className=' hover:text-blue-600' href="#"><i class="ri-facebook-fill text-3xl"></i></a>
                <a className='hover:text-red-600' href="#"><i class="ri-instagram-fill text-3xl"></i></a>
                </div>
            </div>
        </div>

        {/* Second grid */}
        <div className='flex flex-col gap-5 ml-10'>
            <h2 className='font-bold text-white text-lg'>News</h2>
            <ul className='text-gray-300 space-y-2'>
                <li>
                    <a className='hover:text-white' href="#">Main News</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Politics</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Society</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Entertainment</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Lifestyle</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Business</a>
                </li>
            </ul>

        </div>
        {/* Third grid */}
        <div className='flex flex-col gap-5 ml-10'>
            <h2 className='font-bold text-white text-lg'>Heritage</h2>
            <ul className='text-gray-300 space-y-2'>
                <li>
                    <a className='hover:text-white' href="#">Festival</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Folklores</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Local Eats</a>
                </li>
                <li>
                   <a className='hover:text-white' href="#">Preservation</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Things to do</a>
                </li>
                
            </ul>

        </div>
        {/* fourth grid */}
        <div className='flex flex-col gap-5 ml-10'>
            <h2 className='font-bold text-white text-lg'>Lifestyle</h2>
            <ul className='text-gray-300 space-y-2'>
                <li>
                    <a className='hover:text-white' href="#">Lifestyle News</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Art</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Diets</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Health & Fitness</a>
                </li>
                <li>
                    <a className='hover:text-white' href="#">Technology</a>
                </li>
                <li>
                    <a className='hover:text-white'href="#">People</a>
                </li>
            </ul>

        </div>

    </section>
        <div className=''>
            <p className='text-center p-2 bg-blue-footer text-white text-sm'>© 2006-2020 Onlinekhabar.com, All Rights Reserved</p>
        </div>
    </footer>
    
    </>
}