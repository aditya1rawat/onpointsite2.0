import React from 'react';
import { chakra, Box, Text } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box>
			<Box
				px={8}
				overflow='hidden'
				my={{ lg: '64', sm: '20' }}
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
						whiteSpace={{ base: 'normal', lg: 'nowrap' }}
						sx={{
							WebkitTextStroke: '5px white'
						}}
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
			<Box visibility={{ lg: 'visible', md: 'hidden', sm: 'hidden' }}>
				<Mouse />
			</Box>
		</Box>
	);
};

export const Mouse = () => {
	return (
		<Box
			pos='absolute'
			right='10'
			top={{ lg: '450', md: '1000' }}
			transition='0.3s ease-in-out'
			_hover={{
				cursor: 'pointer',
				transform: 'scale(1.1)',
				transition: '0.3s ease-in-out'
			}}
		>
			<svg
				width='41'
				height='60'
				viewBox='0 0 41 60'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect
					x='1'
					y='1'
					width='39'
					height='58'
					rx='19.5'
					stroke='white'
					strokeWidth='2'
				/>
				<line
					x1='21'
					y1='2'
					x2='21'
					y2='16'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
				/>
			</svg>
		</Box>
	);
};

export default Hero;
