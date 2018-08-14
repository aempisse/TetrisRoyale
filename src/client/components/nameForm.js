import React from 'react'
import { connect } from "react-redux";

import store from "../store/index.js";
import {register} from "../socketClient.js";
import { updateInputUserName } from "../actions/nameForm.js";

const mapStateToProps = (state) => {
  return ({inputNameState: state.inputUserName});
};

const handleChange = (event) => {
  store.dispatch(updateInputUserName(event.target.value));
}

const handleSubmit = (event) => {
    event.preventDefault();
    register(store.getState().inputUserName);
}

const NameForm = ({inputNameState}) => {
  return (
    <form style={{margin: '10% 0px 0px 40%'}} onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="" value={inputNameState} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
    </form>
  )
}

export default connect(mapStateToProps)(NameForm);