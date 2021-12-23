import {
	chakra,
	Box,
	Stack,
	Text,
	Flex,
	Tooltip,
	Grid
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Community() {
	return (
		<Box
			color={'white'}
			py={{
				sm: '10',
				md: '10',
				lg: '16',
				xl: '16',
				base: '10'
			}}
			mt={{
				sm: '0',
				md: '16',
				lg: '16',
				xl: '16',
				base: '0'
			}}
		>
			<Flex width='100%'>
				<Stack
					direction={{
						sm: 'column',
						md: 'column',
						lg: 'row',
						xl: 'row',
						base: 'column'
					}}
					spacing={{
						sm: 'column',
						md: 'column',
						lg: '32',
						xl: '52',
						base: 'column'
					}}
					justifyContent='center'
					mx='auto'
				>
					<Box
						width={{
							sm: '300px',
							md: '450px',
							lg: '425px',
							xl: '500px',
							base: '300px'
						}}
						textAlign={{
							sm: 'center',
							md: 'center',
							lg: 'unset',
							xl: 'unset',
							base: 'center'
						}}
					>
						<chakra.h1
							fontSize={{
								sm: '40px',
								md: '40px',
								lg: '40px',
								xl: '50px',
								base: '40px'
							}}
							fontWeight='700'
							mb='10'
							mt={{
								sm: 'unset',
								md: 'unset',
								lg: '25px',
								xl: '60px',
								base: 'unset'
							}}
						>
							Active Community
						</chakra.h1>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Condimentum diam orci pretium a pharetra,
							feugiat cursus. Dictumst risus, sem egestas odio
							cras adipiscing vulputate. Nisi, risus in suscipit
							non. Non commodo volutpat, pharetra, vel.
						</Text>
					</Box>
					<Box
						width={{
							sm: '300px',
							md: '450px',
							lg: '375px',
							xl: '500px',
							base: '300px'
						}}
						height={{
							sm: '300px',
							md: '450px',
							lg: '375px',
							xl: '500px',
							base: '300px'
						}}
						bg='#5465FF'
						boxShadow='rgba(0, 0, 0, 0.5) 0px 0px 25px 0px'
						borderRadius='250px'
					>
						<Flex mx='auto' justifyContent='center'>
							Thingy Here
						</Flex>
					</Box>
				</Stack>
			</Flex>
		</Box>
	);
}
