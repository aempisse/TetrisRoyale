import React from "react"
import { connect } from "react-redux"


const mapStateToProps = (state) => {
    return ({GameList: state.ListGame});
}

const  ListGame = (props) => {
    if (props.gameList.length === 0)
        return (<div>Aucune Partie trouvé</div>)
    let list = props.gameList.map((obj, index) => <div key={index}><ListObj index={index} data={obj} /></div>);
    return (<div>{list}</div>);
}

const GameList = ({GameList}) => {
    return (
        <div style={{border: 'solid red 1px', width: '300px', height: '500px'}}>
            <ListGame gameList={GameList}/>
        </div>
    );
}

export default connect(mapStateToProps)(GameList);