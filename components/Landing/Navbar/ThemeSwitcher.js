import React from 'react';
import {
	IconButton,
	useColorMode,
	Box,
	useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box>
			<IconButton
				ml='2'
				mr='10'
				size='lg'
				aria-label={`Switch to ${
					colorMode === 'light' ? 'dark' : 'light'
				} mode`}
				variant='outline'
				borderWidth='3px'
				borderColor={useColorModeValue('black', 'white')}
				fontSize='25px'
				onClick={toggleColorMode}
				icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				_focus={{
					outline: 'none'
				}}
			/>
		</Box>
	);
};

export default ThemeButton;
