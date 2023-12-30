import { useContext } from "react";
import { GameWindowContext } from "./GameWindow";


const AboutMeComponent = () => {
    const [appWindow, updateWindow] = useContext(GameWindowContext)
    return (
        <div id="about-me">
            <h3>About the game</h3>
            <div>
                <h4>Coder:</h4>
                <p>Francis O.</p>
            </div>
            <div>
                <h4>UI/UX Designer:</h4>
                <p>Francis O.</p>
            </div>
            <p>Yes... I'm terrible at designing</p>

            <button onClick={()=>updateWindow("menu")}>Back</button>
        </div>
    );
}

export default AboutMeComponent;