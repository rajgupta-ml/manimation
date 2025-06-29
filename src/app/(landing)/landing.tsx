import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react';

const Landing = () => {
	return (
		<>
			<Container>
				<div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
					<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
				</div>
				<div className="flex flex-col h-dvh ">
					<Navbar></Navbar>
					<Hero></Hero>
				</div>
			</Container>
		</>
	);
};

export default Landing;
