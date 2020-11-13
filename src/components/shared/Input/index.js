import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getInputValue} from "../../../store/data/selectors";
import {searchProcess, setInputValue} from "../../../store/data/actions";
import styles from './input.module.scss'

const Input = ({
	inputValue,
	setValue,
               }) => {
	return(
			<input
				className={styles.input}
				type="string"
				onChange={setValue}
				value={inputValue} />
	);}

Input.propTypes = {
	setImageDisplay: PropTypes.func.isRequired,
	setBreeds: PropTypes.func.isRequired,
	breeds: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	inputValue: getInputValue(state),
});
const mapDispatchToProps = (dispatch) => ({
	setValue: (value) => { dispatch(searchProcess(value)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
