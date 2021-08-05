import { chakra, Text, Box, Stack, useColorModeValue } from '@chakra-ui/react';

export default function Stats() {
	return (
		<Box>
			<Box py='16' textAlign='center'>
				<chakra.h1 fontSize='48px' fontWeight='700'>
					Still Not Convinced?
				</chakra.h1>
				<Text fontSize='20px'>
					We come prepared with the facts for the tough crowds.
				</Text>
			</Box>
			<Box
				width='1250px'
				height='auto'
				bg={useColorModeValue('black', 'white')}
				mx='auto'
				borderRadius='25px'
			>
				<Stack
					direction='row'
					spacing='10'
					py='10'
					mx='auto'
					width='100%'
					justifyContent='center'
				>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						borderRadius='25px'
					></Box>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						borderRadius='25px'
					></Box>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						mx='auto'
						borderRadius='25px'
					></Box>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						mx='auto'
						borderRadius='25px'
					></Box>
				</Stack>
			</Box>
		</Box>
	);
}
