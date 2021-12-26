import { Box, chakra, Text, Stack, Grid, SimpleGrid } from '@chakra-ui/react';
import TeamMember from './TeamMember';

export default function Team() {
	return (
		<Box justifyContent={'center'} mx='auto' width={'70%'}>
			<Box my='16' textAlign='center'>
				<chakra.h1
					fontSize={{
						sm: '40px',
						md: '40px',
						lg: '40px',
						xl: '50px',
						base: '40px'
					}}
					fontWeight='700'
				>
					But Wait... Who Even Are We?
				</chakra.h1>
				<Text fontSize='20px'>Meet The Board</Text>
			</Box>
			{/* <Stack
				spacing='25px'
				direction={{
					sm: 'column',
					md: 'column',
					lg: 'column',
					xl: 'row',
					base: 'column'
				}}
				justifyContent='center'
				mx='auto'
				pb='16'
				alignItems={'center'}
			>
				<TeamMember />
				<TeamMember />
				<TeamMember />
				<TeamMember />
				<TeamMember />
			</Stack> */}
			<SimpleGrid
				columns={3}
				columns={{
					sm: '1',
					md: '2',
					lg: '2',
					xl: '3',
					base: '1'
				}}
				spacing={10}
				justifyItems={'center'}
				alignContent={'center'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<TeamMember />
				<TeamMember />
				<TeamMember />
				<TeamMember />
				<TeamMember />
				<TeamMember />
			</SimpleGrid>
		</Box>
	);
}
