import Wave from "react-wavify"
import { useState } from "react";



export default function BookATable() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        guest: "",
        date: "",
        time: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendGMail = (e) => {
        e.preventDefault();

        emailjs.send('service_h91cy5f', 'template_6qn8cid', formData)
            .then((res) => {
                console.log(res);
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    guest: "",
                    date: "",
                    time: "",
                    message: "",
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className='mt-[-4.5rem]'>
                <Wave fill='#faf8f7'
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
            <div className="bg-background h-[63rem]">
                <div>
                    <div class="flex justify-center items-center gap-1 pt-[1rem] text-center text-primary pb-[1rem]">
                        <i class="fa-solid fa-diamond max-sm:text-[0.9rem]"></i>
                        <i class="fa-solid fa-diamond max-sm:text-[0.9rem]"></i>
                        <i class="fa-solid fa-diamond max-sm:text-[0.9rem]"></i>
                    </div>
                    <div class="text-center text-primary">
                        <h1 class="text-[1.2rem] font-medium pb-[1rem] max-sm:pb-[0.5rem]">RESERVE A TABLE</h1>
                    </div>
                    <div class="text-center font-semibold">
                        <h1 class="text-[2.5rem] max-sm:text-[2rem]">Dine With Us <span class="text-primary">- <br class="hidden max-sm:block" />Reserve Now</span></h1>
                    </div>
                </div>
                <div class="flex justify-evenly items-center box-border mt-[2.5rem] max-lg:mt-[1rem] max-sm:mt-[0]">
                    <div class="w-[35%] ml-[19rem] max-xl:w-[50%] max-xl:ml-[3rem] max-lg:w-[70%] max-lg:ml-0 max-lg:mt-[2rem]">
                        <form onSubmit={sendGMail}>
                            <div class="flex justify-evenly items-center gap-3 max-lg:flex-col">
                                <div></div>
                                <div>
                                    <div>
                                        <label class="text-justify font-medium" for="name">Your Name*</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none border-[1px] border-gray-200 shadow-sm  max-xl:w-[14rem] max-lg:w-[35rem] max-sm:w-[20rem] max-2xs:w-[17rem]" name="name" value={formData.name} onChange={handleChange} placeholder="Ex. Juan Dela Cruz" type="text" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium mt-[1.5rem]" for="number">Phone Number*</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none border-[1px] border-gray-200 shadow-sm  max-xl:w-[14rem] max-lg:w-[35rem] max-sm:w-[20rem] max-2xs:w-[17rem]" placeholder="Enter Phone Number" type="text" id="number" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium mt-[1.5rem]" for="date">Date of Reservation*</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none border-[1px] border-gray-200 shadow-sm max-xl:w-[14rem] max-lg:w-[35rem] max-sm:w-[20rem] max-2xs:w-[17rem]" placeholder="MM/DD/YYYY" type="text" id="date" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label class="text-justify font-medium mt-[1.5rem]" for="email">Email*</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none border-[1px] border-gray-200 shadow-sm  max-xl:w-[14rem] max-lg:w-[35rem] max-sm:w-[20rem] max-2xs:w-[17rem]" placeholder="test123@gmail.com" type="email" id="email" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium" for="guest">Number of Guests*</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] pr-[0.5rem] rounded-[1rem] mt-[1rem] outline-none border-[1px] border-gray-200 shadow-sm  max-xl:w-[14rem] max-lg:w-[35rem] max-sm:w-[20rem] max-2xs:w-[17rem]" placeholder="Enter Number of Guest(s)" type="text" id="guest" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium mt-[1.5rem]" for="time">Time of Reservation*</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] pr-[0.5rem] rounded-[1rem] mt-[1rem] outline-none border-[1px] border-gray-200 shadow-sm max-xl:w-[14rem] max-lg:w-[35rem] max-sm:w-[20rem] max-2xs:w-[17rem] cursor-pointer" placeholder="07:00 A.M" id="time" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-full mt-[1.5rem]">
                                    <label class="text-justify font-medium" for="message">Send us Message*</label>
                                    <input class="bg-white w-full h-[5rem] pl-[1rem] pb-[3rem] rounded-[1rem] mt-[1rem] outline-none border-[1px] border-gray-300" type="text" id="message" placeholder="Enter Here" />
                                </div>
                            </div>
                            <div class=" w-[10rem] h-[3rem] bg-primary rounded-[1.5rem] mt-[1.5rem] cursor-pointer hover:bg-tertiary/70">
                                <button type="submit" class="mt-[0.7rem] font-medium text-white pl-[1.5rem] cursor-pointer">BOOK A TABLE</button>
                            </div>
                        </form>
                    </div>
                    <div class="bg-three bg-[url('../../assets/pictures/ambot.jpg')] bg-cover h-[35rem] w-[27rem] rounded-[1rem] mr-[12.5rem] max-xl:mr-[2.5rem] max-xl:h-[30rem] max-xl:w-[24rem] max-lg:hidden">
                        <div class="text-white text-justify mt-[1.5rem] ml-[1.5rem] ">
                            <h1 class="text-[1.5rem] font-medium max-lg:text-[1.2rem]">Address</h1>
                            <p class="pt-[0.5rem] text-gray-200">Cordova 2041 Ln. Yeh, New York Sandwich</p>
                        </div>
                        <div class="text-white text-justify mt-[2.5rem] ml-[1.5rem] max-xl:mt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium max-lg:text-[1.2rem]">Contact</h1>
                            <p class="pt-[0.5rem] text-gray-200">Phone: (132) 1234 213</p>
                            <p class="pt-[0.5rem] text-gray-200">Email: emailnisiya@gmail.com</p>
                        </div>
                        <div class="text-white text-justify mt-[2.5rem] ml-[1.5rem] max-xl:mt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium max-lg:text-[1.2rem]">Open Time</h1>
                            <p class="pt-[0.5rem] text-gray-100">Monday - Friday : 11:00 AM - 10:00 PM</p>
                            <p class="pt-[0.5rem] text-gray-100">Saturday - Sunday : 9:00 AM - 11:00 PM</p>
                        </div>
                        <div class="text-white text-justify mt-[2.5rem] ml-[1.5rem] max-xl:mt-[1rem] max-lg:hidden">
                            <h1 class="text-[1.5rem] font-medium ">Stay Connected</h1>
                            <div class="flex justify-evenly items-center ml-[-1rem] mt-[1.5rem]">
                                <div class="w-[3.7rem] h-[3.7rem] bg-primary rounded-[50%] text-center">
                                    <i class="fa-brands fa-facebook text-[2.3rem] text-white mt-[0.65rem]"></i>
                                </div>
                                <div class="w-[3.7rem] h-[3.7rem] bg-primary rounded-[50%] text-center">
                                    <i class="fa-brands fa-square-x-twitter text-[2.3rem] mt-[0.65rem] text-white"></i>
                                </div>
                                <div class="w-[3.7rem] h-[3.7rem] bg-primary rounded-[50%] text-center">
                                    <i class="fa-brands fa-pinterest text-[2.3rem] mt-[0.65rem] text-white"></i>
                                </div>
                                <div class="w-[3.7rem] h-[3.7rem] bg-primary rounded-[50%] text-center">
                                    <i class="fa-brands fa-square-instagram text-[2.3rem] mt-[0.65rem] text-white "></i>
                                </div>
                                <div class="w-[3.7rem] h-[3.7rem] bg-primary rounded-[50%] text-center">
                                    <i class="fa-brands fa-youtube text-[2.3rem] mt-[0.65rem] text-wite"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}