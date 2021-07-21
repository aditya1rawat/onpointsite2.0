import React from 'react';
import { chakra, Box, Text } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box w='full'>
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
			<Box
				visibility={{ lg: 'visible', md: 'hidden', sm: 'hidden' }}
				display={{ lg: 'unset', md: 'unset', sm: 'none' }}
			>
				<Mouse />

				<Blur top={0} left={-500} />
				<Blur top={-700} right={-500} />
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

export const Blur = BoxProps => {
	return (
		<Box
			pos='absolute'
			zIndex='-1'
			sx={{ filter: 'blur(100px)' }}
			{...BoxProps}
		>
			<svg
				width='1060'
				height='1060'
				viewBox='0 0 1060 1060'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='530'
					cy='530'
					r='500'
					transform='rotate(-135.906 530 530)'
					fill='url(#paint0_linear)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear'
						x1='798.852'
						y1='144.521'
						x2='205.426'
						y2='922.337'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#5465FF' />
						<stop offset='1' stop-color='#09E85E' />
					</linearGradient>
				</defs>
			</svg>
		</Box>
	);
};

export default Hero;
