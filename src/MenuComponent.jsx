import { useContext } from "react";
import { GameWindowContext } from "./GameWindow";


const MenuWindow = () => {
const [appWindow, updateWindow] = useContext(GameWindowContext);

const handleMenuBtn = (state) => {
    updateWindow(state)
}


    return (
        <div id="menu-container">
            <h1>Hedgerunner</h1>
            <button onClick={()=>handleMenuBtn("game")}>Start Game</button>
            <button onClick={()=>handleMenuBtn("how")}>How to Play</button>
            <button onClick={()=>handleMenuBtn("about")}>About me</button>
        </div>
    );
}

export default MenuWindow;