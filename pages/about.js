import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue
} from '@chakra-ui/react';

export default function About() {
	return (
		<Flex
			w={'full'}
			h={'35vh'}
			backgroundImage={'url(/Logo.png)'}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
		>
			<VStack
				w={'full'}
				justify={'center'}
				px={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
			>
				<Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
					<Text
						color={'white'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({
							base: '3xl',
							md: '4xl'
						})}
					>
						About Us
					</Text>
					{/* <Stack direction={'row'}>
						<Button
							bg={'blue.400'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'blue.500' }}
						>
							Show me more
						</Button>
						<Button
							bg={'whiteAlpha.300'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'whiteAlpha.500' }}
						>
							Show me more
						</Button>
					</Stack> */}
				</Stack>
			</VStack>
		</Flex>
	);
}
