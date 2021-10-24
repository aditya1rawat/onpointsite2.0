import { Box, Stack, chakra, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function GetStartedItem({ number, icon, step }) {
	return (
		<motion.div whileHover={{y: -10}} transition={{duration: 0.2}}>
			<Box
				borderRadius={{
					sm: '500px',
					md: '25px',
					lg: '500px',
					xl: '500px',
					base: '500px'
				}}
				// bgGradient='linear(to-r, #FC466B,#5465FF)'
				bgGradient='linear(152.01deg, #FC466B 30.27%, #5465FF 80.09%)'
				// transition='all 0.2s ease-in-out'
				// _hover={{
				// 	transform: 'scale(1.02)'
				// }}
				// box-shadow: 0px 4px 250px #000000;
				boxShadow={`${useColorModeValue(
					'rgba(0, 0, 0, 0.5)',
					'rgba(255, 255, 255, 0.5)'
				)} 0px 4px 25px`}
				width={{
					sm: '300px',
					md: '225px',
					lg: '275px',
					xl: '350px',
					base: '300px'
				}}
				height={{
					sm: '300px',
					md: '275px',
					lg: '275px',
					xl: '350px',
					base: '300px'
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
							xl: '5',
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
						// text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
						textShadow='0px 1px 5px rgba(0, 0, 0, 0.25)'
						textShadow='0px 1px 5px 0px rgba(0, 0, 0, 0.25)'
						textShadow='0px -0.5px 0.5px 0px rgba(0, 0, 0, 0.15), inset'
						textShadow='0px -0.5px 4px 0px rgba(0, 0, 0, 0.5), inset'
					>
						{step}
					</chakra.h1>
				</Stack>
			</Box>
		</motion.div>
			
	);
}
