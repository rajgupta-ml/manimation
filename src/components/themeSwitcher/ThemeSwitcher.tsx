"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeChange = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	if (!mounted) return null; 

	return (
		<div className="flex hover:bg-accent p-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer">
			{theme === 'light' ? (
				<Moon handleThemeChange={handleThemeChange} />
			) : (
				<Sun handleThemeChange={handleThemeChange} />
			)}
		</div>
	);
};

export default ThemeSwitcher;

const Sun = ({handleThemeChange} : {handleThemeChange : () => void}) => {
	return (
		<svg
            onClick={handleThemeChange}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-moon h-4 w-4 text-neutral-500 dark:text-neutral-500"
		>
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
		</svg>
	);
};

const Moon = ({handleThemeChange} : {handleThemeChange : () => void}) => {
	return (
		<svg
            onClick={handleThemeChange}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-sun h-4 w-4 text-neutral-500 dark:text-neutral-500"
		>
			<circle cx="12" cy="12" r="4"></circle>
			<path d="M12 2v2"></path>
			<path d="M12 20v2"></path>
			<path d="m4.93 4.93 1.41 1.41"></path>
			<path d="m17.66 17.66 1.41 1.41"></path>
			<path d="M2 12h2"></path>
			<path d="M20 12h2"></path>
			<path d="m6.34 17.66-1.41 1.41"></path>
			<path d="m19.07 4.93-1.41 1.41"></path>
		</svg>
	);
};
