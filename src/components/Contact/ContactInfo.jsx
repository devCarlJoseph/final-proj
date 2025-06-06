

export default function ContactInfo() {
    return (
        <div className="h-[25rem] bg-background cp:h-[55rem]">
            <div className="flex justify-center items-center gap-[2rem] tablet:gap-[1rem] cp:flex-col">
                <div className="flex flex-col justify-center items-center w-[21.5rem] h-[20rem] border-[1px] border-gray-300 shadow-sm rounded-2xl tablet:w-[14.5rem] tablet:h-[15rem] cp:w-[17rem] cp:h-[16rem]">
                    <div className="w-[3.5rem] h-[3.5rem] bg-primary rounded-full text-center">
                        <i class="fa-solid fa-location-dot text-[2.2rem] text-white mt-2.5"></i>
                    </div>
                    <div className="text-center mt-[1rem]">
                        <h1 className="font-medium text-[1.2rem]">Address</h1>
                        <span className="text-gray-500 tablet:text-[0.9rem]">2484 Royal Ln, Mesa, New Jersey <br /> 45683</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[21.5rem] h-[20rem] border-[1px] border-gray-300 shadow-sm rounded-2xl tablet:w-[14.5rem] tablet:h-[15rem] cp:w-[17rem] cp:h-[16rem]">
                    <div className=" w-[3.5rem] h-[3.5rem] bg-primary rounded-full text-center">
                        <i class="fa-solid fa-phone text-[1.9rem] text-white mt-3"></i>
                    </div>
                    <div className="text-center mt-[1rem]">
                        <h1 className="font-medium text-[1.2rem]">Phone</h1>
                        <span className="text-gray-500 tablet:text-[0.9rem]">+63 123-456-7890 <br />  ... </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[21.5rem] h-[20rem] border-[1px] border-gray-300 shadow-sm rounded-2xl tablet:w-[14.5rem] tablet:h-[15rem] cp:w-[17rem] cp:h-[16rem]">
                    <div className="w-[3.5rem] h-[3.5rem] bg-primary rounded-full text-center">
                        <i class="fa-solid fa-envelope text-[2rem] text-white mt-3"></i>
                    </div>
                    <div className="text-center mt-[1rem]">
                        <h1 className="font-medium text-[1.2rem]">Email</h1>
                        <span className="text-gray-500 tablet:text-[0.9rem]">Test123@gmail.com <br /> ... </span>
                    </div>
                </div>
            </div>
        </div>
    )
}