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
        <div className="bg-background h-[60rem]">
            <div className="flex justify-center items-center gap-[3rem]">
                <div className="flex flex-col gap-5">
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-4" src={AppetizerOne} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem]">Spiced Potato Wedges</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-4" src={AppetizerThree} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] ">Greek Feta Salad</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-4" src={AppetizerFive} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] ">Mozzarella Sticks</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover pt-2" src={AppetizerSeven} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] ">Devil Eggs</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-4" src={AppetizerNine} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] ">Stuffed Mushroom</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 " src={AppetizerTwo} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem]">Vegetable Spring Rolls</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 " src={AppetizerFour} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem]">Garlic Bread with Cheese</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 " src={AppetizerSix} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem]">Bruschetta</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 " src={AppetizerEight} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem]">Samosa</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[34rem] h-[8.5rem] bg-white shadow-sm">
                        <div className="flex gap-1">
                            {/*For Image*/}
                            <div className="border-gray-200 border-r-[1.5px] shadow-sm">
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-3 " src={AppetizerTen} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem]">Chicken Wings</div>
                                    <div className="text-[1.2rem] font-bold mr-2.5">$35.00</div>
                                </div>
                                <div>
                                    <span className="text-[0.8rem] font-semibold px-2">Potato / Spices</span>
                                </div>
                                <div>
                                    <p className="px-2 pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic voluptatem quam soluta alias earum,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}