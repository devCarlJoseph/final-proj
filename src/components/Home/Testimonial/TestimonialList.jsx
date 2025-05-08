


export default function TestimonialList({ testimonialCount, testCount }) {
    return (
        <div>
            <div>
                <div className="mt-[2.5rem]">
                    <ul className="flex justify-center items-center gap-[1rem] ">
                        <li onClick={() => testimonialCount(0)} className={testCount === 0 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] rounded-3xl bg-white/50 cursor-pointer"}></li>
                        <li onClick={() => testimonialCount(1)} className={testCount === 1 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] rounded-3xl bg-white/50 cursor-pointer"}></li>
                        <li onClick={() => testimonialCount(2)} className={testCount === 2 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] rounded-3xl bg-white/50 cursor-pointer"}></li>
                        <li onClick={() => testimonialCount(3)} className={testCount === 3 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] rounded-3xl bg-white/50 cursor-pointer"}></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}