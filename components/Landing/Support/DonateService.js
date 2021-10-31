import { Box, Button, chakra, Link, useColorModeValue } from '@chakra-ui/react';

export default function DonateService({
	icon,
	name,
	nameLink,
	donateLink,
	donateButtonText
}) {
	return (
		<Box
			bg={useColorModeValue('white', 'black')}
			color={useColorModeValue('black', 'white')}
			borderRadius='25px'
			borderWidth='4px'
			borderColor={useColorModeValue('black', 'white')}
			width='300px'
			height='325px'
			py='5'
			px='5'
		>
			<Link href={nameLink} isExternal>
				<Box py='5'>{icon}</Box>
			</Link>
			<chakra.h1 fontSize='30px' fontWeight='700' textAlign='center'>
				{name}
			</chakra.h1>
			<a href={donateLink} target='_blank'>
				<Button
					width='100%'
					mx='auto'
					mt='5'
					boxSizing='border-box'
					borderRadius='10px'
					fontSize='25px'
					px='5'
					py='6'
					colorScheme='green'
					fontWeight='bold'
					variant='solid'
				>
					{donateButtonText}
				</Button>
			</a>
		</Box>
	);
}
