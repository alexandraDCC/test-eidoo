import React from "react";
import BreedBlock from "./BreedBlock";
import styles from './dashboard.module.scss'
import ImageBlock from "../ImageBlock";

const Dashboard = () => {
	return (
		<div className={styles.dashboard}>
			<BreedBlock />
			<ImageBlock />
		</div>
	);
};


export default Dashboard;
