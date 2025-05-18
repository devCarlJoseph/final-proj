import food1 from "../../assets/pictures/food 1.jpg"
import food3 from "../../assets/pictures/food 3.webp"
import food4 from "../../assets/pictures/food 4.jpg"
import food5 from "../../assets/pictures/food 5.webp"





export default function MenuSlide() {
    const foods = [food1,  food3, food4, food5]
    return (
        <div className="mt-[-6rem] w-full box-border overflow-hidden container mx-auto py-20 flex flex-row items-center">
            <div className="w-[18.75rem] h-[10rem] shrink-0 px-4 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left tablet:w-[13rem] tablet:h-[7rem] cp:w-[10rem]">Sweets</div>

            <div className="flex animate-marquee whitespace-nowrap">
                {foods.map((food, index) => (
                    <img key={index} src={food}  className="mx-12 w-[10rem] h-[10rem] rounded-[50%] object-cover tablet:w-[7rem] tablet:h-[7rem]" />
                ))}

                {foods.map((food, index) => (
                    <img key={`duplicate-${index}`} src={food} className="mx-12 w-[10rem] rounded-[50%] h-[10rem] object-cover tablet:w-[7rem] tablet:h-[7rem]" /> 
                ))}
            </div>
        </div>
    )
}