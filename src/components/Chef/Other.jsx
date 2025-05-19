import ChefFour from "../../assets/pictures/exec1.jpeg"
import ChefFive from "../../assets/pictures/exec2.webp"
import ChefSix from "../../assets/pictures/pas1.webp"
import ChefSeven from "../../assets/pictures/pas2.webp"
import ChefEight from "../../assets/pictures/sous1.jpg"
import ChefNine from "../../assets/pictures/sous2.webp"


export default function Other() {
    return (
        <div>
            <div className="bg-background mt-[-6.5rem] h-[75rem] tablet:h-[200rem] tablet:mt-[-13rem] cp:mt-[-21rem] cp:h-[175rem] sCP:mt-[-28rem] sCP:h-[159rem]">
                <div class="flex justify-center items-center gap-[1.5rem] items-center mt-[3rem] tablet:mt-[15rem] tablet:flex-col">
                    <div class="relative">
                        <a href="/ChefFour"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefSeven} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Li Shiena</h1>
                            <h1 class="text-primary">Pastry Chef</h1>
                        </div>
                    </div>
                    <div>
                        <a href="/ChefFive"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefEight} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Andrei Drund</h1>
                            <h1 class="text-primary">Sous Chef</h1>
                        </div>
                    </div>
                    <div class="">
                        <a href="/ChefSix"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefNine} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Joseph No Leaden</h1>
                            <h1 class="text-primary">Sous Chef</h1>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-[1.5rem] items-center mt-[3rem] tablet:flex-col">
                    <div class="relative">
                        <a href="/ChefSeven"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefFour} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Li Chi Cha</h1>
                            <h1 class="text-primary">Executive Chef</h1>
                        </div>
                    </div>
                    <div>
                        <a href="/ChefEight"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefFive} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Joe Bald</h1>
                            <h1 class="text-primary">Executive Chef</h1>
                        </div>
                    </div>
                    <div class="">
                        <a href="/ChefNine"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover cp:w-[22rem] cp:h-[22rem] myPhone:w-[20rem] myPhone:h-[20rem] sCP:w-[19rem] sCP:h-[19rem]" src={ChefSix} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">John Jo Dop</h1>
                            <h1 class="text-primary">Pastry Chef</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}