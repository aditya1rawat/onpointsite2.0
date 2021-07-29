import {
	Box,
	Text,
	chakra,
	HStack,
	useColorModeValue,
	VStack
} from '@chakra-ui/react';
import WowMan from '../../public/wowman.png';
import Image from 'next/image';

export default function Features() {
	return (
		<Box
			bg={useColorModeValue('white', 'black')}
			alignItems='center'
			display='block'
			mx='auto'
			width='92%'
		>
			<VStack spacing='25px'>
				<HStack spacing='25px' mt='10'>
					<Box
						color='white'
						bg='#09E85E'
						width='725px'
						height='450px'
						borderRadius='25px'
						position='relative'
						px='7'
						py='5'
						overflow='hidden'
					>
						<chakra.h1 fontSize='70px' fontWeight='800'>
							What Makes Us Different?
						</chakra.h1>
						<Text
							fontSize='20px'
							fontWeight='500'
							width='350px'
							mt='10'
						>
							We have a whole assortment of features that make us
							stand out from the rest
						</Text>
						<Box
							position='absolute'
							bottom='-10'
							right='-10'
							transform='rotate(15deg)'
						>
							<Image src={WowMan} width='400px' height='400px' />
						</Box>
					</Box>
					<VStack spacing='25px'>
						<HStack spacing='25px'>
							<Box
								bg='#5465FF'
								width='315px'
								height='200px'
								borderRadius='25px'
								position='relative'
								px='5'
								py='4'
								overflow='hidden'
							>
								<chakra.h1 fontSize='30px' fontWeight='800'>
									Daily Articles
								</chakra.h1>
								<Text fontSize='16px' fontWeight='600'>
									Relevant. Concise. Accurate.
								</Text>
								<Text
									fontSize='20px'
									fontWeight='500'
									fontWeight='600'
								>
									Crafted for precision.
								</Text>
								<CalendarIcon />
							</Box>
							<Box
								bg='#669bbc'
								width='315px'
								height='200px'
								borderRadius='25px'
								position='relative'
								px='5'
								py='4'
								overflow='hidden'
							>
								<chakra.h1 fontSize='30px' fontWeight='800'>
									Analytic Articles
								</chakra.h1>
								<Text fontSize='16px' fontWeight='600'>
									Longer Articles. Deeper Analysis.
								</Text>
								<ChartIcon />
								<MagGlassIcon />
							</Box>
						</HStack>
						<Box
							bg='#e07a5f'
							width='657px'
							height='225px'
							borderRadius='25px'
							position='relative'
							px='5'
							py='4'
							overflow='hidden'
						>
							<HStack spacing='3'>
								<Box>
									<chakra.h1 fontSize='30px' fontWeight='800'>
										Weekly Videos
									</chakra.h1>
									<Text fontSize='16px' fontWeight='600'>
										Weekly videos provide a brief
										description of the events we covered
										during the week.
									</Text>
								</Box>
								<Box>
									<VideoIcon />
									<CameraIcon />
								</Box>
							</HStack>
						</Box>
					</VStack>
				</HStack>
				<HStack spacing='25px'>
					<Box
						bg='#c4c4c4'
						width='450px'
						height='450px'
						borderRadius='25px'
					></Box>
					<Box
						bg='#c4c4c4'
						width='450px'
						height='450px'
						borderRadius='25px'
					></Box>
					<Box
						bg='#c4c4c4'
						width='450px'
						height='450px'
						borderRadius='25px'
					></Box>
				</HStack>
			</VStack>
		</Box>
	);
}

const CalendarIcon = () => {
	return (
		<Box
			position='absolute'
			bottom='-5'
			right='0'
			transform='rotate(-15deg)'
		>
			<svg
				width='100'
				height='100'
				viewBox='0 0 200 200'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M60 40H40V30H20V60H180V30H160V40H140V30H60V40ZM180 80H20V180H180V80ZM140 10H60V0H40V10H20C8.9543 10 0 18.9543 0 30V180C0 191.046 8.9543 200 20 200H180C191.046 200 200 191.046 200 180V30C200 18.9543 191.046 10 180 10H160V0H140V10ZM50 120V100H70V120H50ZM90 120H110V100H90V120ZM130 120V100H150V120H130ZM50 140V160H70V140H50ZM110 160H90V140H110V160Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};
const ChartIcon = () => {
	return (
		<Box
			position='absolute'
			bottom='-4'
			left='-1'
			transform='rotate(18deg)'
		>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M100 10H95V60C95 65.5229 90.5229 70 85 70H55V77.169L77.5725 90.7125L72.4275 99.2875L55 88.8309V100H45V88.8309L27.5725 99.2875L22.4275 90.7125L45 77.169V70H15C9.47715 70 5 65.5229 5 60V10H0V0H100V10ZM15 10V60H85V10H15ZM30 50H40V30H30V50ZM55 50H45V20H55V50ZM60 50H70V35H60V50Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};
const MagGlassIcon = () => {
	return (
		<Box position='absolute' bottom='-3' right='-1'>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M40.5945 81.189C18.1748 81.189 0 63.0142 0 40.5945C0 18.1748 18.1748 0 40.5945 0C63.0142 0 81.189 18.1748 81.189 40.5945C81.189 49.9753 78.007 58.613 72.6636 65.4871L100 92.8239L92.8242 100L65.4874 72.6633C58.6133 78.0069 49.9755 81.189 40.5945 81.189ZM71.0404 40.5945C71.0404 57.4093 57.4093 71.0404 40.5945 71.0404C23.7797 71.0404 10.1486 57.4093 10.1486 40.5945C10.1486 23.7797 23.7797 10.1486 40.5945 10.1486C57.4093 10.1486 71.0404 23.7797 71.0404 40.5945Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};
const VideoIcon = () => {
	return (
		<Box position='absolute' bottom='5' right='10'>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM9.09091 50C9.09091 72.5935 27.4065 90.9091 50 90.9091C72.5935 90.9091 90.9091 72.5935 90.9091 50C90.9091 27.4065 72.5935 9.09091 50 9.09091C27.4065 9.09091 9.09091 27.4065 9.09091 50ZM31.8182 72.7273V27.2728C31.8182 23.7026 35.7452 21.5261 38.7727 23.4182L75.1364 46.1455C77.9848 47.9258 77.9848 52.0743 75.1364 53.8546L38.7727 76.5819C35.7452 78.474 31.8182 76.2975 31.8182 72.7273ZM40.9091 35.4739L64.1509 50.0001L40.9091 64.5262V35.4739Z'
					fill='black'
				/>
			</svg>
		</Box>
	);
};
const CameraIcon = () => {
	return (
		<Box position='absolute' bottom='5' right='52'>
			<svg
				width='158'
				height='100'
				viewBox='0 0 158 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M14.2857 0H100C107.89 0 114.286 6.39593 114.286 14.2857V24.1566L157.142 2.72828V97.2716L114.286 75.8433V85.7143C114.286 93.6041 107.89 100 100 100H14.2857C6.39593 100 0 93.6041 0 85.7143V14.2857C0 6.39593 6.39593 0 14.2857 0ZM114.286 59.8714L142.857 74.1568V25.843L114.286 40.1285V59.8714ZM14.2858 14.2857V85.7143H100V14.2857H14.2858Z'
					fill='black'
				/>
			</svg>
		</Box>
	);
};
