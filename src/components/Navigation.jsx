export default function Navigation(){

    return <>
    {/* Navigation link */}

    
        <ul className="flex gap-3 text-gray-400 font-bold text-lg justify-between">
            <li>
                <a className="hover:text-white transition-all duration-100" href="#">Politics</a>
            </li>
            <li>
                <a className="hover:text-white transition-all duration-100" href="#">Economy</a>
            </li>
            <li>
                <a className="hover:text-white transition-all duration-100" href="#">Lifestyle</a>
            </li>
            <li>
                <a className="hover:text-white transition-all duration-100" href="#">Travel</a>
            </li>
            <li>
                <a className="hover:text-white transition-all duration-100" href="#">Sports</a>
            </li>
        </ul>
    
    </>
}