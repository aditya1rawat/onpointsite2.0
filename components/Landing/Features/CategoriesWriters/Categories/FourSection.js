import { chakra, useColorModeValue, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function FourSection({ category, categoryIcon, mt }) {
	return (
		<motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
			<Box
				width={{
					sm: '175px',
					md: '200px',
					lg: '200px',
					xl: '200px',
					base: '175px'
				}}
				height={{
					sm: 'auto',
					md: '200px',
					lg: '200px',
					xl: '200px',
					base: 'auto'
				}}
				mt={
					mt
						? {
								sm: '10px',
								md: '20px',
								lg: '5',
								xl: '10',
								base: '10px'
						  }
						: 'unset'
				}
				// border={useColorModeValue('', '2px black solid')}
				bg={'white'}
				boxShadow='rgba(0, 0, 0, 0.75) 0px 0px 25px 0px'
				cursor='pointer'
				borderRadius='10px'
				mx={{
					sm: '5px',
					md: '20px',
					lg: '5',
					xl: '10',
					base: '5px'
				}}
			>
				<chakra.h1
					textAlign='center'
					py='4'
					fontSize='30px'
					fontWeight='800'
					color={'black'}
				>
					{category}
				</chakra.h1>

				<Box
					mb={{
						sm: '4',
						md: 'unset',
						lg: 'unset',
						xl: 'unset',
						base: '4'
					}}
				>
					{categoryIcon}
				</Box>
			</Box>
		</motion.div>
	);
}
