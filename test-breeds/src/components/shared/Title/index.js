import React from "react";
import PropTypes from 'prop-types';
import styles from './title.module.scss';
import classnames from "classnames";

const Title = ({
 text,
 classes,
}) => {
	return (
		<h1 className={classnames(styles.title, classes)}>{text}</h1>
	)
};

Title.propTypes = {
	text: PropTypes.string.isRequired,
	classes: PropTypes.string,
};

Title.defaultProps = {
	classes: ''
};

export default Title;
