import {
	Box,
	Button,
	chakra,
	HStack,
	Stack,
	useColorModeValue
} from '@chakra-ui/react';
import Logo from '../../public/Logo.png';
import Image from 'next/image';

export default function Hero() {
	return (
		<Box
			sx={{
				background:
					'linear-gradient(102.92deg, #00F260 0%, #00F260 0.01%, #0575E6 49.89%, #00F260 100%)'
			}}
			p='7'
			borderBottom={useColorModeValue(
				'10px solid black',
				'10px solid white'
			)}
		>
			<Stack direction={['column', 'column', 'row']}>
				<Box
					pt={['16', '36']}
					pl={['0', '5']}
					alignItems='center'
					display='block'
					mx='auto'
					width='80%'
				>
					<Box
						textAlign={{
							sm: 'center',
							md: 'center',
							lg: 'left',
							xl: 'left',
							base: 'center'
						}}
						fontSize={['55px', '65px', '75px']}
						fontsize={{
							sm: '55px',
							md: '65px',
							lg: '75px',
							xl: '75px',
							base: '55px'
						}}
						fontWeight='bold'
						color='white'
					>
						<chakra.h1>Write. Earn.</chakra.h1>
						<chakra.h1>It's That Simple.</chakra.h1>
					</Box>
					<Button
						width={{
							sm: '100%',
							md: '100%',
							lg: 'auto',
							xl: 'auto',
							base: '100%'
						}}
						mx='auto'
						mt='10'
						border='5px solid black'
						boxSizing='border-box'
						borderRadius='10px'
						background='white'
						fontSize='20px'
						p='5'
						fontWeight='bold'
						color='black'
						variant='ghost'
					>
						Get Started <GetStartedArrowIcon />
					</Button>
				</Box>
				<Box
					pt={['6', '20']}
					pr={['-1', '16']}
					display={{
						sm: 'none',
						md: 'none',
						lg: 'unset',
						xl: 'unset',
						base: 'none'
					}}
				>
					<Image src={Logo} width='500px' height='500px' />
				</Box>
			</Stack>
		</Box>
	);
}

const GetStartedArrowIcon = () => {
	return (
		<Box ml='2'>
			<svg
				width='20'
				height='15'
				viewBox='0 0 20 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M13.4886 0L11.8683 1.80873L15.6238 5.96201L0 5.97948L0.00231143 8.53145L15.5833 8.51402L11.8911 12.6357L13.5189 14.436L20 7.20114L13.4886 0Z'
					fill='black'
				/>
			</svg>
		</Box>
	);
};
