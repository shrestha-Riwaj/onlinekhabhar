import Laptop from '../images/laptop1.jpg';

export default function Articles(){

    return <>
    {/* articles */}

    <section className=" flex flex-col gap-2">
        <article className='grid grid-cols-3 mt-5'>
            <div className='flex flex-col col-span-2  mx-1'>
                <h3 className='text-sm text-blue-600'>Economy</h3>
                <h1 className='text-base font-bold'>Gold price sets new record</h1>
                <p className='text-gray-500'>6 days ago</p>
            </div>
            <div className='col-span-1'>
                <img className='p-[2px]' src={Laptop} alt="" />
            </div>
        </article>
        <hr className=" border-1 border-gray-400 mt-3"/>
    </section>
    </>
}