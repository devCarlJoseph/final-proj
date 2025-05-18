


export default function SweetsItems({ setHeroCount, heroCount }) {
    return (
        <div className="h-[18rem] bg-background">
            <div className="text-center pt-[4rem]">
                <h1 className="text-[1.5rem] font-medium">Our Menu</h1>
                <div className="tablet:px-5 cp:px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto voluptatum vitae doloremque, repellat sed.</div>
            </div>
            <div className="flex justify-center">
                <div className="w-[42rem] h-[5rem] bg-white text-center mt-[2rem] flex items-center justify-center cp:w-[15rem] cp:h-[25rem]">
                    <ul className="flex justify-center items-center gap-[2rem] cp:flex-col">
                        <div onClick={() => setHeroCount(0)} className={heroCount === 0 ? "w-[11rem] h-[3.5rem] bg-tertiary mt-1 cursor-pointer text-white" : "w-[11rem] h-[3.5rem] bg-white mt-1 cursor-pointer text-black"}>
                            <li className=" w-[11rem] h-[3.5rem] mt-4 font-semibold ">Starters & Appetizers</li>
                        </div>
                        <div onClick={() => setHeroCount(1)} className={heroCount === 1 ? "w-[8rem] h-[3.5rem] bg-tertiary mt-1 cursor-pointer text-white" : "w-[8rem] h-[3.5rem] bg-white mt-1 cursor-pointer text-black"}>
                            <li className=" w-[11rem] h-[3.5rem] ml-[-1.4rem] mt-4 font-semibold text-center">Main Course</li>
                        </div>
                        <div onClick={() => setHeroCount(2)} className={heroCount === 2 ? "w-[7rem] h-[3.5rem] bg-tertiary mt-1 cursor-pointer text-white text-center" : "w-[7rem] h-[3.5rem] bg-white mt-1 cursor-pointer text-black"}>
                            <li className=" w-[11rem] h-[3.5rem] ml-[-1.9rem] mt-4 font-semibold ">Desserts</li>
                        </div>
                        <div onClick={() => setHeroCount(3)} className={heroCount === 3 ? "w-[8rem] h-[3.5rem] bg-tertiary mt-1 cursor-pointer text-white" : "w-[8rem] h-[3.5rem] bg-white mt-1 cursor-pointer text-black"}>
                            <li className=" w-[11rem] h-[3.5rem] ml-[-1.4rem] mt-4 font-semibold ">Beverages</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
} 