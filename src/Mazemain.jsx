import { useContext, useEffect, useState } from "react";
import { mazedata } from "./MazeLevelData";
import { GameWindowContext } from "./GameWindow";
import playerImg from "./assets/HedgeRunner.png";
import goalImg from "./assets/MazeGoal.png";

const MazeMainComponent = () => {
    const [appWindow, updateWindow] = useContext(GameWindowContext);
    const [orientation, setOrientation] = useState(null)
    const [level, setLevel] = useState(1)
    const [mazeGrid,setMazeGrid] = useState(mazedata[level-1].mazegrid)
    const [playerCoor, setPlayerCoor] = useState(mazedata[level-1].start)
    const [goalCoor, setGoalCoor] = useState(mazedata[level-1].end)

    const mazeDimensionStyle = {
        gridTemplateColumns: `repeat(${mazedata[level-1].mazegrid[0].length}, 0fr)`
    }
    const tileLandscapeDimensions = {
        width: `${88/mazeGrid[0].length}vh`,
        height: `${88/mazeGrid[0].length}vh`,
    }
    const tilePortraitDimensions = {
        width: `${88/mazeGrid[0].length}vw`,
        height: `${88/mazeGrid[0].length}vw`,
    }

    useEffect(()=>{
        const getOrientation = () => {
            const windowOrientation = window.matchMedia('(orientation:landscape)')
            if(windowOrientation.matches){
                console.log("landscape")
                setOrientation("landscape")
            }
            else{
                console.log("portrait")
                setOrientation("portrait")
            }
        }
        getOrientation()
        window.addEventListener('resize', getOrientation)
        return ()=>{
            window.removeEventListener('resize', getOrientation)
        }

    },[orientation])
    
    useEffect(()=>{
        goalCheck();
        window.addEventListener('keydown', handleArrowKeys);
        return ()=>{
            window.removeEventListener('keydown', handleArrowKeys)
        }
    },[playerCoor])

    const handleBackBtn = () => {
        updateWindow("menu");
    }

    const goalCheck = () => {
        if(playerCoor.row === goalCoor.row && playerCoor.col === goalCoor.col){
            if(level===3){
                updateWindow("victory");
            }
            else if (level < 3){
                setLevel(currentLevel => {return currentLevel+1});
                setMazeGrid(mazedata[level].mazegrid);
                setPlayerCoor(mazedata[level].start);
                setGoalCoor(mazedata[level].end);
            }
        }
    }

    const handleArrowKeys = (e) => {
        switch(e.key){
            case 'w':
                if(playerCoor.row>0){
                    if(mazeGrid[playerCoor.row-1][playerCoor.col]===0){
                        setPlayerCoor({
                            ...playerCoor,
                            row: playerCoor.row-1
                        })
                    }
                }
                break;

            case 's':
                if(mazeGrid[playerCoor.row+1][playerCoor.col]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        row: playerCoor.row+1
                    })
                }
                break;

            case 'a':
                if(mazeGrid[playerCoor.row][playerCoor.col-1]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        col: playerCoor.col-1
                    })
                }
                break;

            case 'd':
                if(mazeGrid[playerCoor.row][playerCoor.col+1]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        col: playerCoor.col+1
                    })
                }
                break;

            default:
                break;
        }
    }

    const handleControlBtn = (e) => {
        switch(e.target.name){
            case 'up':
                if(playerCoor.row>0){
                    if(mazeGrid[playerCoor.row-1][playerCoor.col]===0){
                        setPlayerCoor({
                            ...playerCoor,
                            row: playerCoor.row-1
                        })
                    }
                }
                break;

            case 'down':
                if(mazeGrid[playerCoor.row+1][playerCoor.col]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        row: playerCoor.row+1
                    })
                }
                break;

            case 'left':
                if(mazeGrid[playerCoor.row][playerCoor.col-1]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        col: playerCoor.col-1
                    })
                }
                break;

            case 'right':
                if(mazeGrid[playerCoor.row][playerCoor.col+1]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        col: playerCoor.col+1
                    })
                }
                break;

            default:
                break;
        }
    }

    return (
        <div id="maze-game-container">
            <div id="maze-grid-container" style={mazeDimensionStyle}>
                {mazeGrid.map((row,rCount)=>{
                     return row.map((column,cCount)=>{
                        if (column){
                            return (<div key={[rCount,cCount]} className="maze-wall maze-tile" style={orientation==="landscape"?tileLandscapeDimensions:tilePortraitDimensions}></div>)
                        }
                        else{
                            return (<div key={[rCount,cCount]} className="maze-path maze-tile" style={orientation==="landscape"?tileLandscapeDimensions:tilePortraitDimensions}>{playerCoor.row === rCount?playerCoor.col === cCount?<img src={playerImg} alt="Player" style={{maxHeight:"100%", filter:`drop-shadow(5px 5px 0px rgba(0,0,0,0.33))`}}/>:null:null}{goalCoor.row===rCount?goalCoor.col===cCount?<img src={goalImg} style={{maxWidth:"100%"}}/>:null:null}</div>)
                        }
                    })
                })}
            </div>
            <div id="game-window-buttons">
                    <table id="mobile-controls">
                        <tbody>
                        <tr>
                            <td></td>
                            <td><button name="up" onClick={(e)=>handleControlBtn(e)}>UP</button></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><button name="left" onClick={(e)=>handleControlBtn(e)}>LEFT</button></td>
                            <td></td>
                            <td><button name="right" onClick={(e)=>handleControlBtn(e)}>RIGHT</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button name="down" onClick={(e)=>handleControlBtn(e)}>DOWN</button></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                <button onClick={() => handleBackBtn()}>Quit</button>
            </div>

        </div>
    );
}

export default MazeMainComponent;