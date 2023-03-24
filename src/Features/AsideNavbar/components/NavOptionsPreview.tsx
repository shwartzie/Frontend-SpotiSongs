import React, { useState } from 'react';
import { NavOptionsName } from './NavOptionName';
import { Link, useNavigate } from 'react-router-dom';

//TODO FIX SVGS
type NavOptionsProps = {
	setActivePage: React.Dispatch<React.SetStateAction<string>>;
	option: string;
	activePage: string;
};
export const NavOptionsPreview = ({ option, setActivePage, activePage }: NavOptionsProps) => {
	const navigate = useNavigate();

	const handleActivePage = () => {
		navigate(option);
		setActivePage(option);
	};
	return (
		<li>
			<a onClick={() => handleActivePage()}>
				<div className={option}></div>
				<NavOptionsName option={option} activePage={activePage} />
			</a>
		</li>
	);
};
