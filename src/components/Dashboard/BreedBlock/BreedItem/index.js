import React from "react";
import styles from './breedItem.module.scss'
import PropTypes from "prop-types";
import {getBreed} from "../../../../store/data/selectors";
import {getBreeds, setBreedImage, setImageDisplayStatus} from "../../../../store/data/actions";
import {connect} from "react-redux";

const BreedItem = ({
	title,
	setBreedImageUrl,
	showImage,
}) => (
	<div
		className={styles.breedItem}
		onClick={()=>{
				setBreedImageUrl(title);
				showImage()
			}
		}>
		{title.replace('/', ' ')}
	</div>
);

BreedItem.propTypes = {
	setImageDisplay: PropTypes.func.isRequired,
	setBreeds: PropTypes.func.isRequired,
	breeds: PropTypes.object.isRequired,
	showImage: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
	setBreedImageUrl: (title) => { dispatch(setBreedImage(title)); },
	showImage: () => { dispatch(setImageDisplayStatus(true)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedItem);

