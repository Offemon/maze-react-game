import { useContext, useEffect, useState } from "react";
import { mazedata } from "./MazeLevelData";
import { GameWindowContext } from "./GameWindow";

const MazeMainComponent = () => {
    const [gaming, gamewindow] = useContext(GameWindowContext);

    const [level, setLevel] = useState(1)
    const [mazeGrid,setMazeGrid] = useState(mazedata[level-1].mazegrid)
    const [playerCoor, setPlayerCoor] = useState(mazedata[level-1].start)
    const [goalCoor, setGoalCoor] = useState(mazedata[level-1].end)

    const mazeDimensionStyle = {
        gridTemplateColumns: `repeat(${mazedata[level-1].mazegrid[0].length}, 0fr)`
    }
    const tileDimensionStyle = {
        width: `${480/mazeGrid[0].length}px`,
        height: `${480/mazeGrid[0].length}px`
    }
    useEffect(()=>{
        goalCheck();
        window.addEventListener('keydown', handleArrowKeys);
        return ()=>{
            window.removeEventListener('keydown', handleArrowKeys)
        }
    },[playerCoor])

    const handleBackBtn = () => {
        gamewindow("menu");
    }

    const goalCheck = () => {
        if(playerCoor.row === goalCoor.row && playerCoor.col === goalCoor.col && level < 3){
            setLevel(currentLevel => currentLevel+1);
            setMazeGrid(mazedata[level].mazegrid);
            setPlayerCoor(mazedata[level].start);
            setGoalCoor(mazedata[level].end);
        }
    }

    const handleArrowKeys = (e) => {
        switch(e.key){
            case 'ArrowUp':
                if(mazeGrid[playerCoor.row-1][playerCoor.col]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        row: playerCoor.row-1
                    })
                }
                break;

            case 'ArrowDown':
                if(mazeGrid[playerCoor.row+1][playerCoor.col]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        row: playerCoor.row+1
                    })
                }
                break;

            case 'ArrowLeft':
                if(mazeGrid[playerCoor.row][playerCoor.col-1]===0){
                    setPlayerCoor({
                        ...playerCoor,
                        col: playerCoor.col-1
                    })
                }
                break;

            case 'ArrowRight':
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
                            return (<div key={[rCount,cCount]} className="maze-wall maze-tile" style={tileDimensionStyle}></div>)
                        }
                        else{
                            return (<div key={[rCount,cCount]} className="maze-path maze-tile" style={tileDimensionStyle}>{playerCoor.row === rCount?playerCoor.col === cCount?"player":null:null}{goalCoor.row===rCount?goalCoor.col===cCount?<p style={{position:"absolute"}}>Goal</p>:null:null}</div>)
                        }
                    })
                })}
            </div>
            <button onClick={() => handleBackBtn()}>Back to Menu</button>
        </div>
    );
}

export default MazeMainComponent;