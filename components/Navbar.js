import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	VisuallyHidden,
	HStack,
	Button,
	useDisclosure,
	VStack,
	IconButton,
	CloseButton
} from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../public/Logo.png';

export default function Navbar() {
	const bg = useColorModeValue('white', 'gray.800');
	const mobileNav = useDisclosure();

	return (
		<div>
			<chakra.header
				bg={bg}
				w='full'
				px={{ base: 2, sm: 4 }}
				py={4}
				shadow='md'
			>
				<Flex>
					<Flex>
						<chakra.a
							href='/'
							title='Choc Home Page'
							display='flex'
							alignItems='center'
						>
							<Image src={Logo} width='50px' height='50px' />
							<chakra.h1 fontSize='xl' fontWeight='medium' ml='5'>
								OnPoint
							</chakra.h1>
							<VisuallyHidden>Choc</VisuallyHidden>
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
							spacing={10}
							color='brand.500'
							display={{ base: 'none', md: 'inline-flex' }}
						>
							<Button variant='ghost'>About</Button>
							<Button variant='ghost'>Blog</Button>
							<Button variant='ghost'>Support</Button>
						</HStack>

						<Box display={{ base: 'inline-flex', md: 'none' }}>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label='Open menu'
								fontSize='20px'
								color={useColorModeValue('gray.800', 'inherit')}
								variant='ghost'
								// icon={<AiOutlineMenu />}
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
								bg={bg}
								spacing={3}
								rounded='sm'
								shadow='sm'
							>
								<CloseButton
									aria-label='Close menu'
									onClick={mobileNav.onClose}
								/>

								<Button w='full' variant='ghost'>
									Features
								</Button>
								<Button w='full' variant='ghost'>
									Pricing
								</Button>
								<Button w='full' variant='ghost'>
									Blog
								</Button>
								<Button w='full' variant='ghost'>
									Company
								</Button>
								<Button w='full' variant='ghost'>
									Sign in
								</Button>
							</VStack>
						</Box>
					</HStack>
				</Flex>
			</chakra.header>
		</div>
	);
}
