import Desktop from '../images/desktop.jpg'
export default function Lifestyle(){

    return <>
    
    <section className="grid grid-cols-4">

        <div className=' flex flex-col relative'>
            <div>
                <img src={Desktop} alt="" />
            </div>
            <div className='an'>
                <button className="bg-yellow-400 p-1 px-2 text-black border-2 border-yellow-400">People</button>
                <h1 className="font-bold text-xl text-white capitalize">Bagmati province</h1>
            
            </div>
            <div className='flex  gap-2 font-light mb-2 text-gray-400'>
                            <i class="ri-time-line"></i>
                            <p>3 days ago</p>
                        </div>
        </div>
    </section>
    </>
}