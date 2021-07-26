import { Button, useColorModeValue } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default function NavLink({ name }) {
	return (
		<Button
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
