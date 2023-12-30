import { useContext } from "react";
import { GameWindowContext } from "./GameWindow";

const VictoryWindow = () => {
    const [window,gameWindow] = useContext(GameWindowContext)
    return (
        <div>
            <h2>All levels cleared!</h2>
            <button onClick={()=>gameWindow("menu")}>Quit</button>
        </div>
    );

}

export default VictoryWindow;