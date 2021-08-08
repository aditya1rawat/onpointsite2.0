import { chakra, Text, Box, Stack, useColorModeValue } from '@chakra-ui/react';

export default function Stats() {
	return (
		<Box>
			<Box py='16' textAlign='center'>
				<chakra.h1 fontSize='48px' fontWeight='700'>
					Still Not Convinced?
				</chakra.h1>
				<Text fontSize='20px'>
					We come prepared with the facts for the tough crowds.
				</Text>
			</Box>
			<Box
				width='80%'
				// height='auto'
				// bg={useColorModeValue('black', 'white')}
				bg='#5465FF'
				mx='auto'
				borderRadius='25px'
			>
				<Stack
					direction='row'
					spacing='10'
					py='10'
					mx='auto'
					width='100%'
					justifyContent='center'
				>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						borderRadius='25px'
						justifyContent='center'
						px='auto'
						alignItems='center'
						pos='relative'
					>
						<chakra.h1
							mt='7'
							fontSize='30px'
							fontWeight='600'
							textAlign='center'
							mx='auto'
						>
							25+ Users
						</chakra.h1>
						<ProfileIcon />
					</Box>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						borderRadius='25px'
						justifyContent='center'
						alignItems='center'
						pos='relative'
					>
						<chakra.h1
							mt='8'
							fontSize='25px'
							fontWeight='600'
							textAlign='center'
							mx='auto'
						>
							150+ Hours Given
						</chakra.h1>
						<ClockIcon />
					</Box>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						borderRadius='25px'
						justifyContent='center'
						px='auto'
						alignItems='center'
						pos='relative'
					>
						<chakra.h1
							mt='7'
							fontSize='30px'
							fontWeight='600'
							textAlign='center'
							mx='auto'
						>
							50+ Articles
						</chakra.h1>
						<ArticleIcon />
					</Box>
					<Box
						width='250px'
						height='250px'
						bg={useColorModeValue('white', 'black')}
						borderRadius='25px'
						justifyContent='center'
						px='auto'
						alignItems='center'
						pos='relative'
					>
						<chakra.h1
							mt='7'
							fontSize='30px'
							fontWeight='600'
							textAlign='center'
							mx='auto'
						>
							$200 Donated
						</chakra.h1>
						<CreditCardIcon />
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}

export const ProfileIcon = () => {
	return (
		<Box pos='absolute' bottom='8' left='60px'>
			<svg
				width='125'
				height='125'
				viewBox='0 0 75 75'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M37.5 75C16.7893 75 0 58.2107 0 37.5C0 16.7893 16.7893 0 37.5 0C58.2107 0 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75ZM62.7256 54.9704C66.1658 50.0124 68.1818 43.9916 68.1818 37.5C68.1818 20.5549 54.4451 6.81818 37.5 6.81818C20.5549 6.81818 6.81819 20.5549 6.81819 37.5C6.81819 43.9917 8.83428 50.0125 12.2745 54.9704C16.1112 49.9025 25.1271 47.7273 37.5001 47.7273C49.873 47.7273 58.8888 49.9025 62.7256 54.9704ZM57.8342 60.4764C56.8364 56.8887 49.6684 54.5455 37.5001 54.5455C25.3317 54.5455 18.1637 56.8887 17.1659 60.4765C22.5795 65.2711 29.6998 68.1818 37.5 68.1818C45.3002 68.1818 52.4206 65.271 57.8342 60.4764ZM37.5 17.0455C29.2469 17.0455 23.8636 23.031 23.8636 30.6818C23.8636 42.3661 29.8666 47.7273 37.5 47.7273C45.0616 47.7273 51.1363 42.5441 51.1363 31.3636C51.1363 23.5963 45.7302 17.0455 37.5 17.0455ZM30.6818 30.6818C30.6818 38.4179 33.4712 40.9091 37.5 40.9091C41.5149 40.9091 44.3182 38.5173 44.3182 31.3636C44.3182 27.1037 41.6443 23.8636 37.5 23.8636C33.1832 23.8636 30.6818 26.6449 30.6818 30.6818Z'
					fill={useColorModeValue('black', 'white')}
				/>
			</svg>
		</Box>
	);
};
export const ClockIcon = () => {
	return (
		<Box pos='absolute' bottom='8' left='60px'>
			<svg
				width='125'
				height='125'
				viewBox='0 0 125 125'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M62.5 125C27.9822 125 0 97.0178 0 62.5C0 27.9822 27.9822 0 62.5 0C97.0178 0 125 27.9822 125 62.5C125 97.0178 97.0178 125 62.5 125ZM62.5001 113.636C90.7419 113.636 113.636 90.7418 113.636 62.5C113.636 34.2582 90.7419 11.3636 62.5001 11.3636C34.2583 11.3636 11.3637 34.2582 11.3637 62.5C11.3637 90.7418 34.2583 113.636 62.5001 113.636ZM90.9091 56.8182H68.1819V28.4091H56.8182V68.1818H90.9091V56.8182Z'
					fill={useColorModeValue('black', 'white')}
				/>
			</svg>
		</Box>
	);
};

export const ArticleIcon = () => {
	return (
		<Box pos='absolute' bottom='8' left='75px'>
			<svg
				width='100'
				height='112'
				viewBox='0 0 100 112'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M100 111.111H16.6667C7.46192 111.111 0 103.649 0 94.4445V16.6667C0 7.46192 7.46192 0 16.6667 0H100V88.8889C96.9317 88.8889 94.4444 91.3762 94.4444 94.4445C94.4444 97.5127 96.9317 100 100 100V111.111ZM83.3334 94.4444C83.3334 92.4965 83.6676 90.6265 84.2818 88.8889H16.6667C13.5985 88.8889 11.1112 91.3762 11.1112 94.4444C11.1112 97.5127 13.5985 100 16.6667 100H84.2818C83.6676 98.2623 83.3334 96.3924 83.3334 94.4444ZM16.6667 11.1111H88.8889V77.7778H16.6667C14.7187 77.7778 12.8488 78.112 11.1112 78.7261V16.6667C11.1112 13.5984 13.5985 11.1111 16.6667 11.1111Z'
					fill={useColorModeValue('black', 'white')}
				/>
			</svg>
		</Box>
	);
};
export const CreditCardIcon = () => {
	return (
		<Box pos='absolute' bottom='10' left='60px'>
			<svg
				width='130'
				height='95'
				viewBox='0 0 130 95'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M10.7438 0H119.256C125.19 0 130 5.29118 130 11.8182V82.7273C130 89.2543 125.19 94.5455 119.256 94.5455H10.7438C4.81016 94.5455 0 89.2543 0 82.7273V11.8182C0 5.29118 4.81016 0 10.7438 0ZM11.8183 11.8182V82.7273H118.182V11.8182H11.8183ZM23.6364 59.0909V70.9091H35.4545V59.0909H23.6364ZM41.3636 70.9091V59.0909H59.0909V70.9091H41.3636ZM94.5454 59.0909V70.9091H106.364V59.0909H94.5454ZM76.8183 70.9091V59.0909H88.6365V70.9091H76.8183ZM41.3636 29.5454H23.6364V47.2727H41.3636V29.5454Z'
					fill={useColorModeValue('black', 'white')}
				/>
			</svg>
		</Box>
	);
};
