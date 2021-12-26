import { Box, Button, chakra, Link, useColorModeValue } from '@chakra-ui/react';

import { motion } from 'framer-motion';

export default function TeamMember() {
	return (
		<motion.div
			whileHover={{ scale: 1.01 }}
			transition={{ duration: 0.35 }}
		>
			<Box
				style={{
					background:
						'center / contain no-repeat url(/team/adityarawat.jpeg)'
				}}
				color={useColorModeValue('black', 'white')}
				borderRadius='25px'
				borderWidth='4px'
				borderColor={useColorModeValue('black', 'white')}
				width={{
					sm: '250px',
					md: '275px',
					lg: '300px',
					xl: '350px',
					base: '250px'
				}}
				height={{
					sm: '250px',
					md: '275px',
					lg: '300px',
					xl: '350px',
					base: '250px'
				}}
				py='5'
				px='5'
			/>
		</motion.div>
	);
}
