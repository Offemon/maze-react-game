import { createContext, useState } from "react";
import MazeMainComponent from "./Mazemain";
import MenuWindow from "./MenuComponent";
import HowToPlayComponent from "./HowTo";
import AboutMeComponent from "./About";
import VictoryWindow from "./Victory";

export const GameWindowContext = createContext()
const GameWindow = () => {
    const [appWindow, setAppWindow] = useState("menu")
    const updateWindow = (stat) => {
        setAppWindow(stat);
    }
    return(
        <GameWindowContext.Provider value={[appWindow,updateWindow]}>
            <div id="app-body">
                {appWindow==="menu"?<MenuWindow/>:null}
                {appWindow==="game"?<MazeMainComponent/>:null}
                {appWindow==="how"?<HowToPlayComponent/>:null}
                {appWindow==="about"?<AboutMeComponent/>:null}
                {appWindow==="victory"?<VictoryWindow/>:null}
            </div>
        </GameWindowContext.Provider>

    );
}

export default GameWindow;