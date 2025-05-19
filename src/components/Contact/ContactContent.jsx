import Wave from "react-wavify"
import Image from "../../assets/pictures/gallery6.png"
import { useState } from "react";


export default function ContactContent() {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_oocj8t8';
        const templateId = 'template_6qn8cid';
        const publicKey = 'kQ8BLqVB0qJ7ip772';

        const templateParams = {
            fname: fname,
            lname: lname,
            email: email,
            number: number,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent succesfully!', response);
                setFName('');
                setLName('');
                setEmail('');
                setNumber('');
                setSubject('');
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
            <div className="h-[55rem] bg-background tablet:h-[95rem]">
                <div class="flex justify-center items-center gap-1 pt-[1rem] text-center text-primary pb-[1rem] max-sm:pt-[2rem] max-sm:pb-[0.5rem]">
                    <i class="fa-solid fa-diamond tablet:text-[0.9rem]"></i>
                    <i class="fa-solid fa-diamond tablet:text-[0.9rem]"></i>
                    <i class="fa-solid fa-diamond tablet:text-[0.9rem]"></i>
                </div>
                <div class="text-center text-primary">
                    <h1 class="text-[1.2rem] font-medium pb-[0.5rem] tablet:text-[1rem]">Contact Us</h1>
                </div>
                <div class="text-center font-semibold">
                    <h1 class="text-[2.5rem] tablet:text-[1.7rem]">Get in<span class="text-primary"> Touch with Us</span></h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center items-center gap-[2rem] mt-[2.5rem] tablet:flex-col-reverse">
                            <div>
                                <div className="flex gap-[2rem] cp:flex-col">
                                    <div className="flex flex-col gap-2 w-[19rem]">
                                        <label className="font-medium" htmlFor="f-name">First Name*</label>
                                        <input className="w-[19rem] h-[3.5rem] rounded-2xl border-[1px] border-gray-300 pl-4 outline-none" value={fname} onChange={(e) => setFName(e.target.value)} placeholder="Ex. John" />
                                    </div>
                                    <div className="flex flex-col gap-2 w-[19rem]">
                                        <label className="font-medium" htmlFor="f-name">Last Name*</label>
                                        <input className="w-[19rem] h-[3.5rem] rounded-2xl border-[1px] border-gray-300 pl-4 outline-none" value={lname} onChange={(e) => setLName(e.target.value)} placeholder="Ex. Doe" />
                                    </div>
                                </div>
                                <div className="flex gap-[2rem] mt-[1.5rem] cp:flex-col">
                                    <div className="flex flex-col gap-2 w-[19rem]">
                                        <label className="font-medium" htmlFor="f-name">Email*</label>
                                        <input className="w-[19rem] h-[3.5rem] rounded-2xl border-[1px] border-gray-300 pl-4 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Test123@gmail.com" />
                                    </div>
                                    <div className="flex flex-col gap-2 w-[19rem]">
                                        <label className="font-medium" htmlFor="f-name">Phone*</label>
                                        <input className="w-[19rem] h-[3.5rem] rounded-2xl border-[1px] border-gray-300 pl-4 outline-none" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Phone Number" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-[19rem] mt-[1.5rem]">
                                    <label className="font-medium" htmlFor="subject">Subject*</label>
                                    <input className="w-[40rem] h-[3.5rem] rounded-2xl border-[1px] border-gray-300 pl-4 outline-none cp:w-[19rem]" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter here.." />
                                </div>
                                <div className="flex flex-col gap-2 w-[19rem] mt-[1.5rem]">
                                    <label className="font-medium" htmlFor="subject">Your Message*</label>
                                    <input className="w-[40rem] h-[12.5rem] rounded-2xl border-[1px] border-gray-300 pb-[9.5rem] pl-4 outline-none cp:w-[19rem]" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter here.." />
                                </div>
                                <div>
                                    <div className="w-[11rem] h-[3rem] bg-primary rounded-3xl text-center mt-[1.5rem] hover:bg-tertiary cursor-pointer">
                                        <button className="text-white mt-3">Send a Message</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="w-[27rem] h-[40rem] object-cover rounded-2xl tablet:w-[30rem] tablet:h-[35rem] cp:w-[20rem] cp:h-[25rem]" src={Image} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}