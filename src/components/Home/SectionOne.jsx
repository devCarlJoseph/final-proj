

export default function SectionOne() {
    return (
        <div className="relative overflow-hidden min-h-[40rem] bg-gray-50">
            <div className="h-[700px] w-[700px] bg-secondary absolute top-[-20rem] right-0 rounded-3xl rotate-45"></div>
            <div className="flex justify-center items-center">
                <div className="bg-[url('../../assets/pictures/experience1.png')] bg-cover h-[35rem] w-[75rem] mt-[2.5rem] z-10 rounded-3xl">
                    <div className="flex flex-col items-center">
                        <div className="mt-[13rem]">
                            <h1 className="text-[2.5rem] font-medium text-white">Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                        </div>
                        <div class="w-[10rem] h-[2.5rem] backdrop-blur-md bg-white/10 border-[1px] border-white text-center rounded-3xl">
                            <button class="mt-[0.3rem] text-white cursor-pointer font-medium">Dining Experience</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}