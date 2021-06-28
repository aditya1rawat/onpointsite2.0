import Head from 'next/head';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Logo from '../public/Logo.svg';

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
			<Navbar />
		</div>
	);
}
