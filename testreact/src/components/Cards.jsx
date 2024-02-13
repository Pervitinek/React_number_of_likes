import {useState} from "react";
import feather from "./feather.svg";
export function Cards(fav) {
const employees = [
    {
        name: "In-Flight Entertainment",
        txt: "Browse movies, TV shows, and music on your device",
        upVote: "↑ Up Vote",
        downVote: "↓ Down Vote",
        fav: "♡ Add to Favourite"
    }
]
const [numberOfLikes, setNumberOfLikes] = useState(0);

const handleClick = () => {
    setNumberOfLikes(numberOfLikes + 1)
}
const handleClickDown = () => {
    if(numberOfLikes >= 1){
        setNumberOfLikes(numberOfLikes - 1)
    }
}
    return (
        <>
            <div>Feet</div>
            {employees.map((obj, index) => {
                return (
                    <div key={index} className={"Card"}>
                        <div className={"hore"}>
                            <img src={feather} alt={"feather"}/>
                            <p>{obj.name}</p>
                        </div>
                        <p>{obj.txt}</p>
                        <div className={"Btns"}>
                            <button onClick={handleClick}>{obj.upVote}</button>
                            <button onClick={handleClickDown}>{obj.downVote}</button>
                            <button onClick={handleClick}>{obj.fav}</button>
                            <div onClick={fav}>{numberOfLikes}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}