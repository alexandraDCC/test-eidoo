import React, { useMemo } from 'react';
import styles from './imageBlock.module.scss'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
	getBreedImage,
	getImageDisplay,
} from '../../store/data/selectors';
import { setImageDisplayStatus } from '../../store/data/actions';
import { connect } from 'react-redux';
import cross from '../../assets/icons/letter-x.svg'

const ImageBlock = ({
	imageDisplay,
	imageUrl,
	hideImage,
}) => {
	const displayImageStyles = useMemo(() => {
		return !imageDisplay ? styles.imageHide : ''
	}, [imageDisplay]);
	const displayTextStyles = useMemo(() => {
		return imageDisplay ? styles.imageHide : styles.imageBlockText
	}, [imageDisplay]);
	return (
		<div className={ styles.imageBlock }>
			<img
				className={ styles.closeImage }
				src={ cross }
				onClick={ () => {hideImage()} }
				alt={'cross'}
			/>
			<div className={ displayTextStyles }>dog image</div>
			<img className={ classnames(styles.image, displayImageStyles) } src={ imageUrl } alt={'dog'}/>
		</div>
)};

ImageBlock.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	imageDisplay: PropTypes.bool.isRequired,
	hideImage: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	imageUrl: getBreedImage(state),
	imageDisplay: getImageDisplay(state)
});

const mapDispatchToProps = (dispatch) => ({
	hideImage: () => { dispatch(setImageDisplayStatus(false)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageBlock);
