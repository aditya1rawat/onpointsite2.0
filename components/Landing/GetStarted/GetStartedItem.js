import { Box, Stack, chakra } from '@chakra-ui/react';

export default function GetStartedItem({ number, icon, step }) {
	return (
		<Box
			borderRadius={{
				sm: '500px',
				md: '25px',
				lg: '500px',
				xl: '500px',
				base: '500px'
			}}
			bgGradient='linear(to-r, #FC466B,#5465FF)'
			width={{
				sm: '300px',
				md: '225px',
				lg: '275px',
				xl: '325px',
				base: '300px'
			}}
			height={{
				sm: '300px',
				md: '275px',
				lg: '275px',
				xl: '325px',
				base: '300px'
			}}
			transition='all 0.2s ease-in-out'
			_hover={{
				transform: 'scale(1.02)'
			}}
			color='white'
			justifyContent='center'
		>
			<Stack
				alignItems='center'
				justifyContent='center'
				spacing={{
					sm: '3',
					md: '5',
					lg: '3',
					xl: '8',
					base: '3'
				}}
				direction='column'
			>
				<chakra.h1
					fontSize='50px'
					textAlign='center'
					fontWeight='extrabold'
					mt={{
						sm: '3',
						md: 'unset',
						lg: '1',
						xl: '2',
						base: '3'
					}}
				>
					{number}
				</chakra.h1>
				<Box>{icon}</Box>
				<chakra.h1
					fontSize='40px'
					textAlign='center'
					fontWeight='extrabold'
				>
					{step}
				</chakra.h1>
			</Stack>
		</Box>
	);
}
