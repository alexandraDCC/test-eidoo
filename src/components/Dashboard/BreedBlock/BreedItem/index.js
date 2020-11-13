import React from 'react';
import styles from './breedItem.module.scss'
import PropTypes from 'prop-types';
import {
	setBreedImage,
	setImageDisplayStatus,
} from '../../../../store/data/actions';
import { connect } from 'react-redux';
import textBreedFormatter from "../../../../helpers/textBreedFormatter";

const BreedItem = ({
	title,
	setBreedImageUrl,
	showImage,
}) => {
	const imageDisplayAction = () => {
		setBreedImageUrl(title);
		showImage()
	};
	return (
		<div
			className={ styles.breedItem }
			onClick={ ()=>{
					imageDisplayAction()
				}
			}>
			{textBreedFormatter(title)}
		</div>
)};

BreedItem.propTypes = {
	showImage: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
	setBreedImageUrl: (title) => { dispatch(setBreedImage(title)); },
	showImage: () => { dispatch(setImageDisplayStatus(true)); },
});

export default connect(null, mapDispatchToProps)(BreedItem);

