import {
	chakra,
	Box,
	Stack,
	Text,
	Flex,
	Tooltip,
	Button,
	useColorModeValue
} from '@chakra-ui/react';
import PhoneMockup from '../../../public/phonemockup.png';
import Image from 'next/image';

export default function Categories() {
	return (
		<Box>
			<Flex width='100%' mt='24'>
				<Stack
					direction='row'
					spacing='52'
					justifyContent='center'
					mx='auto'
				>
					<Box width='500px' height='500px' borderRadius='50px'>
						<Image src={PhoneMockup} width='500px' height='500px' />
					</Box>
					<Box width='500px' height='500px'>
						<chakra.h1
							fontSize='40px'
							fontWeight='700'
							mb='10'
							mt='75px'
						>
							Talented Writers
						</chakra.h1>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Condimentum diam orci pretium a pharetra,
							feugiat cursus. Dictumst risus, sem egestas odio
							cras adipiscing vulputate. Nisi, risus in suscipit
							non. Non commodo volutpat, pharetra, vel.
						</Text>
						<Button
							mx='auto'
							mt='10'
							border={useColorModeValue(
								'5px solid black',
								'5px solid white'
							)}
							boxSizing='border-box'
							borderRadius='10px'
							background={useColorModeValue('white', 'black')}
							fontSize='20px'
							px='5'
							py='6'
							fontWeight='bold'
							color={useColorModeValue('black', 'white')}
							variant='solid'
						>
							Get Started <GetStartedArrowIcon />
						</Button>
					</Box>
				</Stack>
			</Flex>

			{/* <Flex>
				<Stack
					mx='auto'
					direction={{
						sm: 'column',
						md: 'column',
						lg: 'row',
						xl: 'row',
						base: 'column'
					}}
					spacing='50px'
					mt='25px'
				>
					<Box
						pos='relative'
						onClick={() => {
							alert(document.body.clientWidth);
						}}
						width={{
							sm: '300px',
							md: '300px',
							lg: '310px',
							xl: '500px',
							base: '300px'
						}}
						height={{
							sm: '400px',
							md: '400px',
							lg: '400px',
							xl: '525px',
							base: '400px'
						}}
						borderRadius='25px'
						border={useColorModeValue(
							'1px black solid',
							'1px white solid'
						)}
						px='5'
						py='3'
					>
						<chakra.h1 fontSize='80px' fontWeight='700' mx='auto'>
							Diverse Categories
						</chakra.h1>
						<Organizing />
					</Box>
					<SimpleGrid columns='2' spacing='25px'>
						<Categories />
						<Categories />
						<Categories />
						<Categories />
					</SimpleGrid>
				</Stack>
			</Flex>
			<Flex>
				<Stack
					mx='auto'
					direction={{
						sm: 'column',
						md: 'column',
						lg: 'column',
						xl: 'row',
						base: 'column'
					}}
					spacing='25px'
					mt='25px'
				>
					<Writers />
					<Writers />
					<Writers />

					<Box
						pos='relative'
						width={{
							sm: '300px',
							md: '300px',
							lg: '300px',
							xl: '425px',
							base: '300px'
						}}
						height={{
							sm: '400px',
							md: '400px',
							lg: '400px',
							xl: '300px',
							base: '400px'
						}}
						borderRadius='25px'
						border={useColorModeValue(
							'1px black solid',
							'1px white solid'
						)}
						px='5'
						py='3'
					>
						<chakra.h1 fontSize='40px' fontWeight='700'>
							Talented Writers
						</chakra.h1>
						<Typing />
					</Box>
				</Stack>
			</Flex> */}
		</Box>
	);
}

const GetStartedArrowIcon = () => {
	return (
		<Box ml='2'>
			<svg
				width='20'
				height='15'
				viewBox='0 0 20 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M13.4886 0L11.8683 1.80873L15.6238 5.96201L0 5.97948L0.00231143 8.53145L15.5833 8.51402L11.8911 12.6357L13.5189 14.436L20 7.20114L13.4886 0Z'
					fill={useColorModeValue('black', 'white')}
				/>
			</svg>
		</Box>
	);
};
