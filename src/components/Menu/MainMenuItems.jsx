import { useState } from "react";
import ItemList from "./MenuItems/ItemList";
import Test123 from "./MenuItems/MenuItems";


export default function MainMenuItems() {

    const [heroCount, setHeroCount] = useState(0);

    return (
        <div>
            < ItemList
                heroCount={heroCount}
                setHeroCount={setHeroCount} />
            <Test123 heroCount={heroCount} />
        </div>
    )
}