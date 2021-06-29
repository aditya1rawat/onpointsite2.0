import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box
			px={8}
			overflow='hidden'
			pt='36'
			pb='60'
			mx='auto'
			sx={{ height: '100%' }}
		>
			<Box w='full' mx='auto' textAlign={{ base: 'left', md: 'center' }}>
				<chakra.h1
					fontSize='275px'
					fontStyle='normal'
					lineHeight='305px'
					fontWeight='extrabold'
					color='black'
					display={{ base: 'block', lg: 'inline' }}
					w='full'
					bgClip='text'
					bgGradient='linear(to-r, green.400,purple.500)'
				>
					ONPOINT
				</chakra.h1>
			</Box>
		</Box>
	);
};

export default Hero;
