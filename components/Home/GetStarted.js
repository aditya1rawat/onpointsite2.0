import React from 'react';
import { Box, chakra } from '@chakra-ui/react';

const GetStarted = () => {
	return (
		<Box display={{ lg: 'unset', md: 'unset', sm: 'none' }}>
			<Blur top={0} left={-500} />
			<Blur top={-700} right={-500} />
			<GetStarted1 />
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
export const GetStarted1 = () => {
	return (
		<Box
			pos='absolute'
			top={500}
			left='0'
			zIndex='2'
			borderRadius='500px'
			bgGradient='linear(to-r, red.400,pink.400)'
			p='52'
			width='533.86px'
			height='533.86px'
		>
			<chakra.h1 fontSize='150px' fontWeight='extrabold'>
				1
			</chakra.h1>
		</Box>
	);
};

export default GetStarted;
