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
	Icon
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const avatars = [
	{
		name: 'Ryan Florence',
		url: 'https://bit.ly/ryan-florence'
	},
	{
		name: 'Segun Adebayo',
		url: 'https://bit.ly/sage-adebayo'
	},
	{
		name: 'Kent Dodds',
		url: 'https://bit.ly/kent-c-dodds'
	},
	{
		name: 'Prosper Otemuyiwa',
		url: 'https://bit.ly/prosper-baba'
	},
	{
		name: 'Christian Nwamba',
		url: 'https://bit.ly/code-beast'
	}
];

export default function SignUp() {
	return (
		<Box position={'relative'}>
			<Navbar />
			<Container
				as={SimpleGrid}
				maxW={'7xl'}
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 10, lg: 32 }}
				pt={{ base: 32, sm: 32, lg: 52 }}
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
					{/* <Stack
						direction={'row'}
						spacing={{ base: 4, md: 1 }}
						align={'center'}
					>
						<AvatarGroup>
							{avatars.map(avatar => (
								<Avatar
									key={avatar.name}
									name={avatar.name}
									src={avatar.url}
									size={useBreakpointValue({
										base: 'md',
										md: 'lg'
									})}
									position={'relative'}
									zIndex={2}
									borderWidth='5px'
									borderColor='#5465FF'
									_before={{
										content: '""',
										width: 'full',
										height: 'full',
										rounded: 'full',
										transform: 'scale(1.125)',
										position: 'absolute',
										zIndex: -1,
										top: 0,
										left: 0
									}}
								/>
							))}
						</AvatarGroup>
						<Text
							fontFamily={'heading'}
							fontSize={{ base: '4xl', md: '6xl' }}
						>
							+
						</Text>
						<Flex
							align={'center'}
							justify={'center'}
							fontFamily={'heading'}
							fontSize={{ base: 'sm', md: 'lg' }}
							bg={'black'}
							color={'white'}
							rounded={'full'}
							width={useBreakpointValue({
								base: '44px',
								md: '30px',
								lg: '60px'
							})}
							height={useBreakpointValue({
								base: '44px',
								md: '30px',
								lg: '60px'
							})}
							position={'relative'}
							borderWidth='5px'
							borderColor='#09E85E'
							_before={{
								content: '""',
								width: 'full',
								height: 'full',
								rounded: 'full',
								transform: 'scale(1.125)',
								position: 'absolute',
								zIndex: -1,
								top: 0,
								left: 0
							}}
						>
							YOU
						</Flex>
					</Stack> */}
				</Stack>
				<Stack
					bg={'gray.50'}
					rounded={'xl'}
					p={{ base: 4, sm: 6, md: 8 }}
					spacing={{ base: 8 }}
					maxW={{ lg: 'lg' }}
				>
					<Stack spacing={4}>
						<Heading
							color={'gray.800'}
							lineHeight={1.1}
							fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
						>
							Get Started At Onpoint
							<Text
								as={'span'}
								bgGradient='linear(to-r, red.400,pink.400)'
								bgClip='text'
							>
								!
							</Text>
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
				top={0}
				left={0}
				style={{ filter: 'blur(70px)' }}
				zIndex='-1'
			/>
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
			<circle cx='71' cy='61' r='111' fill='#F56565' />
			<circle cx='244' cy='106' r='139' fill='#ED64A6' />
			<circle cy='291' r='139' fill='#ED64A6' />
			<circle cx='80.5' cy='189.5' r='101.5' fill='#ED8936' />
			<circle cx='196.5' cy='317.5' r='101.5' fill='#ECC94B' />
			<circle cx='70.5' cy='458.5' r='101.5' fill='#48BB78' />
			<circle cx='426.5' cy='-0.5' r='101.5' fill='#4299E1' />
		</Icon>
	);
};
