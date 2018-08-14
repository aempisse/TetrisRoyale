import React from "react"
import { connect } from "react-redux";


const mapStateToProps = (state, id) => {
	var color;
	var img

	if (state.CaseState[id.lgn][id.col] == 0){
		color = 'white';
		img = 'none';
	}
	else if (state.CaseState[id.lgn][id.col] == 1){
		color = 'blue';
		img = 'none'
	}
	else{
		color = 'gray';
		img = 'none'
	}
	return ({ actualState: state.CaseState[id.lgn][id.col],
			  caseColor: color,
			  caseImg: img});
};

const GameCase = ({caseColor, caseImg}) => {
	return (
		<div>
			<div className="col-sm-1" style={{height: '30px', width: '30px' , backgroundColor: caseColor, backgroundImage: caseImg, border: 'solid 1px'}}></div>
		</div>
	)
}

export default connect(mapStateToProps)(GameCase);