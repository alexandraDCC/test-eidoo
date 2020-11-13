import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import BreedItem from "./BreedItem";
import styles from './breedBlock.module.scss'
import { getBreeds } from "../../../store/data/actions";
import { connect } from 'react-redux';
import { getSearchedBreeds } from "../../../store/data/selectors";

const BreedBlock = ({
	setBreeds,
	breeds,
}) => {
	useEffect(() => {
		setBreeds()
	}, [setBreeds]);
	const breedItems = breeds.map((breed) => {
		return(<BreedItem key={ breed } title={ breed }/>);
	});
	return(
		<div className={ styles.breedBlock }>
			{ breedItems.length ?
				breedItems :
				(<div className={ styles.empty }>Nothing found:(</div>)}
			<div className={ styles.phantomBlock } />
			<div className={ styles.phantomBlock } />
			<div className={ styles.phantomBlock } />
		</div>
);}

BreedBlock.propTypes = {
	setBreeds: PropTypes.func.isRequired,
	breeds: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
	breeds: getSearchedBreeds(state),
});
const mapDispatchToProps = (dispatch) => ({
	setBreeds: () => { dispatch(getBreeds()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedBlock);
