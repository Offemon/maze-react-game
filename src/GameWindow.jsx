import { createContext, useState } from "react";
import MazeMainComponent from "./Mazemain";
import MenuWindow from "./MenuComponent";

export const GameWindowContext = createContext()
const GameWindow = () => {
    const [gaming, setGaming] = useState("menu")
    const gameWindow = (stat) => {
        setGaming(stat);
    }
    return(
        <GameWindowContext.Provider value={[gaming,gameWindow]}>
            <div id="app-body">
                <h1>Hedge Maze Game</h1>
                <h4>Made with React JS</h4>
                <h5>by Francis O.</h5>
                {gaming==="menu"?(
                <MenuWindow/>
                ): gaming==="game"?(
                <MazeMainComponent/>
                ):(
                    <div>
                        <h4>Work in progress!</h4>
                        <button onClick={()=>gameWindow("menu")}>Back</button>
                    </div>
                )}
            </div>
        </GameWindowContext.Provider>

    );
}

export default GameWindow;