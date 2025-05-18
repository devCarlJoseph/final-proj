

export default function GlimpseH({ setPlayStatus, playStatus }) {
    return (
        <div>
            <div>
                <div className="w-[4rem] h-[4rem] bg-white/40 border-[1px] border-white rounded-[50%] text-center text-primary ml-[1.4rem] z-[2] absolute bottom-[2rem] left-[12.1rem] tablet:left-[3rem]">
                    <i onClick={() => setPlayStatus(!playStatus)} class={playStatus ? "fa-solid fa-circle-pause cursor-pointer text-[2.5rem] mt-[0.65rem]" : "fa-solid fa-circle-play cursor-pointer text-[2.5rem] mt-[0.65rem]"}></i>
                </div>
            </div>
        </div>
    );
}