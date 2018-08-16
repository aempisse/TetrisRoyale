import React from 'react';
import NameForm from '../components/nameForm.js';
import Home from "./Home.js";
import { connect } from "react-redux";
import InGame from './InGame.js';

const Page = (props) => {
	if (props.index.PageIndex == 0)
		return (<NameForm />);
	else if (props.index.PageIndex == 1)
		return (<Home />);
	else if (props.index.PageIndex == 2)
		return (<InGame />);
}

const mapStateToProps = (state) => {
	return ({PageIndex: state.pageIndex})
}

const App = (PageIndex) => (
	<div>
		<Page index={PageIndex}/>
	</div>
);

export default connect(mapStateToProps)(App);