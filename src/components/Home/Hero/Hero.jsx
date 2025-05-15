

export default function Hero({ heroData, setHeroCount, heroCount, }) {
    return (
        <div>
            <div className="absolute top-[22rem] left-[7rem] tablet:top-[10rem] tablet:left-[4rem] cp:top-[8rem] cp:left-[1.5rem]">
                <p className="text-secondary text-[6rem] tablet:text-[3.5rem] cp:text-[1.5rem]">{heroData.text1}</p>
                <p className="text-mainH text-[4rem] tablet:text-[2rem] cp:text-[1.3rem]">{heroData.text2}</p>
            </div>
            <div className="absolute top-[38.5rem] left-[7.4rem] tablet:top-[19rem] tablet:left-[4rem] cp:left-[1.5rem] cp:top-[13.5rem]">
                <ul className="flex justify-center items-center gap-5 cp:gap-2.5">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "w-[0.8rem] h-[0.8rem] bg-primary rounded-[50%] cursor-pointer cp:w-[0.5rem] cp:h-[0.5rem]" : "w-[0.8rem] h-[0.8rem] rounded-[50%] bg-white cursor-pointer cp:w-[0.5rem] cp:h-[0.5rem]"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "w-[0.8rem] h-[0.8rem] bg-primary rounded-[50%] cursor-pointer cp:w-[0.5rem] cp:h-[0.5rem]" : "w-[0.8rem] h-[0.8rem] rounded-[50%] bg-white cursor-pointer cp:w-[0.5rem] cp:h-[0.5rem]"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "w-[0.8rem] h-[0.8rem] bg-primary rounded-[50%] cursor-pointer cp:w-[0.5rem] cp:h-[0.5rem]" : "w-[0.8rem] h-[0.8rem] rounded-[50%] bg-white cursor-pointer cp:w-[0.5rem] cp:h-[0.5rem]"}></li>
                </ul>
            </div>
        </div>
    );
}