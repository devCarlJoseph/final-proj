import ChefFour from "../../assets/pictures/exec1.jpeg"
import ChefFive from "../../assets/pictures/exec2.webp"
import ChefSix from "../../assets/pictures/pas1.webp"
import ChefSeven from "../../assets/pictures/pas2.webp"
import ChefEight from "../../assets/pictures/sous1.jpg"
import ChefNine from "../../assets/pictures/sous2.webp"


export default function Other() {
    return (
        <div>
            <div className="bg-background mt-[-9.5rem] h-[75rem]">
                <div class="flex justify-evenly gap-[1.5rem] items-center mt-[3rem] max-lg:flex-col max-lg:gap-[2rem] max-2xs:mt-[2rem]">
                    <div class="ml-[7.5rem] relative max-xl:ml-[0.5rem] max-lg:ml-0">
                        <a href="/Chef"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefSeven} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                            <h1 class="text-primary">Executive Chef</h1>
                        </div>
                    </div>
                    <div>
                        <a href="/"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefEight} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                            <h1 class="text-primary">Sous Chef</h1>
                        </div>
                    </div>
                    <div class="mr-[7.5rem] max-xl:mr-[0.5rem] max-lg:mr-0">
                        <a href="/"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefNine} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                            <h1 class="text-primary">Executive Chef</h1>
                        </div>
                    </div>
                </div>
                <div class="flex justify-evenly gap-[1.5rem] items-center mt-[3rem] max-lg:flex-col max-lg:gap-[2rem] max-2xs:mt-[2rem]">
                    <div class="ml-[7.5rem] relative max-xl:ml-[0.5rem] max-lg:ml-0">
                        <a href="/"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefFour} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                            <h1 class="text-primary">Executive Chef</h1>
                        </div>
                    </div>
                    <div>
                        <a href="/"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefFive} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                            <h1 class="text-primary">Sous Chef</h1>
                        </div>
                    </div>
                    <div class="mr-[7.5rem] max-xl:mr-[0.5rem] max-lg:mr-0">
                        <a href="/"><img class="w-[25rem] h-[25rem] rounded-[2rem] object-cover max-xl:w-[20rem] max-xl:h-[20rem] max-2xs:w-[18rem] max-2xs:h-[18rem]" src={ChefSix} /></a>
                        <div class="text-center pt-[1rem]">
                            <h1 class="text-[1.5rem] font-medium">Manang Linda</h1>
                            <h1 class="text-primary">Executive Chef</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}