import React from 'react';
import {
	Box,
	SimpleGrid,
	chakra,
	Stack,
	Text,
	Heading,
	Image,
	Flex,
	StackDivider
} from '@chakra-ui/react';
import ExtraFeature from './ExtraFeature';

const Features = () => {
	return (
		<Box>
			<Box
				width='100%'
				display='block'
				mx='auto'
				justifyContent='center'
				mt='10'
			>
				<chakra.h1 fontSize='90px' fontWeight='semibold' pl='10'>
					Why We're So Epic
				</chakra.h1>
				<SimpleGrid columns={[1, 1, 3]} mt='14'>
					<FeatureBox />
					<FeatureBox />
					<FeatureBox />
				</SimpleGrid>
			</Box>
			<Box>
				<ExtraFeature />
			</Box>
		</Box>
	);
};

export const FeatureBox = ({ illustration, title, description }) => {
	return (
		<Box
			width='100%'
			display='block'
			mx='auto'
			justifyContent='center'
			zIndex='2'
			borderRadius='10px'
			bgGradient='linear(to-r, #FC466B,#5465FF)'
			width='475px'
			height='400px'
			mb='5'
			transition='all 0.2s ease-in-out'
			_hover={{
				transform: 'scale(1.02)'
			}}
		>
			<chakra.h1
				pt='5'
				fontSize='100px'
				textAlign='center'
				fontWeight='extrabold'
			>
				{title}
			</chakra.h1>
			{illustration}
			<chakra.h1
				mt='5'
				fontSize='50px'
				textAlign='center'
				fontWeight='extrabold'
			>
				{description}
			</chakra.h1>
		</Box>
	);
};

export default Features;
