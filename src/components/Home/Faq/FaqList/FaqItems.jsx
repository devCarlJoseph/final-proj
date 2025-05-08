import React, { useState } from 'react';


export default function Faq() {
    const faqs = [
        {
            id: 1,
            question: 'Where is your restaurant located?',
            answer1: 'Wee are located at LOCATION!!!!',
            answer2:
                'Exactly we are located at luyo sa among balay nga wala ka kabalo then mangutana raka asa ni dapit dayon makatoltol naka.',
        },
        {
            id: 2,
            question: 'What type of cuisine do you serve?',
            answer1: 'Di ko mo saba!!',
            answer2:
                'Joke langs! Bisag unsa nga pagkaon pwede ilaga, iring or unsa pana diha basta mabusog mong tanan libre ra nya libre nasad ang lungon.',
        },
        {
            id: 3,
            question: "What are your restaurant's opening and closing hours?",
            answer1: 'Di mi manirado!!',
            answer2:
                'Bisag walay tawo mangabli gihapon mi og naay tawo ara nami manirado ingon ana ka class among restaurant sheeesh!!',
        },
        {
            id: 4,
            question: 'What is your cancellation policy for reservations?',
            answer1: 'Ahh di mi mo dawat ana!!',
            answer2:
                'Way cancel2 ni amoa og imong e cancel ikaw nalang among e cancel sa life bleee tuga2 kag reserve nya imong e cancel!!',
        },
        {
            id: 5,
            question: 'Do you have any ongoing promotions or discounts?',
            answer1: 'Wa oy kinsa man ka!!',
            answer2:
                'Di mi mohatag og discount sa mga maot dapat mga gwapo rajud og maot ka aynalang pangayo og discount BLEEEE!!',
        },
    ];
    
    const FAQSection = () => {
        const [openId, setOpenId] = useState(null);
    
        const toggleFaq = (id) => {
            setOpenId(openId === id ? null : id);
        };
    
        return (
            <div>
                <div>
                    {faqs.map((faq) => (
                        <div key={faq.id}>
                            {/* Question */}
                            <div
                                className="w-[40rem] h-[4.5rem] bg-white rounded-[1rem] flex justify-between items-center shadow-sm relative cursor-pointer max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[3.5rem]"
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <h1 className="text-[1.1rem] font-medium ml-[1rem] max-xs:text-[1rem] max-2xs:text-[0.8rem]">
                                    {faq.question}
                                </h1>
                                <i className='fa-solid fa-plus text-[1.5rem] mr-[1rem] max-xs:text-[1rem]'></i>
                            </div>
    
                            {/* Answer */}
                            {openId === faq.id && (
                                <div className="w-[40rem] h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute overflow-hidden max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]">
                                    <div className="relative text-gray-500">
                                        <div className="font-medium ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.9rem]">
                                            {faq.answer1}
                                        </div>
                                        <div className="text-[0.9rem] ml-[1rem] pt-[0.5rem] max-sm:pt-[0.2rem] max-2xs:text-[0.7rem]">
                                            {faq.answer2}
                                        </div>
    
                                        {/* Decorative Circles (Optional) */}
                                        <div className="text-tertiary/10">
                                            <i className="fa-solid fa-circle text-[1.5rem] absolute top-[1rem] left-[-0.5rem]" />
                                            <i className="fa-solid fa-circle text-[1.5rem] absolute bottom-[-2rem] left-[10rem] max-sm:hidden" />
                                            <i className="fa-solid fa-circle text-[2rem] absolute top-[6rem] right-[0rem]" />
                                            <i className="fa-solid fa-circle text-[2.5rem] absolute top-[3rem] left-[5rem]" />
                                            <i className="fa-solid fa-circle text-[3rem] absolute top-[3rem] right-[5rem] max-2xs:top-[3.5rem] max-2xs:right-[4rem]" />
                                            <i className="fa-solid fa-circle text-[4rem] absolute bottom-[-0.5rem] right-[15rem] max-sm:hidden" />
                                            <i className="fa-solid fa-circle text-[5rem] absolute top-[-1rem] left-[12rem] max-sm:left-[10rem] max-2xs:top-[-3rem] max-2xs:left-[8rem]" />
                                            <i className="fa-solid fa-circle text-[2.5rem] absolute top-0 right-[10rem] max-sm:hidden" />
                                            <i className="fa-solid fa-circle text-[3.5rem] absolute top-[-1rem] right-[-0.5rem]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };
}

{/* i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'} text-[1.5rem] mr-[1rem] cursor-pointer max-xs:text-[1rem]`}
                                        onClick={() => setIsOpen(!isOpen)}></i>
                                </div>
                                <div className={`w-[40rem] ${isOpen ? '' : 'hidden'} h-[6.5rem] bg-white mt-[-0.8rem] rounded-b-[1rem] shadow-sm absolute overflow-hidden max-sm:w-[25rem] max-xs:w-[22rem] max-2xs:w-[18.5rem] max-2xs:h-[5.5rem]`}> */}


