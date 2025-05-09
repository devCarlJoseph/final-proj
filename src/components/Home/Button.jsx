

export default function Button() {
    return (
        <div className='flex justify-center items-center mt-[4.2rem]'>
            <div className='w-[10rem] h-[2.7rem] text-center bg-primary rounded-3xl hover:bg-tertiary'>
                <a href="/Menu"><button className='text-white mt-[0.5rem] font-semibold'>Browse Full Menu</button></a>
            </div>
        </div>
    )
}