import { useContext } from "react";
import { GameWindowContext } from "./GameWindow";


const MenuWindow = () => {
const [gaming, gamewindow] = useContext(GameWindowContext);

const handleStartBtn = () => {
    gamewindow("game")
}

const handleHow2Play = () => {
    gamewindow("how")
}
    return (
        <div id="menu-container">
            <button onClick={()=>handleStartBtn()}>Start Game</button>
            <button onClick={()=>handleHow2Play()}>How to play?</button>
        </div>
    );
}

export default MenuWindow;