import {
	Box,
	chakra,
	HStack,
	useColorModeValue,
	Text,
	Flex,
	Icon,
	Button
} from '@chakra-ui/react';
import Pfp from '../../public/pfp.png';
import Image from 'next/image';
import { CalendarIcon, AtSignIcon } from '@chakra-ui/icons';

export default function TrendingArticles() {
	return (
		<Box
			bg={useColorModeValue('white', 'black')}
			alignItems='center'
			display='block'
			mx='auto'
			width='100%'
		>
			<Box fontSize='40px' fontWeight='700' mt='35px' ml='16'>
				<HStack spacing='5'>
					<chakra.h1>Trending Articles</chakra.h1>
					<FireIcon />
				</HStack>
			</Box>
			<Box ml='16' mt='35px' overflow='hidden'>
				<HStack spacing='10'>
					<Article />
					<Article />
					<Article />
				</HStack>
			</Box>
		</Box>
	);
}

const FireIcon = () => {
	return (
		<Box>
			<svg
				width='34'
				height='43'
				viewBox='0 0 34 43'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M14.9385 21.2726C16.0725 19.6811 15.9459 18.0049 15.1596 14.9897C13.6045 9.02662 14.2237 5.75821 19.5847 1.88866L22.2013 0L22.8341 3.16433C23.5067 6.52724 24.6112 8.60719 27.4473 12.608C27.56 12.7669 27.56 12.7669 27.6731 12.9266C31.7583 18.69 33.2504 22.1643 33.2504 28.4736C33.2504 36.1277 25.5127 43 16.6488 43C7.78446 43 0.0472858 36.1286 0.0472858 28.4736C0.0472858 28.3306 0.0474324 28.3349 0.0231897 27.7026C-0.164316 22.8121 0.740005 18.9845 4.39911 14.8518C5.17222 13.9786 6.051 13.1394 7.03992 12.3363L9.223 10.5636L10.2731 13.1724C11.0491 15.1 11.9583 16.6153 12.9853 17.7273C13.8552 18.6691 14.5005 19.8534 14.9385 21.2726Z'
					fill={useColorModeValue('black', 'white')}
				/>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7.35579 17.2953C4.53899 20.4768 3.86931 23.3112 4.01978 27.2359C4.04779 27.9665 4.04692 27.9408 4.04692 28.1659C4.04692 33.4118 9.82344 38.5419 16.4981 38.5419C23.1722 38.5419 28.9493 33.4109 28.9493 28.1659C28.9493 22.8912 27.77 20.1453 24.1363 15.0189C24.0237 14.8601 24.0237 14.8601 23.9105 14.7005C21.7038 11.5874 20.3884 9.42189 19.5182 7C18.097 8.70302 18.1805 10.3968 19.0249 13.6347C20.58 19.5978 19.9608 22.8662 14.5998 26.7358L11.5431 28.9421L11.3139 25.1793C11.1675 22.7751 10.6233 21.1425 9.78565 20.2355C8.95801 19.3394 8.21074 18.2903 7.54062 17.0902C7.47811 17.1584 7.41651 17.2267 7.35579 17.2953Z'
					fill='url(#paint0_linear)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear'
						x1='16'
						y1='7'
						x2='16'
						y2='54'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#FF0000' />
						<stop offset='1' stop-color='#6284FF' />
					</linearGradient>
				</defs>
			</svg>
		</Box>
	);
};

// const ArrowIcon = () => {
// 	return (
// 		<Box ml='3'>
// 			<svg
// 				width='20'
// 				height='15'
// 				viewBox='0 0 20 15'
// 				fill='none'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					d='M13.4886 0L11.8683 1.80873L15.6238 5.96201L0 5.97948L0.00231143 8.53144L15.5833 8.51402L11.8911 12.6357L13.5189 14.436L20 7.20114L13.4886 0Z'
// 					fill={useColorModeValue('white', 'black')}
// 				/>
// 			</svg>
// 		</Box>
// 	);
// };

const Article = () => {
	return (
		<Box position='relative' width='500px' height='300px'>
			<Box
				border={useColorModeValue('3px solid black', '3px solid white')}
				borderRadius='15px'
				background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://storage.googleapis.com/u.filein.io/AYE9g8e4T3.jpeg')"
				backgroundAttachment='fixed'
				backgroundSize='cover'
				inset='0'
				position='absolute'
			/>
			<Box
				border={useColorModeValue('3px solid black', '3px solid white')}
				borderRadius='15px'
				bg={useColorModeValue('white', 'black')}
				p='3'
				position='absolute'
				bottom='0'
				left='0'
				right='0'
			>
				<HStack spacing='14'>
					<Box>
						<chakra.h1 fontWeight='700' fontSize='25px'>
							This is a Title
						</chakra.h1>
						<HStack spacing='7' color='#878787'>
							<Flex display='inline'>
								<AtSignIcon />
								<Text
									fontSize='15px'
									my='1'
									fontWeight='600'
									pt='1'
									display='inline'
									ml='2'
								>
									Aditya Rawat
								</Text>
							</Flex>
							<Flex display='inline'>
								<CalendarIcon />
								<Text
									fontSize='15px'
									my='1'
									fontWeight='600'
									pt='1'
									display='inline'
									ml='2'
								>
									June 27, 2021
								</Text>
							</Flex>
						</HStack>
					</Box>
					<Box>
						<Button
							borderRadius='15px'
							width='135px'
							height='52px'
							borderWidth='3px'
							borderColor={useColorModeValue('white', 'black')}
							bg={useColorModeValue('black', 'white')}
							color={useColorModeValue('white', 'black')}
							_hover={{
								bg: useColorModeValue('white', 'black'),
								color: useColorModeValue('black', 'white'),
								borderColor: useColorModeValue('black', 'white')
							}}
						>
							Read
							{/*  <ArrowIcon /> */}
						</Button>
					</Box>
				</HStack>
			</Box>
		</Box>
	);
};
