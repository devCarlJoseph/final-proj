import Wave from "react-wavify"


export default function Footer() {
  return (
    <div>
      <div className='mt-[-6.5rem] bg-backround'>
        <Wave fill='#242424'
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
      <div className="bg-tertiary mt-[-0.5rem]">
        <div>
          <div class="text-white flex justify-evenly max-xl:hidden pt-[1rem]">
            <div>
              <div class="flex justify-start items-start text-white gap-2">
                <div class="w-[3rem] h-[3rem] bg-primary rounded-[50%]">
                  <i class="fa-solid fa-bowl-food text-[2rem] ml-[0.5rem] mt-[0.45rem]"></i>
                </div>
                <div>
                  <h1 class="text-[1.5rem] font-bold">CjCo</h1>
                  <h1 class="text-[0.7rem] text-gray-300">RESTAURANT</h1>
                </div>
              </div>
              <div class="text-justify mt-[2rem] text-gray-300">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> adipisicing elit, sed do sadamsad awdasdadasdasf sa <br /> asdaqaswdas dhdgasdjgasd asdawds dsad magna.</p>
              </div>
              <div class="flex justify-evenly items-start mt-[2.5rem] ml-[-1.5rem]">
                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i class="fa-brands fa-facebook text-[2rem] text-white mt-[0.4rem]"></i>
                </div>
                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i class="fa-brands fa-square-x-twitter text-[2rem] mt-[0.4rem] text-white"></i>
                </div>
                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i class="fa-brands fa-pinterest text-[2rem] mt-[0.4rem] text-white"></i>
                </div>
                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i class="fa-brands fa-square-instagram text-[2rem] mt-[0.4rem] text-white"></i>
                </div>
                <div class="w-[3rem] h-[3rem] backdrop-blur-xl bg-white/40 border-2 border-white rounded-[50%] text-center">
                  <i class="fa-brands fa-youtube text-[2rem] mt-[0.4rem] text-white"></i>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1>Links</h1>
                <div class="mt-[2rem] text-gray-300">
                  <h1>FAQs</h1>
                  <h1 class="mt-[1rem]">Our Staff</h1>
                  <h1 class="mt-[1rem]">Contact Us</h1>
                  <h1 class="mt-[1rem]">About Us</h1>
                  <h1 class="mt-[1rem]">Testimonials</h1>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1>Contact Info</h1>
                <div class="mt-[2rem] text-gray-300">
                  <h1 class="">(123) 456-78910 </h1>
                  <h1 class="mt-[1rem]">gmailnisiya@gmail.com</h1>
                  <h1 class="mt-[1rem]">1234 Sprite Ln, Cordo <br /> New York Sandwich</h1>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1>Get the latest information</h1>
                <div class="mt-[2rem] relative">
                  <input class="w-[20rem] h-[3rem] backdrop-blur-xl bg-white/40 text-white pl-[1rem] rounded-[0.8rem]" type="text" placeholder="Email address" />
                  <div class="w-[3rem] h-[3rem] bg-primary rounded-r-[0.8rem] absolute top-0 right-0">
                    <i class="fa-solid fa-caret-right text-[3.5rem] mt-[-0.3rem] ml-[0.3rem] ab"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-b-[1px] border-b-white w-[82.7%] mt-[4rem] ml-[11.5rem] max-2xl:ml-[8.5rem] max-xl:hidden"></div>
          <div class="flex justify-between items-center mt-[3rem] max-xl:mt-[1rem] max-sm:justify-center">
            <div class="text-white ml-[11.5rem] max-xl:ml-[5rem] max-lg:ml-[2rem] max-sm:ml-0">
              <h1>Copyright 2025</h1>
            </div>
            <div class="text-white mr-[11.5rem] max-xl:mr-[5rem] max-lg:mr-[2rem] max-sm:hidden">
              <h1>User Terms & Condition | Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}