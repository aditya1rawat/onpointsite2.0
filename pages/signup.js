import {
	Box,
	Flex,
	Stack,
	Heading,
	Text,
	Container,
	Input,
	Button,
	SimpleGrid,
	Avatar,
	AvatarGroup,
	useBreakpointValue,
	Icon,
	useColorModeValue
} from '@chakra-ui/react';
import Footer from '../components/Landing/Footer';
import Navbar from '../components/Landing/Navbar/Navbar';

export default function SignUp() {
	return (
		<Box
			position={'relative'}
			overflow='hidden'
			bg={useColorModeValue('white', 'black')}
		>
			<Navbar />
			<Container
				as={SimpleGrid}
				maxW={'7xl'}
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 10, lg: 32 }}
				pt={{ base: 32, sm: 32, lg: 52 }}
				pb={{ base: 10, sm: 10, lg: '28' }}
			>
				<Stack spacing={{ base: 10, md: 20 }}>
					<Heading
						lineHeight={1.25}
						fontSize={{
							base: '3xl',
							sm: '4xl',
							md: '5xl',
							lg: '95px'
						}}
						color={useColorModeValue('black', 'white')}
						zIndex='1'
					>
						Write Articles{' '}
						<Text
							as={'span'}
							bgGradient='linear(to-r, red.400,pink.400)'
							bgClip='text'
						>
							&
						</Text>{' '}
						Earn Hours
					</Heading>
				</Stack>
				<Stack
					zIndex='1'
					bg={'gray.50'}
					rounded={'xl'}
					p={{ base: 4, sm: 6, md: 8 }}
					spacing={{ base: 8 }}
					maxW={{ lg: 'lg' }}
				>
					<Stack spacing={4}>
						<Heading
							color='black'
							lineHeight={1.1}
							fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
						>
							Get Started At Onpoint!
						</Heading>
						<Text
							color={'gray.500'}
							fontSize={{ base: 'sm', sm: 'md' }}
						>
							We’re looking for amazing writers just like you!
							Write about the things you want to write about and
							earn volunteer hours on the side!
						</Text>
					</Stack>
					<Box as={'form'} mt={10}>
						<Stack spacing={4}>
							<Input
								placeholder='Full Name'
								bg={'gray.100'}
								border={0}
								color={'black'}
								_placeholder={{
									color: 'gray.500'
								}}
							/>
							<Input
								placeholder='Email (ie. johndoe@gmail.com)'
								bg={'gray.100'}
								border={0}
								color={'black'}
								_placeholder={{
									color: 'gray.500'
								}}
							/>
							<Input
								placeholder='Password'
								bg={'gray.100'}
								border={0}
								color={'black'}
								_placeholder={{
									color: 'gray.500'
								}}
							/>
						</Stack>
						<Button
							fontFamily={'heading'}
							mt='14'
							w={'full'}
							bgGradient='linear(to-r, red.400,pink.400)'
							color={'white'}
							_hover={{
								bgGradient: 'linear(to-r, red.400,pink.400)',
								boxShadow: 'xl'
							}}
						>
							Submit
						</Button>
					</Box>
					form
				</Stack>
			</Container>
			<Blur
				position={'absolute'}
				left={-10}
				top={-20}
				style={{ filter: 'blur(70px)' }}
				zIndex='0'
			/>
			<Blur
				position={'absolute'}
				right={-100}
				bottom={-200}
				style={{ filter: 'blur(70px)' }}
				zIndex='1'
			/>
			{/* <Box zIndex='0' position='relative'> */}
			<Footer />
			{/* </Box> */}
		</Box>
	);
}

export const Blur = IconProps => {
	return (
		<Icon
			width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
			zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
			height='560px'
			viewBox='0 0 528 560'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...IconProps}
		>
			<svg
				width='741'
				height='1060'
				viewBox='0 0 741 1060'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='211'
					cy='530'
					r='511.646'
					transform='rotate(-177.906 211 530)'
					fill='url(#paint0_linear)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear'
						x1='479.852'
						y1='144.521'
						x2='-113.574'
						y2='922.337'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#5465FF' />
						<stop offset='1' stopColor='#09E85E' />
					</linearGradient>
				</defs>
			</svg>
		</Icon>
	);
};
