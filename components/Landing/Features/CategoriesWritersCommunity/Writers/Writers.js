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
import PhoneMockup from '../../../../../public/phonemockup.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
	return (
		<Box color={'white'}>
			<Flex
				width='100%'
				py={{
					sm: '10',
					md: '10',
					lg: '16',
					xl: '16',
					base: '10'
				}}
			>
				<Stack
					direction={{
						sm: 'column-reverse',
						md: 'column-reverse',
						lg: 'row',
						xl: 'row',
						base: 'column-reverse'
					}}
					spacing={{
						sm: '20',
						md: '24',
						lg: '32',
						xl: '52',
						base: '20'
					}}
					justifyContent='center'
					mx='auto'
				>
					<Box
						width={{
							sm: '300px',
							md: '450px',
							lg: '400px',
							xl: '500px',
							base: '300px'
						}}
						height={{
							sm: '300px',
							md: '450px',
							lg: '400px',
							xl: '500px',
							base: '300px'
						}}
						borderRadius='50px'
					>
						<Image src={PhoneMockup} width='500px' height='500px' />
					</Box>
					<Box
						width={{
							sm: '300px',
							md: '450px',
							lg: '400px',
							xl: '500px',
							base: '300px'
						}}
						textAlign={{
							sm: 'center',
							md: 'center',
							lg: 'unset',
							xl: 'unset',
							base: 'center'
						}}
					>
						<Stack
							direction={'row'}
							whiteSpace={'nowrap'}
							mt={{
								sm: '25px',
								md: '20px',
								lg: '15px',
								xl: '75px',
								base: '32'
							}}
							mb={{
								sm: '15px',
								md: '20px',
								lg: '50px',
								xl: '10',
								base: '15px'
							}}
						>
							<Box
								bg={'#253237'}
								px='15px'
								mr='15px'
								borderRadius={'10px'}
							>
								<chakra.h1
									fontSize={{
										sm: '40px',
										md: '40px',
										lg: '40px',
										xl: '50px',
										base: '40px'
									}}
								>
									✍🏽
								</chakra.h1>
							</Box>
							<chakra.h1
								fontSize={{
									sm: '40px',
									md: '40px',
									lg: '45px',
									xl: '45px',
									base: '40px'
								}}
								fontWeight='700'
								mb={{
									sm: '15px',
									md: '20px',
									lg: '50px',
									xl: '10',
									base: '15px'
								}}
							>
								Talented Writers
							</chakra.h1>
						</Stack>

						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Condimentum diam orci pretium a pharetra,
							feugiat cursus. Dictumst risus, sem egestas odio
							cras adipiscing vulputate. Nisi, risus in suscipit
							non. Non commodo volutpat, pharetra, vel.
						</Text>
						<Link href='/signup' passHref>
							<Button
								mx='auto'
								mt='10'
								border={'5px solid black'}
								boxSizing='border-box'
								fontSize='20px'
								px='5'
								py='6'
								fontWeight='bold'
								variant='solid'
								borderRadius='7px'
								className='signUpButton'
								bg={'white'}
								color={'black'}
								position='relative'
								sx={{
									'.signUpButton:before': {
										transition: 'transform 0.6s'
									}
								}}
								_hover={{
									transformOrigin: '0 0',
									transform: 'scaleX(1)',
									background: 'black',
									color: 'white'
								}}
							>
								Start Writing Now
							</Button>
						</Link>
					</Box>
				</Stack>
			</Flex>
		</Box>
	);
}
