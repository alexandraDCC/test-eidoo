import React, { Component } from "react";
// import styles from './app.module.scss';
// import Userpage from "../../pages/Userpage";
import { Provider } from 'react-redux';
import MainPage from "../../pages/MainPage";
class App extends Component {
	render() {
		return (<MainPage/>);
	}
}
export default App;
