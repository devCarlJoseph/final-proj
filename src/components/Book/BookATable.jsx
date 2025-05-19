import Wave from "react-wavify"
import { useState } from "react";



export default function BookATable() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [guest, setGuest] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_ji6s02i';
        const templateId = 'template_eqogmgk';
        const publicKey = 'kQ8BLqVB0qJ7ip772';

        const templateParams = {
            name: name,
            email: email,
            number: number,
            guest: guest,
            date: date,
            time: time,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent succesfully!', response);
                setName('');
                setEmail('');
                setNumber('');
                setGuest('');
                setDate('');
                setTime('');
                setMessage('');
            })
            .catch((error) => {
                console.log('Error sending email:', error)
            })

    }


    return (
        <div>
            <div className='mt-[-9rem]'>
                <Wave fill='#faf8f7'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 100,
                        amplitude: 10,
                        speed: 0.15,
                        points: 10
                    }}
                />
            </div>
            <div className="bg-background h-[63rem] cp:h-[95rem]">
                <div>
                    <div class="flex justify-center items-center gap-1 pt-[1rem] text-center text-primary pb-[1rem]">
                        <i class="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                        <i class="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                        <i class="fa-solid fa-diamond cp:text-[0.9rem]"></i>
                    </div>
                    <div class="text-center text-primary">
                        <h1 class="text-[1.2rem] font-medium pb-[1rem] cp:pb-[0.5rem] cp:text-[0.9rem]">RESERVE A TABLE</h1>
                    </div>
                    <div class="text-center font-semibold">
                        <h1 class="text-[2.5rem] cp:text-[1.7rem]">Dine With Us <span class="text-primary">- <br class="hidden max-sm:block" />Reserve Now</span></h1>
                    </div>
                </div>
                <div class="flex justify-evenly items-center box-border mt-[2.5rem] tablet:flex-col-reverse">
                    <div class="w-[35%] ml-[19rem] tablet:ml-0 ">
                        <form onSubmit={handleSubmit}>
                            <div class="flex justify-evenly items-center gap-3 tablet:flex-col tablet:mt-[1.5rem]">
                                <div>
                                    <div>
                                        <label class="text-justify font-medium">Your Name</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none shadow-sm tablet:w-[35rem] cp:w-[19rem]" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex. Juan Dela Cruz" type="text" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium mt-[1.5rem]">Phone Number</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none shadow-sm tablet:w-[35rem] cp:w-[19rem]" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Phone Number" type="text" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium mt-[1.5rem]">Date of Reservation</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none shadow-sm tablet:w-[35rem] cp:w-[19rem]" value={date} onChange={(e) => setDate(e.target.value)} placeholder="MM/DD/YYYY" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label class="text-justify font-medium mt-[1.5rem]" for="email">Email</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] rounded-[1rem] mt-[1rem] outline-none shadow-sm tablet:w-[35rem] cp:w-[19rem]" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test123@gmail.com" type="email" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium" for="guest">Number of Guests</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] pr-[0.5rem] rounded-[1rem] mt-[1rem] outline-none shadow-sm tablet:w-[35rem] cp:w-[19rem]" value={guest} onChange={(e) => setGuest(e.target.value)} placeholder="Enter Number of Guest(s)" type="text" />
                                    </div>
                                    <div class="mt-[1.5rem]">
                                        <label class="text-justify font-medium mt-[1.5rem]" for="time">Time of Reservation</label>
                                        <input class="bg-white w-[16rem] h-[3rem] pl-[1rem] pr-[0.5rem] rounded-[1rem] mt-[1rem] outline-none shadow-sm tablet:w-[35rem] cp:w-[19rem] cursor-pointer" value={time} onChange={(e) => setTime(e.target.value)} placeholder="07:00 A.M" id="time" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start cp:items-center">
                                <div className="mt-[1.5rem] flex flex-col">
                                    <label class="text-justify font-medium tablet:ml-[-9rem] cp:ml-0" for="message">Send us Message</label>
                                    <input class="bg-white w-[32.8rem] h-[5rem] pl-[1rem] pb-[3rem] ml-0 rounded-[1rem] mt-[1rem] outline-none shadow-sm tablet:w-[35rem] tablet:ml-[-9rem] cp:w-[19rem] cp:ml-0" value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Enter Here" />
                                </div>
                                <div class="w-[10rem] h-[3rem] bg-primary rounded-[1.5rem] text-center mt-[1.5rem] cursor-pointer hover:bg-tertiary/70 tablet:ml-[-9rem]">
                                    <button type="submit" class="mt-[0.7rem] font-medium text-white cursor-pointer ">BOOK A TABLE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="bg-three bg-[url('../../assets/pictures/ambot.jpg')] bg-cover h-[35rem] w-[27rem] rounded-[1rem] mr-[12.5rem] tablet:mr-0 cp:w-[20rem] cp:h-[20rem]">
                        <div class="text-white text-justify mt-[1.5rem] ml-[1.5rem] ">
                            <h1 class="text-[1.5rem] font-medium cp:text-[1.2rem]">Address</h1>
                            <p class="pt-[0.5rem] text-gray-200 cp:text-[0.9rem]">Cordova 2041 Ln. Yeh, New York Sandwich</p>
                        </div>
                        <div class="text-white text-justify mt-[2.5rem] ml-[1.5rem] cp:mt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium cp:text-[1.2rem]">Contact</h1>
                            <p class="pt-[0.5rem] text-gray-200 cp:text-[0.9rem]">Phone: (132) 1234 213</p>
                            <p class="pt-[0.5rem] text-gray-200 cp:text-[0.9rem]">Email: emailnisiya@gmail.com</p>
                        </div>
                        <div class="text-white text-justify mt-[2.5rem] ml-[1.5rem] cp:mt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium cp:text-[1.2rem]">Open Time</h1>
                            <p class="pt-[0.5rem] text-gray-100 cp:text-[0.9rem]">Monday - Friday : 11:00 AM - 10:00 PM</p>
                            <p class="pt-[0.5rem] text-gray-100 cp:text-[0.9rem]">Saturday - Sunday : 9:00 AM - 11:00 PM</p>
                        </div>
                        <div class="text-white text-justify mt-[2.5rem] ml-[1.5rem] cp:mt-[1rem] cp:hidden">
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