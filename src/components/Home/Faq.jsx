import Wave from "react-wavify"


export default function Faq() {


    return (
        <div>
            <div className='mb-[-3rem]'>
                <Wave fill='#faf8f7'
                    paused={false}
                    style={{
                        display: 'flex',
                        rotate: '180deg'
                    }}
                    options={{
                        height: 10,
                        amplitude: 30,
                        speed: 0.20,
                        points: 15
                    }}
                />
            </div>
            <div className="bg-secondary h-[68rem] overflow-hidden max-xl::h-[95rem] max-sm:h-[70rem] max-2xs:h-[60rem]">
                <div>
                    <div>
                        <div className="flex justify-center items-center gap-1 pt-[8rem] text-center text-primary pb-[1rem] max-sm:pt-[3rem]">
                            <i className="fa-solid fa-diamond"></i>
                            <i className="fa-solid fa-diamond"></i>
                            <i className="fa-solid fa-diamond"></i>
                        </div>
                        <div className="text-center text-primary">
                            <h1 className="text-[1.2rem] font-medium">FAQS</h1>
                        </div>
                        <div className="text-center font-semibold">
                            <h1 className="text-[2.5rem] max-xs:text-[2rem] max-2xs:text-[1.5rem]">Question?<span className="text-primary ml-[0.5rem]">Look here.</span></h1>
                        </div>
                        <div className="flex justify-center items-center gap-7 mt-[2rem] max-xl:flex-col-reverse">
                            <div>
                                <div className="w-[40rem] h-[4.5rem] bg-white rounded-[1rem] flex justify-between items-center shadow-sm relative max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[3.5rem]">
                                    <h1 className="text-[1.1rem] font-medium ml-[1rem] max-xs:text-[1rem] max-2xs:text-[0.8rem]">Where is your restaurant located?</h1>
                                    <i className="fa-solid fa-plus text-[1.5rem] mr-[1rem] cursor-pointer js-faq-btn max-xs:text-[1rem]" data-content="faq_content_1"></i>
                                </div>
                                <div className="w-[40rem] h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute faq_content_1 hidden overflow-hidden max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]">
                                    <div className="relative">
                                        <div className="text-gray-500">
                                            <div className="font-medium ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.9rem]">Wee are located at LOCATION!!!!</div>
                                            <div className="text-[0.9rem] ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.7rem]">Exactly we are located at luyo sa among balay nga wala ka kabalo then mangutana raka asa ni dapit dayon makatoltol naka.</div>
                                        </div>
                                        <div className="text-tertiary/10">
                                            <div>
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute top-[1rem] left-[-0.5rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute bottom-[-2rem] left-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute top-[6rem] right-[0rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-[3rem] left-[5rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3rem] absolute top-[3rem] right-[5rem] max-2xs:top-[3.5rem] max-2xs:right-[4rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[4rem] absolute bottom-[-0.5rem] right-[15rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[5rem] absolute top-[-1rem] left-[12rem] max-sm:left-[10rem] max-2xs:top-[-3rem] max-2xs:left-[8rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-0 right-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3.5rem] absolute top-[-1rem] right-[-0.5rem]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40rem] h-[4.5rem] bg-white rounded-[1rem] shadow-sm mt-[1rem] flex justify-between items-center max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[3.5rem]">
                                    <h1 className="text-[1.1rem] font-medium ml-[1rem] max-xs:text-[1rem] max-2xs:text-[0.8rem]">What type of cuisine do you serve?</h1>
                                    <i className="fa-solid fa-plus text-[1.5rem] mr-[1rem] cursor-pointer js-faq-btn max-xs:text-[1rem]" data-content="faq_content_2"></i>
                                </div>
                                <div className="w-[40rem] h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute overflow-hidden hidden faq_content_2 max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]">
                                    <div className="relative">
                                        <div className="text-gray-500">
                                            <div className="font-medium ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.9rem]">Di ko mo saba!!</div>
                                            <div className="text-[0.9rem] ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.7rem]">Joke langs! Bisag unsa nga pagkaon pwede ilaga, iring or unsa pana diha basta mabusog mong tanan libre ra nya libre nasad ang lungon.</div>
                                        </div>
                                        <div className="text-tertiary/10">
                                            <div>
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute top-[1rem] left-[-0.5rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute bottom-[-2rem] left-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute top-[6rem] right-[0rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-[3rem] left-[5rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3rem] absolute top-[3rem] right-[5rem] max-2xs:top-[3.5rem] max-2xs:right-[4rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[4rem] absolute bottom-[-0.5rem] right-[15rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[5rem] absolute top-[-1rem] left-[12rem] max-sm:left-[10rem] max-2xs:top-[-3rem] max-2xs:left-[8rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-0 right-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3.5rem] absolute top-[-1rem] right-[-0.5rem]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40rem] h-[4.5rem] bg-white rounded-[1rem] shadow-sm mt-[1rem] flex justify-between items-center max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[3.5rem]">
                                    <h1 className="text-[1.1rem] font-medium ml-[1rem]  max-xs:text-[1rem] max-2xs:text-[0.8rem]">What are your restaurant's opening and closing hours?</h1>
                                    <i className="fa-solid fa-plus text-[1.5rem] mr-[1rem] cursor-pointer js-faq-btn  max-xs:text-[1rem]" data-content="faq_content_3"></i>
                                </div>
                                <div className="w-[40rem] h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute hidden overflow-hidden faq_content_3 max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]">
                                    <div className="relative">
                                        <div className="text-gray-500">
                                            <div className="font-medium ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.9rem]">Di mi manirado!!</div>
                                            <div className="text-[0.9rem] ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.7rem]">Bisag walay tawo mangabli gihapon mi og naay tawo ara nami manirado ingon ana ka className among restaurant sheeesh!!</div>
                                        </div>
                                        <div className="text-tertiary/10">
                                            <div>
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute top-[1rem] left-[-0.5rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute bottom-[-2rem] left-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute top-[6rem] right-[0rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-[3rem] left-[5rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3rem] absolute top-[3rem] right-[5rem] max-2xs:top-[3.5rem] max-2xs:right-[4rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[4rem] absolute bottom-[-0.5rem] right-[15rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[5rem] absolute top-[-1rem] left-[12rem] max-sm:left-[10rem] max-2xs:top-[-3rem] max-2xs:left-[8rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-0 right-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3.5rem] absolute top-[-1rem] right-[-0.5rem]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40rem] h-[4.5rem] bg-white rounded-[1rem] shadow-sm mt-[1rem] flex justify-between items-center max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[3.5rem]">
                                    <h1 className="text-[1.1rem] font-medium ml-[1rem]  max-xs:text-[1rem] max-2xs:text-[0.8rem]">What is your cancellation policy for reservations?</h1>
                                    <i className="fa-solid fa-plus text-[1.5rem] mr-[1rem] cursor-pointer js-faq-btn max-xs:text-[1rem]" data-content="faq_content_4"></i>
                                </div>
                                <div className="w-[40rem] h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute overflow-hidden hidden faq_content_4 max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]">
                                    <div className="relative">
                                        <div className="text-gray-500">
                                            <div className="font-medium ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.9rem]">Ahh di mi mo dawat ana!!</div>
                                            <div className="text-[0.9rem] ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.7rem]">Way cancel2 ni amoa og imong e cancel ikaw nalang among e cancel sa life bleee tuga2 kag reserve nya imong e cancel!!</div>
                                        </div>
                                        <div className="text-tertiary/10">
                                            <div>
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute top-[1rem] left-[-0.5rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute bottom-[-2rem] left-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute top-[6rem] right-[0rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-[3rem] left-[5rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3rem] absolute top-[3rem] right-[5rem] max-2xs:top-[3.5rem] max-2xs:right-[4rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[4rem] absolute bottom-[-0.5rem] right-[15rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[5rem] absolute top-[-1rem] left-[12rem] max-sm:left-[10rem] max-2xs:top-[-3rem] max-2xs:left-[8rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-0 right-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3.5rem] absolute top-[-1rem] right-[-0.5rem]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40rem] h-[4.5rem] bg-white rounded-[1rem] shadow-sm mt-[1rem] flex justify-between items-center max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[3.5rem]">
                                    <h1 className="text-[1.1rem] font-medium ml-[1rem]  max-xs:text-[1rem] max-2xs:text-[0.8rem]">Do you have any ongoing promotions or discounts?</h1>
                                    <i className="fa-solid fa-plus text-[1.5rem] mr-[1rem] cursor-pointer js-faq-btn  max-xs:text-[1rem]" data-content="faq_content_5"></i>
                                </div>
                                <div className="w-[40rem] h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute hidden overflow-hidden faq_content_5 max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]">
                                    <div className="relative">
                                        <div className="text-gray-500">
                                            <div className="font-medium ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.9rem]">Wa oy kinsa man ka!!</div>
                                            <div className="text-[0.9rem] ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.7rem]">Di mi mohatag og discount sa mga maot dapat mga gwapo rajud og maot ka aynalang pangayo og discount BLEEEE!!</div>
                                        </div>
                                        <div className="text-tertiary/10">
                                            <div>
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute top-[1rem] left-[-0.5rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute bottom-[-2rem] left-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute top-[6rem] right-[0rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-[3rem] left-[5rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3rem] absolute top-[3rem] right-[5rem] max-2xs:top-[3.5rem] max-2xs:right-[4rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[4rem] absolute bottom-[-0.5rem] right-[15rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[5rem] absolute top-[-1rem] left-[12rem] max-sm:left-[10rem] max-2xs:top-[-3rem] max-2xs:left-[8rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-0 right-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3.5rem] absolute top-[-1rem] right-[-0.5rem]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40rem] h-[4.5rem] bg-white rounded-[1rem] shadow-sm mt-[1rem] flex justify-between items-center max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[3.5rem]">
                                    <h1 className="text-[1.1rem] font-medium ml-[1rem]  max-xs:text-[1rem] max-2xs:text-[0.8rem]">What payment methods do you accept?</h1>
                                    <i className="fa-solid fa-plus text-[1.5rem] mr-[1rem] cursor-pointer js-faq-btn  max-xs:text-[1rem]" data-content="faq_content_6"></i>
                                </div>
                                <div className="w-[40rem] h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute hidden overflow-hidden faq_content_6 max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]">
                                    <div className="relative">
                                        <div className="text-gray-500">
                                            <div className="font-medium ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.9rem]">Bisag unsa!!</div>
                                            <div className="text-[0.9rem] ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.7rem]">Pwede imong alkansiya og wa ka nya og wajud kay sulod sa alkansiya inyo lang balay para nice!</div>
                                        </div>
                                        <div className="text-tertiary/10">
                                            <div>
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute top-[1rem] left-[-0.5rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[1.5rem] absolute bottom-[-2rem] left-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute top-[6rem] right-[0rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2rem] absolute"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-[3rem] left-[5rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3rem] absolute top-[3rem] right-[5rem] max-2xs:top-[3.5rem] max-2xs:right-[4rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[4rem] absolute bottom-[-0.5rem] right-[15rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[5rem] absolute top-[-1rem] left-[12rem] max-sm:left-[10rem] max-2xs:top-[-3rem] max-2xs:left-[8rem]"></i>
                                            </div>
                                            <div className="max-sm:hidden">
                                                <i className="fa-solid fa-circle text-[2.5rem] absolute top-0 right-[10rem]"></i>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-circle text-[3.5rem] absolute top-[-1rem] right-[-0.5rem]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center sticky">
                                <div className="bg-[url('../../assets/pictures/ambot.jpg')] h-[20rem] w-[27rem] bg-cover rounded-[1rem] max-sm:w-[20rem] max-sm:h-[15rem] max-2xs:w-[18rem]">
                                    <div className="text-center">
                                        <div className="relative">
                                            <i className="fa-solid fa-comment-dots text-primary text-[3.5rem] mt-[2rem] max-sm:text-[2.5rem] max-sm:mt-[1rem]"></i>
                                            <i className="fa-regular fa-comment-dots text-white text-[3.8rem] absolute top-[1.95rem] left-[11.6rem] max-sm:text-[2.8rem] max-sm:left-[8.6rem] max-sm:top-[0.95rem] max-2xs:left-[7.6rem] max-2xs:top-[0.87rem]"></i>
                                        </div>
                                        <div>
                                            <h1 className="mt-[1.5rem] text-white text-[1.5rem] font-medium max-sm:text-[1.3rem] max-sm:mt-[1rem] max-2xs:text-[1rem]">You have different questions?</h1>
                                            <p className="mt-[1rem] text-gray-300 max-sm:mt-[0.5rem] max-2xs:text-[0.9rem]">Our team will answer all your questions.<br /> We ensure a quick response.</p>
                                        </div>
                                        <div className="w-[10rem] h-[3rem] bg-primary rounded-[1.5rem] mt-[1.5rem] ml-[8.3rem] cursor-pointer hover:bg-tertiary/70 max-sm:ml-[5.3rem] max-sm:mt-[1rem] max-2xs:ml-[4.1rem]">
                                            <button className="mt-[0.65rem] text-white font-medium cursor-pointer">Contact Us</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[23rem] h-[9rem] bg-white mt-[1.2rem] rounded-[1rem] flex justify-center items-center gap-3 max-xl:hidden">
                                    <div className="w-[4rem] h-[4rem] bg-secondary text-center rounded-[50%]">
                                        <i className="fa-solid fa-phone text-primary text-[2.2rem] mt-[0.8rem]"></i>
                                    </div>
                                    <div>
                                        <h1 className="text-gray-500">Your Comfort, Our Priority</h1>
                                        <h1 className="text-[1.3rem] font-medium">24/7 Service</h1>
                                        <h1 className="text-[0.9rem] text-gray-400">(123) 456-78910 </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}