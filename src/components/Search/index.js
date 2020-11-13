import React from "react";
import PropTypes from 'prop-types';
import Input from "../shared/Input";
import styles from './search.module.scss'
import search from '../../assets/icons/magnifiying-glass.svg'
import exit from '../../assets/icons/letter-x.svg'
import { clearSearch, getSearchResults } from "../../store/data/actions";
import { connect } from "react-redux";

const Search = ({
	onchange,
	clear
}) => {
	return(
		<div className={styles.search}>
			<Input onchange={onchange}/>
			<div className={styles.buttonExit} onClick={clear}>
				<img alt={'Search'} src={exit}/>
			</div>
			<div className={styles.buttonSearch}>
				<img alt={'Search'} src={search}/>
			</div>
		</div>
	);
};

Search.propTypes = {
	onchange: PropTypes.func.isRequired,
	clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	onchange: () => { dispatch(getSearchResults()); },
	clear: () => { dispatch(clearSearch()); },
});

export default connect(null, mapDispatchToProps)(Search);
