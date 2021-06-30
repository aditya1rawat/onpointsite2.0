import React from 'react';
import { chakra, Box, Text } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box
			px={8}
			overflow='hidden'
			pt='60'
			pb='60'
			mx='auto'
			sx={{ height: '100%' }}
		>
			<Box w='full' mx='auto' textAlign='center'>
				<chakra.h1
					fontSize='275px'
					fontStyle='normal'
					lineHeight='305px'
					fontWeight='extrabold'
					color='black'
					display='inline'
					w='full'
					bgClip='text'
					bgGradient='linear(to-r, green.400,purple.500)'
				>
					<Text
						display='inline'
						_hover={{
							color: 'white'
						}}
					>
						O
					</Text>
					<Text
						display='inline'
						_hover={{
							color: 'white'
						}}
					>
						N
					</Text>
					<Text
						display='inline'
						_hover={{
							color: 'white'
						}}
					>
						P
					</Text>
					<Text
						display='inline'
						_hover={{
							color: 'white'
						}}
					>
						O
					</Text>
					<Text
						display='inline'
						_hover={{
							color: 'white'
						}}
					>
						I
					</Text>
					<Text
						display='inline'
						_hover={{
							color: 'white'
						}}
					>
						N
					</Text>
					<Text
						display='inline'
						_hover={{
							color: 'white'
						}}
					>
						T
					</Text>
				</chakra.h1>
			</Box>
		</Box>
	);
};

export default Hero;
