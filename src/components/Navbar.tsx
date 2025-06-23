import React from 'react';
import { Logo } from './logo/Logo';
import ThemeSwitcher from './themeSwitcher/ThemeSwitcher';

const Navbar = () => {
	return (
		<div className="flex items-center justify-between pt-4">
			<Logo></Logo>
            <ThemeSwitcher></ThemeSwitcher>
		</div>
	);
};

export default Navbar;
