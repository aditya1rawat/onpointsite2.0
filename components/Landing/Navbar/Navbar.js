import {
	chakra,
	Box,
	Flex,
	HStack,
	Button,
	useDisclosure,
	VStack,
	IconButton,
	CloseButton,
	useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/Logo.png';
import { BsTextRight } from 'react-icons/bs';
import ThemeButton from './ThemeSwitcher';
import NavLink from './NavLink';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const mobileNav = useDisclosure();

	return (
		<div>
			<chakra.header
				bg={
					scrollY > 75
						? useColorModeValue('white', 'black')
						: useColorModeValue('rgba(0,0,0,0)', 'rgba(0,0,0,0)')
				}
				transition='background-color 0.5s ease'
				zIndex='999'
				top='0'
				position='fixed'
				w='full'
				px={{ base: 2, sm: 4 }}
				py={4}
			>
				<Flex>
					<Flex>
						<Link href='/' passHref>
							<chakra.a
								title='Home'
								display='flex'
								alignItems='center'
								ml={['0', '0', '10']}
							>
								<Image src={Logo} width='50px' height='50px' />
								<chakra.h1
									fontSize='35px'
									fontWeight='700'
									ml='2'
									display={{ sm: 'none' }}
								>
									OnPoint
								</chakra.h1>
							</chakra.a>
						</Link>
					</Flex>
					<HStack
						display='flex'
						alignItems='center'
						spacing={1}
						mx='auto'
						width='auto'
						justifyContent='center'
					>
						<HStack
							spacing={{ md: '3', lg: '10' }}
							color='brand.500'
							display={{ base: 'none', md: 'inline-flex' }}
							fontWeight='600'
						>
							<NavLink name='About Us' />
							<NavLink name='Blog' />
							<NavLink name='Support' />
						</HStack>

						<Box
							display={{ base: 'inline-flex', md: 'none' }}
							alignItems='right'
						>
							<IconButton
								position='absolute'
								right='0'
								top='6'
								aria-label='Open menu'
								fontSize='30px'
								color={useColorModeValue('black', 'white')}
								colorScheme='black'
								variant='ghost'
								icon={<BsTextRight />}
								onClick={mobileNav.onOpen}
							/>
							<VStack
								pos='absolute'
								top={0}
								left={0}
								right={0}
								display={mobileNav.isOpen ? 'flex' : 'none'}
								flexDirection='column'
								p={2}
								pb={4}
								m={2}
								bg='black'
								spacing={3}
								rounded='sm'
								shadow='sm'
							>
								<CloseButton
									color='white'
									colorScheme='black'
									fontSize='15px'
									aria-label='Close menu'
									onClick={mobileNav.onClose}
								/>
								<Button
									w='full'
									variant='ghost'
									color='white'
									colorScheme='black'
								>
									About
								</Button>
								<Button
									w='full'
									variant='ghost'
									color='white'
									colorScheme='black'
								>
									Blog
								</Button>
								<Button
									w='full'
									variant='ghost'
									color='white'
									colorScheme='black'
								>
									Support
								</Button>
								<Button
									w='full'
									variant='ghost'
									color='white'
									colorScheme='black'
								>
									<Link href='/signup'>Log In / Sign Up</Link>
								</Button>
							</VStack>
						</Box>
					</HStack>
					<HStack display='flex' alignItems='center' spacing={1}>
						<HStack
							spacing={10}
							display={{ base: 'none', md: 'inline-flex' }}
							fontWeight='600'
							background='linear-gradient(to right, #09E85E, #5465FF)'
							borderRadius='10px'
							padding='5px'
						>
							<Link href='/signup'>
								<Button
									borderRadius='7px'
									className='signUpButton'
									bg={useColorModeValue('white', 'black')}
									color={useColorModeValue('black', 'white')}
									position='relative'
									display='inline-block'
									sx={{
										'.signUpButton:before': {
											transition: 'transform 0.6s'
										}
									}}
									_hover={{
										transformOrigin: '0 0',
										transform: 'scaleX(1)',
										background: useColorModeValue(
											'black',
											'white'
										),
										color: useColorModeValue(
											'white',
											'black'
										)
									}}
								>
									<span transition='color 0.6s'>
										Log In / Sign Up
									</span>
								</Button>
							</Link>
						</HStack>
						<ThemeButton />
					</HStack>
				</Flex>
			</chakra.header>
		</div>
	);
}
