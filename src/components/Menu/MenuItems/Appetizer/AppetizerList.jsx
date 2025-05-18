import AppetizerOne from "../../../../assets/pictures/spiced potato.jpg"
import AppetizerTwo from "../../../../assets/pictures/vegetable spring roll.jpg"
import AppetizerThree from "../../../../assets/pictures/greek feta salad.jpg"
import AppetizerFour from "../../../../assets/pictures/garlic bread w cheese.jpg"
import AppetizerFive from "../../../../assets/pictures/mozzarella stick.jpg"
import AppetizerSix from "../../../../assets/pictures/Bruschetta.webp"
import AppetizerSeven from "../../../../assets/pictures/Devil Eggs.png"
import AppetizerEight from "../../../../assets/pictures/Samosa.jpg"
import AppetizerNine from "../../../../assets/pictures/Stuffed Mushroom.jpg"
import AppetizerTen from "../../../../assets/pictures/Chicken Wings.jpg"


export default function AppetizerList() {
    return (
        <div className="bg-background h-[60rem] tablet:h-[110rem] cp:pt-[22rem] cp:h-[100rem]">
            <div className="flex justify-center items-center gap-[3rem] tablet:flex-col cp:gap-[1.5rem]">
                <div className="flex flex-col gap-5">
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem]" src={AppetizerOne} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem]">Pesto Zucchini Noodles</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem]" src={AppetizerThree} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem] ">Caprese Carnival Crust</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem]" src={AppetizerFive} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem] ">Udon Noodles</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem]" src={AppetizerSeven} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem] ">Lamb Chops with Mint Sauce</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem]" src={AppetizerNine} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem] ">Shepherd Pie</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem] " src={AppetizerTwo} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem]">Pepperoni Paradise Pie</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem] " src={AppetizerFour} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem]">Quinoa Tacos</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem] " src={AppetizerSix} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem]">Beef Stir Fry</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem] " src={AppetizerEight} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem]">Chicken Alfredo Pasta</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm cp:w-[21.5rem] cp:h-[5.5rem]">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 cp:w-[8rem] cp:h-[5.5rem] " src={AppetizerTen} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] cp:text-[1rem]">Peking Duck</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5 cp:text-[0.9rem]">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5 cp:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}