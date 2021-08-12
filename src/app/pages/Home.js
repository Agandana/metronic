import React from "react";
import { connect } from "react-redux";
import * as auth from "../modules/Auth/_redux/authRedux";

function Home(props) {
  console.log('Props : ', props)

  return (<>My Page</>);
};

export default connect(null, auth.actions)(Home);