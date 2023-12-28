import { useEffect, useState } from "react";
import { level1 } from "./MazeLevelData";



const MazeMainComponent = () => {
    const [level,setLevel] = useState(1)
    const [playerCoor, setPlayerCoor] = useState({row:1,col:1})

    let mazeDimensionStyle = {

    }
    useEffect(()=>{
        window.addEventListener('keydown', handleArrowKeys);
        return ()=>{
            window.removeEventListener('keydown', handleArrowKeys)
        }
    },[])

    const handleArrowKeys = (e) => {
        switch(e.key){
            case 'ArrowUp':
                console.log('Arrow Up Pressed');
                // Add your logic for Arrow Up key press
                break;
            case 'ArrowDown':
                console.log('Arrow Down Pressed');
                // Add your logic for Arrow Down key press
                break;
            case 'ArrowLeft':
                console.log('Arrow Left Pressed');
                // Add your logic for Arrow Left key press
                break;
            case 'ArrowRight':
                console.log('Arrow Right Pressed');
                // Add your logic for Arrow Right key press
                break;
            default:
                // Handle other key presses if needed
                break;
        }
    }

    return (
        <div id="maze-game-container">
            <div id="maze-grid-container">
                {level1.map((row,rCount)=>{
                     return row.map((column,cCount)=>{
                        if (column){
                            return (<div key={[rCount,cCount]} className="maze-wall maze-tile"></div>)
                        }
                        else{
                            return (<div key={[rCount,cCount]} className="maze-path maze-tile"></div>)
                        }
                    })
                })}
            </div>
        </div>
    );
}

export default MazeMainComponent;