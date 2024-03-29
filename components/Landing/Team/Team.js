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
			<Stack
				direction={{
					sm: 'column',
					md: 'column',
					lg: 'column',
					xl: 'row',
					base: 'column'
				}}
				justifyContent='center'
				mx='auto'
				flexWrap={'wrap'}
				pb='16'
				spacing={'0'}
				align={'center'}
				alignItems={'center'}
			>
				<TeamMember
					image={'adityaverma.png'}
					name={'Aditya Verma'}
					role={'Founder'}
				/>
				<TeamMember
					image={'adityarawat.jpeg'}
					name={'Aditya Rawat'}
					role={'Founder / Developer'}
				/>
				<TeamMember
					image={'adityaguntupalli.png'}
					name={'Aditya Guntupalli'}
					role={'Founder / Chief Editor'}
				/>
				<TeamMember
					image={'adityahari.jpeg'}
					name={'Aditya Hari'}
					role={'Founder / Sports'}
				/>
				<TeamMember
					image={'yashkhot.jpeg'}
					name={'Yash Khot'}
					role={'Entertainment'}
				/>
				<TeamMember
					image={'sujith.jpeg'}
					name={'Sujith Sanniboyina'}
					role={'Founder / Secretary'}
				/>
			</Stack>
			{/* <SimpleGrid
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
			</SimpleGrid> */}
		</Box>
	);
}
