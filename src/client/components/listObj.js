import React from "react"

const checkColor = (index) => {
    return index % 2 == 1 ? "rgba(255, 0, 0, 40%)" : "rgba(0, 255, 0, 40%)"; 
}

const ListObj = (props) => {
    return (
        <div style={{padding: "5px 0px 5px 20px", backgroundColor:checkColor(props.index),}}>
            <span style={{margin: "0px 0px 0px 5px"}}>Game ID : {props.data.id}</span>
            <span style={{margin: "0px 0px 0px 5px"}}>Players : {props.data.players.length} / 4</span>
            <button style={{margin: "0px 0px 0px 5px"}}>Join</button>
        </div>
    );
}

export default ListObj;