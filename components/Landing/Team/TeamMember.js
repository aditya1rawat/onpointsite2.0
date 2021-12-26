import { Box, Text, chakra, useColorModeValue } from '@chakra-ui/react';

import { motion } from 'framer-motion';

export default function TeamMember({ image, name, role }) {
	return (
		<motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
			<Box
				color={useColorModeValue('black', 'white')}
				borderRadius='25px'
				borderWidth='4px'
				borderColor={useColorModeValue('black', 'white')}
				width={'auto'}
				height={'auto'}
				m='15px'
			>
				<Box
					style={{
						background: `center / contain no-repeat url(/team/${image})`
					}}
					transition={'0.2s all'}
					borderRadius='20px'
					position={'relative'}
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
				/>

				<Box
					transition={'0.2s all'}
					position={'absolute'}
					top={'5'}
					borderRadius='20px'
					// opacity={'0'}
					textAlign={'center'}
					justifyContent={'center'}
					pt='125px'
					verticalAlign={'middle'}
					opacity={'0'}
					background={useColorModeValue(
						'rgba(255,255,255,0.5)',
						'rgba(0,0,0,0.5)'
					)}
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
					_hover={{
						opacity: '1',
						backdropFilter: 'blur(10px)'
					}}
				>
					<chakra.h1 fontSize={'30px'} fontWeight={'bold'}>
						{name}
					</chakra.h1>
					<Text fontSize={'20px'} fontWeight={'bold'}>
						{role}
					</Text>
				</Box>
			</Box>
		</motion.div>
	);
}
