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
				variant='ghost'
				borderWidth='3px'
				borderColor={useColorModeValue('black', 'white')}
				bg={useColorModeValue('white', 'black')}
				fontSize='25px'
				onClick={toggleColorMode}
				_hover={{
					backgroundColor: `${useColorModeValue('white', 'black')}`
				}}
				icon={
					colorMode === 'light' ? (
						<MoonIcon color='black' />
					) : (
						<SunIcon color='white' />
					)
				}
				_focus={{
					outline: 'none'
				}}
			/>
		</Box>
	);
};

export default ThemeButton;
