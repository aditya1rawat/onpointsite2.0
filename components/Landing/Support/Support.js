import {
	chakra,
	Text,
	Box,
	Stack,
	useColorModeValue,
	SimpleGrid
} from '@chakra-ui/react';
import DonateService from './DonateService';
import Image from 'next/image';
import HackClubLogo from '../../../public/hclogo.png';
import PayPalLogo from '../../../public/pplogo.png';
import VenmoStripeLogos from '../../../public/vslogos.png';

export default function Support() {
	return (
		<Box
			bg={useColorModeValue(
				'linear-gradient(180deg, #FFFFFF 0%, #2EC5CE 100%)',
				'linear-gradient(180deg, #000000 0%, #2EC5CE 100%)'
			)}
		>
			<Box my='16' textAlign='center'>
				<Text
					fontSize='20px'
					display={{
						sm: 'none',
						md: 'unset',
						lg: 'unset',
						xl: 'unset',
						base: 'none'
					}}
				>
					Now That You Know How Cool We Are...
				</Text>
				<chakra.h1
					fontSize={{
						sm: '35px',
						md: '40px',
						lg: '40px',
						xl: '50px',
						base: '35px'
					}}
					fontWeight='700'
				>
					Consider Supporting Us!
				</chakra.h1>
				<Text fontSize='20px'>
					We need your help to improve the OnPoint experience!
				</Text>
			</Box>
			<Stack
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
				pb='22'
			>
				<SimpleGrid
					columns={{
						sm: '1',
						md: '2',
						lg: '3',
						xl: '3',
						base: '1'
					}}
					justifyContent='center'
					mx='auto'
					spacingX='25px'
					spacingY='25px'
				>
					<DonateService
						icon={
							<Box textAlign='center'>
								<Image
									src={HackClubLogo}
									width='125px'
									height='125px'
								/>
							</Box>
						}
						name={'Hack Club Bank'}
						nameLink={'https://hackclub.com/bank'}
						donateLink={
							'https://bank.hackclub.com/donations/start/onpoint'
						}
						donateButtonText={'Donate'}
					/>
					<DonateService
						icon={
							<Box textAlign='center'>
								<Image
									src={PayPalLogo}
									width='125px'
									height='125px'
								/>
							</Box>
						}
						name={'Pay Pal'}
						nameLink={'https://paypal.com'}
						donateLink={
							'https://www.paypal.com/paypalme/adityarawat69420'
						}
						donateButtonText={'Donate'}
					/>
					<DonateService
						icon={
							<Box textAlign='center'>
								<Image
									src={VenmoStripeLogos}
									height='125px'
									width='260px'
								/>
							</Box>
						}
						name={'+ Other Options'}
						donateButtonText={'Learn More'}
					/>
				</SimpleGrid>
			</Stack>
		</Box>
	);
}
