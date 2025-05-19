import Wave from "react-wavify"


export default function Footer() {
  return (
    <div>
      <div className='mt-[-6.5rem]'>
        <Wave fill='#212121'
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
      <div className="bg-tertiary mt-[-0.5rem] tablet:mt-[-4.5rem]">
        <div>
          <div className="text-white flex justify-evenly pt-[1rem] tablet:flex-col tablet:items-center">
            <div>
              <div className="flex justify-start items-start text-white gap-2">
                <div className="w-[3rem] h-[3rem] bg-primary rounded-[50%]">
                  <i className="fa-solid fa-bowl-food text-[2rem] ml-[0.5rem] mt-[0.45rem]"></i>
                </div>
                <div>
                  <h1 className="text-[1.5rem] font-bold tabv">CjCo</h1>
                  <h1 className="text-[0.7rem] text-gray-300">RESTAURANT</h1>
                </div>
              </div>
              <div className="text-justify mt-[2rem] text-gray-300 tablet:hidden">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> adipisicing elit, sed do sadamsad awdasdadasdasf sa <br /> asdaqaswdas dhdgasdjgasd asdawds dsad magna.</p>
              </div>
              <div className="flex justify-evenly items-start mt-[2.5rem] ml-[-1.5rem] tablet:hidden">
                <div className="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i className="fa-brands fa-facebook text-[2rem] text-white hover:text-tertiary mt-[0.4rem] cursor-pointer"></i>
                </div>
                <div className="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i className="fa-brands fa-square-x-twitter text-[2rem] mt-[0.4rem] text-white hover:text-tertiary cursor-pointer"></i>
                </div>
                <div className="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i className="fa-brands fa-pinterest text-[2rem] mt-[0.4rem] text-white hover:text-tertiary cursor-pointer"></i>
                </div>
                <div className="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i className="fa-brands fa-square-instagram text-[2rem] mt-[0.4rem] text-white hover:text-tertiary cursor-pointer"></i>
                </div>
                <div className="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i className="fa-brands fa-youtube text-[2rem] mt-[0.4rem] text-white hover:text-tertiary cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="tablet:text-center tablet:mt-[2rem] font-semibold">Links</h1>
                <div className="mt-[2rem] text-gray-300 tablet:mt-0">
                  <ul className="tablet:flex gap-[1rem] myPhone:gap-[0.8rem]">
                    <li className="mt-[1rem] cursor-pointer hover:text-primary myPhone:text-[0.9rem]"><a href="/Chef">Our Staff</a></li>
                    <li className="mt-[1rem] cursor-pointer hover:text-primary myPhone:text-[0.9rem]"><a href="/Contact">Contact Us</a></li>
                    <li className="mt-[1rem] cursor-pointer hover:text-primary myPhone:text-[0.9rem]"><a href="/about">About Us</a></li>
                    <li className="mt-[1rem] cursor-pointer hover:text-primary myPhone:text-[0.9rem]"><a href="/Testimonial">Testimonials</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="tablet:hidden">
                <h1>Contact Info</h1>
                <div className="mt-[2rem] text-gray-300">
                  <h1 className="cursor-pointer hover:text-primary">(123) 456-78910 </h1>
                  <h1 className="cursor-pointer hover:text-primary mt-[1rem]">gmailnisiya@gmail.com</h1>
                  <h1 className="cursor-pointer hover:text-primary mt-[1rem]">1234 Sprite Ln, Cordo <br /> New York Sandwich</h1>
                </div>
              </div>
            </div>
            <div className="tablet:hidden">
              <div>
                <h1>Get the latest information</h1>
                <div className="mt-[2rem] relative">
                  <input className="w-[20rem] h-[3rem] backdrop-blur-xl bg-white/40 text-white pl-[1rem] rounded-[0.8rem] tablet:w-[18.5rem]" type="text" placeholder="Email address" />
                  <div className="w-[3rem] h-[3rem] bg-primary rounded-r-[0.8rem] absolute top-0 right-0">
                    <i className="fa-solid fa-caret-right text-[3.5rem] mt-[-0.3rem] ml-[0.3rem] ab"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-b-white w-[85%] mt-[4rem] ml-[7rem] max-2xl:ml-[8.5rem] tablet:mt-[1rem] tablet:ml-[3.7rem] cp:ml-[2rem] myPhone:w-[90%] myPhone:ml-[1rem]"></div>
          <div className="flex justify-between items-center mt-[2rem] pb-[4rem] max-xl:mt-[1rem] cp:justify-center tablet:pb-[2rem]">
            <div className="text-white ml-[7rem] tablet:ml-[3.7rem] cp:ml-0">
              <h1>Copyright 2025</h1>
            </div>
            <div className="text-white mr-[7rem] tablet:mr-[3.7rem] cp:hidden">
              <h1>User Terms & Condition | Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}