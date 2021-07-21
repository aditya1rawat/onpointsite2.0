import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Features from '../components/Landing/Features';
import GetStarted from '../components/Landing/GetStarted';

import Hero from '../components/Landing/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>OnPoint</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/Logo.svg' />
			</Head>
			<Box width='100%'>
				<Navbar />
				<Hero />
				<GetStarted />
				<Features />
			</Box>
		</div>
	);
}
