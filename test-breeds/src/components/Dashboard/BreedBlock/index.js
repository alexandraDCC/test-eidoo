import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import BreedItem from "./BreedItem";
import styles from './breedBlock.module.scss'
import {getBreeds, getSearchResults} from "../../../store/data/actions";
import { connect } from 'react-redux';
import {getBreed, getSearchedBreeds} from "../../../store/data/selectors";

const BreedBlock = ({
	setImageDisplay,
	setBreeds,
	breeds,
}) => {
	useEffect(() => {
		setBreeds()
	}, []);
	const breedItems = breeds.map((breed) => {
		return(<BreedItem title={breed}/>)
	});
	return(
		<div className={styles.breedBlock}>
			{breedItems.length !== 0 ?
				breedItems :
				(<div className={styles.empty}>Nothing found:(</div>)}
			<div className={styles.phantomBlock} />
			<div className={styles.phantomBlock} />
			<div className={styles.phantomBlock} />
		</div>
);}

BreedBlock.propTypes = {
	setImageDisplay: PropTypes.func.isRequired,
	setBreeds: PropTypes.func.isRequired,
	breeds: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	breeds: getSearchedBreeds(state),
});
const mapDispatchToProps = (dispatch) => ({
	setBreeds: () => { dispatch(getBreeds()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedBlock);
