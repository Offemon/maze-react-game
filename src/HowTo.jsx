import { useContext } from "react";
import { GameWindowContext } from "./GameWindow";


const HowToPlayComponent = () => {
    const [appWindow, updateWindow] = useContext(GameWindowContext)

    const handleBackBtn = (state) => {
        updateWindow(state)
    }
    return (
        <div id="how-to-container">
            <div id="desktop-ins">
                <h3>Objective:</h3>
                <p>You must guide the Hedgerunner to reach the end pont of the maze by using the following Keyboard keys:</p>
                <div>
                    <ul>
                        <li><span className="chosen-one">W</span> - Move UP</li>
                        <li><span className="chosen-one">A</span> - Move LEFT</li>
                        <li><span className="chosen-one">S</span> - Move DOWN</li>
                        <li><span className="chosen-one">D</span> - Move RIGHT</li>
                    </ul>
                </div>
                <button onClick={()=>handleBackBtn("menu")}>Back</button>
            </div>
            <div id="mobile-ins">
                <h3>Movement Buttons</h3>
                <p>You must guide the Hedgerunner to reach the exit of the maze by using the following directional buttons</p>
                <div>
                    <table id="mobile-controls">
                            <tbody>
                            <tr>
                                <td></td>
                                <td><button>UP</button></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><button>LEFT</button></td>
                                <td></td>
                                <td><button>RIGHT</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button>DOWN</button></td>
                                <td></td>
                            </tr>
                            </tbody>
                    </table>
                    <button onClick={()=>handleBackBtn("menu")}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default HowToPlayComponent;