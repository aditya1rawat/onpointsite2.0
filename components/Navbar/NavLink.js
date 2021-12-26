import { useEffect, useState } from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';

export default function NavLink({ name }) {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<Button
			// color={useColorModeValue('black', 'white')}
			color={useColorModeValue('black', 'white')}
			colorScheme={useColorModeValue('white', 'black')}
			_hover={{
				color: useColorModeValue(
					'rgba(0,0,0,0.5)',
					'rgba(255,255,255,0.5)'
				)
			}}
		>
			{name}
		</Button>
	);
}
