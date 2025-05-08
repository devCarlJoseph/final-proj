import { Link } from 'react-router-dom';


export default function Button() {
    return (
        <div className='flex justify-center items-center mt-[2.2rem]'>
            <div className='w-[10rem] h-[2.7rem] text-center bg-primary rounded-3xl hover:bg-tertiary'>
                <button className='text-white mt-[0.5rem] font-semibold'><Link to="/Menu">Browse Full Menu</Link></button>
            </div>
        </div>
    )
}