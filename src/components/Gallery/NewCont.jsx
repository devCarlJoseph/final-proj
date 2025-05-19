import Image1 from "../../assets/pictures/f1.jpg"
import Image2 from "../../assets/pictures/f2.jpg"
import Image3 from "../../assets/pictures/f3.jpg"


export default function NewCont() {
    return (
        <div className="bg-background mt-[-16rem] h-[40rem] tablet:mt-[-14rem] tablet:h-[28rem] cp:mt-[-13rem] cp:h-[55rem]">
            <div className="flex justify-center items-center gap-[1.5rem] pt-[3rem] tablet:gap-[1rem] cp:flex-col">
                <div className="flex justify-center items-center w-[24.5rem] h-[24.5rem] bg-primary/80 rounded-3xl tablet:w-[14.5rem] tablet:h-[14.5rem]">
                    <img className="w-[24rem] h-[24rem] rounded-3xl object-cover tablet:w-[14rem] tablet:h-[14rem]" src={Image1} alt="" />
                </div>
                <div className="flex justify-center items-center w-[24.5rem] h-[24.5rem] bg-primary/80 rounded-3xl tablet:w-[14.5rem] tablet:h-[14.5rem]">
                    <img className="w-[24rem] h-[24rem] rounded-3xl object-cover tablet:w-[14rem] tablet:h-[14rem]" src={Image2} alt="" />
                </div>
                <div className="flex justify-center items-center w-[24.5rem] h-[24.5rem] bg-primary/80 rounded-3xl tablet:w-[14.5rem] tablet:h-[14.5rem]">
                    <img className="w-[24rem] h-[24rem] rounded-3xl object-cover tablet:w-[14rem] tablet:h-[14rem]" src={Image3} alt="" />
                </div>
            </div>
        </div>
    )
}