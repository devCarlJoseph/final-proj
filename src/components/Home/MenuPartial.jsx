import Wave from 'react-wavify'
import Button from './Button'
import AppetizerOne from "../../assets/pictures/Affogato.webp"
import AppetizerTwo from "../../assets/pictures/Bubble Tea.webp"
import AppetizerThree from "../../assets/pictures/Chai Latte.webp"
import AppetizerFour from "../../assets/pictures/Virgin Pina Colada.webp"
import AppetizerFive from "../../assets/pictures/Vintage Lemonade.jpg"
import AppetizerSix from "../../assets/pictures/Smoothies.avif"
import AppetizerSeven from "../../assets/pictures/Fresh Juices.jpg"
import AppetizerEight from "../../assets/pictures/Milkshakes.jpg"
import AppetizerNine from "../../assets/pictures/Mojito Mocktail.jpg"
import AppetizerTen from "../../assets/pictures/Peach Iced Tea Lemonade.jpg"



export default function SectionThree() {
    return (
        <div className='box-border w-full'>
            <div className='mt-[-6rem]'>
                <Wave fill='#edeceb'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 30,
                        speed: 0.20,
                        points: 15
                    }}
                />
            </div>
            <div className='h-[80rem] bg-secondary box-border mt-[-1rem]'>
                <div className=''>
                    <div class="flex justify-center items-center gap-1.5 text-primary pb-[1rem] max-sm:pt-[10rem] max-sm:pb-[0.6rem] max-xs:pb-[0.5rem]">
                        <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                        <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                        <i className="fa-solid fa-diamond max-sm:text-[0.8rem] max-xs:text-[0.7rem]"></i>
                    </div>
                    <div>
                        <div className="text-center">
                            <h1 className="text-primary text-[1.5rem] font-semibold pb-[1rem] max-sm:text-[1rem] max-sm:pb-[0.6rem] max-xs:text-[0.9rem] max-xs:pb-[0.5rem]">FOOD MENU</h1>
                        </div>
                        <div className="text-center font-semibold">
                            <div className="text-[2.5rem] max-sm:text-[1.5rem] max-xs:text-[1rem]">Timeless <span class="text-primary">Culinary Delights</span></div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-[3rem] mt-[4rem] box-border">
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
                    <Button />
                </div>
            </div>
        </div>
    )
}