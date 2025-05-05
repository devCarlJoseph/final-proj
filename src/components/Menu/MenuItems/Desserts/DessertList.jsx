import AppetizerOne from "../../../../assets/pictures/Fruit Tart.avif"
import AppetizerTwo from "../../../../assets/pictures/Apple Pie.jpg"
import AppetizerThree from "../../../../assets/pictures/Baklava.jpg"
import AppetizerFour from "../../../../assets/pictures/Cheesecake.jpg"
import AppetizerFive from "../../../../assets/pictures/Choco Lava Cake.jpg"
import AppetizerSix from "../../../../assets/pictures/Crème Brûlée.jpg"
import AppetizerSeven from "../../../../assets/pictures/Lemon Meringue Pie.webp"
import AppetizerEight from "../../../../assets/pictures/Mochi Ice Cream.jpg"
import AppetizerNine from "../../../../assets/pictures/Profiteroles.jpg"
import AppetizerTen from "../../../../assets/pictures/Tiramisu.jpg"


export default function DessertList() {
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
                                    <div className="font-semibold text-[1.05rem]">Fruit Tart</div>
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
                                    <div className="font-semibold text-[1.05rem] ">Baklava</div>
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
                                    <div className="font-semibold text-[1.05rem] ">Choco Lava Cake</div>
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
                                <img className="w-[8.5rem] h-[8.5rem] object-cover rounded-[50%] p-4" src={AppetizerSeven} />
                            </div>
                            {/*For Text*/}
                            <div className="w-[25rem]">
                                <div className="flex justify-between items-center px-2 pt-3.5 text-primary">
                                    <div className="font-semibold text-[1.05rem] ">Lemon Meringue Pie</div>
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
                                    <div className="font-semibold text-[1.05rem] ">Profiteroles</div>
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
                                    <div className="font-semibold text-[1.05rem]">Apple Pie</div>
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
                                    <div className="font-semibold text-[1.05rem]">Cheesecake</div>
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
                                    <div className="font-semibold text-[1.05rem]">Crème Brûlée</div>
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
                                    <div className="font-semibold text-[1.05rem]">Mochi Ice Cream</div>
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
                                    <div className="font-semibold text-[1.05rem]">Tiramisu</div>
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