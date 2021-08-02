import { Box, Text, chakra } from '@chakra-ui/react';

export default function BigThree({ bgColor, title, description, image }) {
	return (
		<Box
			bg={bgColor}
			width={{
				sm: '300px',
				md: '725px',
				lg: '310px',
				xl: '450px',
				base: '300px'
			}}
			height='400px'
			borderRadius='25px'
			position='relative'
			overflow='hidden'
		>
			<Box py='4' px='6'>
				<chakra.h1
					fontSize={{
						sm: '44px',
						md: '44px',
						lg: '44px',
						xl: '40px',
						base: '40px'
					}}
					fontWeight='800'
				>
					{title}
				</chakra.h1>
				<Text
					fontSize={{
						sm: '25px',
						md: '25px',
						lg: '20px',
						xl: '18px',
						base: '20px'
					}}
					fontWeight='600'
					width={{
						sm: '300px',
						md: '600px',
						lg: '250px',
						xl: '375px',
						base: '300px'
					}}
					mt='3'
				>
					{description}
				</Text>
			</Box>
			{image}
		</Box>
	);
}
