import { chakra, Text, Box, Stack } from '@chakra-ui/react';
import DonateService from './DonateService';

export default function Support() {
	return (
		<Box>
			<Box my='16' textAlign='center'>
				<Text fontSize='20px'>
					Now That You Know How Cool We Are...
				</Text>
				<chakra.h1 fontSize='48px' fontWeight='700'>
					Consider Supporting Us!
				</chakra.h1>
				<Text fontSize='20px'>
					We need your help to improve the OnPoint experience!
				</Text>
			</Box>
			<Stack
				spacing='25px'
				direction='row'
				justifyContent='center'
				mx='auto'
				mb='16'
			>
				<DonateService />
				<DonateService />
				<DonateService />
			</Stack>
		</Box>
	);
}
