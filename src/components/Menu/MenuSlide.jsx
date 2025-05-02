import food1 from "../../assets/pictures/food 1.jpg"
import food2 from "../../assets/pictures/food 2.jpg"
import food3 from "../../assets/pictures/food 3.webp"
import food4 from "../../assets/pictures/food 4.jpg"
import food5 from "../../assets/pictures/food 5.webp"
import food6 from "../../assets/pictures/food 6.webp"




export default function MenuSlide() {
    const foods = [food1, food2, food3, food4, food5, food6]
    return (
        <div className="w-full overflow-hidden container mx-auto py-20 flex sm:flex-row flex-col sm:items-center items-start">
            <div className="w-[300px] h-[5rem] shrink-0 px-4 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">Proud partner at <br /> Hubspot & Segment</div>

            <div className="flex animate-marquee whitespace-nowrap">
                {foods.map((food, index) => (
                    <img key={index} src={food} alt="food menu" className="mx-12 w-[5rem] h-[5rem] object-cover transition-all" />
                ))}

                {foods.map((food, index) => (
                    <img key={`duplicate-${index}`} src={food} alt="food menu" className="mx-12 w-[5rem] h-[5rem] object-cover transition-all" />
                ))}
            </div>
        </div>
    )
}