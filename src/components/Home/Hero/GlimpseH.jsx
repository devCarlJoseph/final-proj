

export default function GlimpseH({ setPlayStatus, playStatus }) {
    return (
        <div>
            <div>
                <div className="w-[4rem] h-[4rem] bg-white/40 border-[1px] border-white rounded-[50%] text-center text-primary ml-[1.4rem]">
                    <i onClick={() => setPlayStatus(!playStatus)} class={playStatus ? "fa-solid fa-circle-pause cursor-pointer text-[2.5rem] mt-[0.65rem]" : "fa-solid fa-circle-play cursor-pointer text-[2.5rem] mt-[0.65rem]"}></i>
                </div>
                <div>
                    <p className="text-white text-[1.2rem] mr-8 font-medium pt-2">See the video</p>
                </div>
            </div>
        </div>
    );
}