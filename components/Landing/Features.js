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
							right='-14'
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
								bg='#c4c4c4'
								width='315px'
								height='200px'
								borderRadius='25px'
							></Box>
						</HStack>
						<Box
							bg='#c4c4c4'
							width='657px'
							height='225px'
							borderRadius='25px'
						></Box>
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
		<Box textAlign='right'>
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
