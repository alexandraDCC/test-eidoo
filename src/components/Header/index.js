import React from 'react';
import styles from './header.module.scss'
import Title from '../shared/Title';
import Search from '../Search';

const Header = () => (
	<header className={styles.header}>
		<Title text='dogs by breeds' />
		<Search />
	</header>
);

export default Header;
