


export default function FaqList({ setHeroCount, heroCount }) {
    return (
        <div>
            <i onClick={() => setHeroCount(heroCount)} className={heroCount === 0 ? "fa-solid fa-plus text-[1.5rem] mr-[1rem] cursor-pointer  max-xs:text-[1rem]" : "fa-solid fa-minus text-[1.5rem] mr-[1rem] cursor-pointer  max-xs:text-[1rem]"}></i>
        </div>
    )
}