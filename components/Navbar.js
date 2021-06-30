import {
	chakra,
	Box,
	Flex,
	HStack,
	Button,
	useDisclosure,
	VStack,
	IconButton,
	CloseButton
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/Logo.png';
import { BsTextRight } from 'react-icons/bs';

export default function Navbar() {
	const mobileNav = useDisclosure();

	return (
		<div>
			<chakra.header
				bg='rgba(0,0,0,0.8)'
				backdropFilter='saturate(175%) blur(5px)'
				zIndex='1'
				top='0'
				position='fixed'
				w='full'
				px={{ base: 2, sm: 4 }}
				py={4}
			>
				<Flex>
					<Flex>
						<chakra.a
							href='/'
							title='Home'
							display='flex'
							alignItems='center'
						>
							<Image src={Logo} width='50px' height='50px' />
							<chakra.h1
								fontSize='35px'
								fontWeight='700'
								ml='5'
								color='white'
							>
								OnPoint
							</chakra.h1>
						</chakra.a>
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
							<Button
								color='white'
								colorScheme='black'
								_hover={{
									color: 'rgba(255, 255, 255, 0.75)'
								}}
							>
								About
							</Button>
							<Button
								color='white'
								colorScheme='black'
								_hover={{
									color: 'rgba(255, 255, 255, 0.75)'
								}}
							>
								Blog
							</Button>
							<Button
								color='white'
								colorScheme='black'
								_hover={{
									color: 'rgba(255, 255, 255, 0.75)'
								}}
							>
								Support
							</Button>
						</HStack>

						<Box
							display={{ base: 'inline-flex', md: 'none' }}
							alignItems='right'
							width='full'
						>
							<IconButton
								position='absolute'
								right='0'
								top='6'
								aria-label='Open menu'
								fontSize='30px'
								color='white'
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
									Log In / Sign Up
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
									color='white'
									colorScheme='black'
									backgroundColor='black'
									transition='background 0.5s'
									_hover={{
										background:
											'linear-gradient(to right, #09E85E, #5465FF)',
										transition: '0.5s'
									}}
								>
									Log In / Sign Up
								</Button>
							</Link>
						</HStack>
					</HStack>
				</Flex>
			</chakra.header>
		</div>
	);
}
