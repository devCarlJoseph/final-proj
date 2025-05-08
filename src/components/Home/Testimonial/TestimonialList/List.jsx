


export default function List({ setHeroCount, heroCount }) {
    return (
        <div>
            <div className="flex justify-center items-center gap-5 mt-[2rem]">
                <div onClick={() => setHeroCount(0)} className={heroCount === 0 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] bg-white/50 rounded-3xl cursor-pointer "}></div>
                <div onClick={() => setHeroCount(1)} className={heroCount === 1 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] bg-white/50 rounded-3xl cursor-pointer "}></div>
                <div onClick={() => setHeroCount(2)} className={heroCount === 2 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] bg-white/50 rounded-3xl cursor-pointer "}></div>
                <div onClick={() => setHeroCount(3)} className={heroCount === 3 ? "w-[2rem] h-[0.8rem] bg-primary rounded-3xl cursor-pointer" : "w-[2rem] h-[0.8rem] bg-white/50 rounded-3xl cursor-pointer "}></div>
            </div>
        </div>
    )
}