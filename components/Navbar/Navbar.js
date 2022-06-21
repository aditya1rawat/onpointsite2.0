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
import Logo from '../../public/Logo.png';
import { BsTextRight } from 'react-icons/bs';
import ThemeButton from './ThemeButton';
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
				<Flex justifyContent={'center'} mx='auto' width={'80%'}>
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
									fontSize={{
										sm: '30px',
										md: '30px',
										lg: '35px',
										xl: '35px',
										base: '30px'
									}}
									fontWeight='700'
									ml='2'
									display={{
										sm: 'unset',
										md: 'none',
										lg: 'unset',
										xl: 'unset',
										base: 'unset'
									}}
									color={
										scrollY > 75
											? useColorModeValue(
													'black',
													'white'
											  )
											: useColorModeValue(
													'black',
													'white'
											  )
									}
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
							<NavLink name='About Us' link='about' />
							<NavLink name='Blog' link='blog' />
							<NavLink name='Support' link='support' />
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
							bgGradient='linear(to right, #09E85E, #5465FF)'
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

// <!-- HTML !-->
// <button class="button-64" role="button"><span class="text">Button 64</span></button>

// /* CSS */
// .button-64 {
//   align-items: center;
//   background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
//   border: 0;
//   border-radius: 8px;
//   box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   display: flex;
//   font-family: Phantomsans, sans-serif;
//   font-size: 20px;
//   justify-content: center;
//   line-height: 1em;
//   max-width: 100%;
//   min-width: 140px;
//   padding: 3px;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   white-space: nowrap;
//   cursor: pointer;
// }

// .button-64:active,
// .button-64:hover {
//   outline: 0;
// }

// .button-64 span {
//   background-color: rgb(5, 6, 45);
//   padding: 16px 24px;
//   border-radius: 6px;
//   width: 100%;
//   height: 100%;
//   transition: 300ms;
// }

// .button-64:hover span {
//   background: none;
// }

// @media (min-width: 768px) {
//   .button-64 {
//     font-size: 24px;
//     min-width: 196px;
//   }
// }
