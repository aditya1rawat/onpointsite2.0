import { Box, chakra, useColorModeValue, Flex, Stack } from '@chakra-ui/react';

export default function GetStarted() {
	return (
		<Box bg={useColorModeValue('white', 'black')}>
			<Box>
				<Flex fontSize={['30px', '40px']} fontWeight='700' my='10'>
					<chakra.h1
						textAlign={{
							sm: 'center',
							md: 'center',
							lg: 'left',
							xl: 'left',
							base: 'center'
						}}
						ml={{
							sm: 'unset',
							md: 'unset',
							lg: '16',
							xl: '20',
							base: 'unset'
						}}
					>
						Get Started In 3 Easy Steps
					</chakra.h1>
				</Flex>
			</Box>
			<Box pos='relative' width='100%' display='block'>
				<Stack
					direction={{
						sm: 'column',
						md: 'column',
						lg: 'row',
						xl: 'row',
						base: 'column'
					}}
					// width='100%'
					justifyContent='center'
					mx='auto'
					spacing={{
						sm: '50px',
						md: '75px',
						lg: '75px',
						xl: '100px',
						base: '50px'
					}}
					my='5'
				>
					<GetStartedThing
						number={1}
						icon={<SmileIcon />}
						step={'Sign Up'}
					/>

					<GetStartedThing
						number={2}
						icon={<EditIcon />}
						step={'Write'}
					/>

					<GetStartedThing
						number={3}
						icon={<ClockIcon />}
						step={'Earn'}
					/>
				</Stack>
			</Box>
		</Box>
	);
}

const Thingy = () => {
	return (
		<Box
			pt={{ xl: '150px', base: '50px' }}
			transform={{ xl: 'none', base: 'rotate(90deg)' }}
		>
			<svg
				width='150'
				height='31'
				viewBox='0 0 263 31'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M0 16C0 14.3431 0.447715 13 1 13H117C117.552 13 118 14.3431 118 16C118 17.6569 117.552 19 117 19H1C0.447715 19 0 17.6569 0 16Z'
					fill='#09E85E'
				/>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M123.622 0.648549C122.793 1.51328 122.793 2.91529 123.622 3.78002L134.87 15.5L123.622 27.22C122.793 28.0847 122.793 29.4867 123.622 30.3515C124.452 31.2162 125.798 31.2162 126.628 30.3515L139.378 17.0657C140.207 16.201 140.207 14.799 139.378 13.9343L126.628 0.648549C125.798 -0.216183 124.452 -0.216183 123.622 0.648549Z'
					fill='#09E85E'
				/>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M145 16C145 14.3431 145.448 13 146 13H262C262.552 13 263 14.3431 263 16C263 17.6569 262.552 19 262 19H146C145.448 19 145 17.6569 145 16Z'
					fill='#09E85E'
				/>
			</svg>
		</Box>
	);
};

export const GetStartedThing = ({ number, icon, step }) => {
	return (
		<Box
			borderRadius='500px'
			bgGradient='linear(to-r, #FC466B,#5465FF)'
			width={{
				sm: '300px',
				md: '300px',
				lg: '275px',
				xl: '325px',
				base: '300px'
			}}
			height={{
				sm: '300px',
				md: '300px',
				lg: '275px',
				xl: '325px',
				base: '300px'
			}}
			transition='all 0.2s ease-in-out'
			_hover={{
				transform: 'scale(1.02)'
			}}
			zIndex='2'
			color='white'
		>
			<chakra.h1
				my='4'
				py='3'
				fontSize='50px'
				textAlign='center'
				fontWeight='extrabold'
			>
				{number}
			</chakra.h1>
			<Box>{icon}</Box>
			<chakra.h1
				mt='5'
				fontSize='40px'
				textAlign='center'
				fontWeight='extrabold'
			>
				{step}
			</chakra.h1>
		</Box>
	);
};

const SmileIcon = () => {
	return (
		<Box width='100%' display='flex' mx='auto' justifyContent='center'>
			<svg
				width='90'
				height='90'
				viewBox='0 0 135 135'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M123.009 67.0917C123.009 97.8056 98.1123 122.703 67.3984 122.703C36.6845 122.703 11.7876 97.8056 11.7876 67.0917C11.7876 36.3778 36.6845 11.4808 67.3984 11.4808C98.1123 11.4808 123.009 36.3778 123.009 67.0917ZM134.132 67.0917C134.132 103.945 104.252 133.825 67.3984 133.825C30.5451 133.825 0.665375 103.945 0.665375 67.0917C0.665375 30.2383 30.5451 0.358611 67.3984 0.358611C104.252 0.358611 134.132 30.2383 134.132 67.0917ZM36.8125 67.0917C41.4226 67.0917 45.1541 63.3546 45.1541 58.75C45.1541 54.1455 41.4226 50.4084 36.8125 50.4084C32.2023 50.4084 28.4708 54.1455 28.4708 58.75C28.4708 63.3546 32.2023 67.0917 36.8125 67.0917ZM106.326 58.75C106.326 63.3546 102.595 67.0917 97.9844 67.0917C93.3743 67.0917 89.6428 63.3546 89.6428 58.75C89.6428 54.1455 93.3743 50.4084 97.9844 50.4084C102.595 50.4084 106.326 54.1455 106.326 58.75ZM67.404 103.239C81.0287 103.239 92.618 93.7015 95.2094 80.9944C96.4996 74.6548 78.5262 72.6528 67.404 72.6528C56.2818 72.6528 38.1582 73.9374 39.5986 80.9944C42.19 93.7015 53.7738 103.239 67.404 103.239ZM67.404 94.8971C73.5434 94.8971 78.5262 92.1166 78.5262 92.1166C78.5262 92.1166 73.5434 86.5555 67.404 86.5555C61.259 86.5555 56.2818 92.1166 56.2818 92.1166C56.2818 92.1166 61.259 94.8971 67.404 94.8971Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};
const EditIcon = () => {
	return (
		<Box width='100%' display='flex' mx='auto' justifyContent='center'>
			<svg
				width='90'
				height='100'
				viewBox='0 0 121 134'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M32.5524 3.19651C33.4333 1.58157 34.8614 0 36.7032 0H46.7131C50.3968 0 53.3865 2.98964 53.3865 6.67331C53.3865 10.357 50.3968 13.3466 46.7131 13.3466H40.0398C36.3562 13.3466 33.3665 16.3363 33.3665 20.0199V86.753C33.3665 90.4366 36.3562 93.4263 40.0398 93.4263H46.7131C50.3968 93.4263 53.3865 96.4159 53.3865 100.1C53.3865 103.783 50.3968 106.773 46.7131 106.773H36.7032C34.8614 106.773 33.4333 105.191 32.5524 103.57C31.4179 101.501 29.2224 100.1 26.6932 100.1C24.164 100.1 21.9685 101.501 20.8341 103.57C19.9532 105.191 18.5251 106.773 16.6833 106.773H6.67331C2.98964 106.773 0 103.783 0 100.1C0 96.4159 2.98964 93.4263 6.67331 93.4263H13.3466C17.0303 93.4263 20.0199 90.4366 20.0199 86.753V20.0199C20.0199 16.3363 17.0303 13.3466 13.3466 13.3466H6.67331C2.98964 13.3466 0 10.357 0 6.67331C0 2.98964 2.98964 0 6.67331 0H16.6833C18.5251 0 19.9532 1.58157 20.8341 3.19651C21.9685 5.27191 24.164 6.67331 26.6932 6.67331C29.2224 6.67331 31.4179 5.27191 32.5524 3.19651ZM6.67331 120.12C2.98964 120.12 0 123.109 0 126.793C0 130.476 2.98964 133.466 6.67331 133.466H113.446C117.13 133.466 120.12 130.476 120.12 126.793C120.12 123.109 117.13 120.12 113.446 120.12H6.67331Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};
const ClockIcon = () => {
	return (
		<Box width='100%' display='flex' mx='auto' justifyContent='center'>
			<svg
				width='90'
				height='90'
				viewBox='0 0 134 134'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M133.466 66.7331C133.466 103.586 103.586 133.466 66.7331 133.466C29.8797 133.466 0 103.586 0 66.7331C0 29.8797 29.8797 0 66.7331 0C103.586 0 133.466 29.8797 133.466 66.7331ZM66.7331 122.344C97.447 122.344 122.344 97.447 122.344 66.7331C122.344 36.0192 97.447 11.1222 66.7331 11.1222C36.0192 11.1222 11.1222 36.0192 11.1222 66.7331C11.1222 97.447 36.0192 122.344 66.7331 122.344Z'
					fill='white'
				/>
				<path
					d='M64.7313 72.2942C63.2564 72.2942 61.8419 71.7083 60.799 70.6654C59.7561 69.6225 59.1702 68.208 59.1702 66.7331V27.8055C59.1702 26.3306 59.7561 24.9161 60.799 23.8732C61.8419 22.8303 63.2564 22.2444 64.7313 22.2444C66.2061 22.2444 67.6206 22.8303 68.6635 23.8732C69.7064 24.9161 70.2923 26.3306 70.2923 27.8055V66.7331C70.2923 68.208 69.7064 69.6225 68.6635 70.6654C67.6206 71.7083 66.2061 72.2942 64.7313 72.2942Z'
					fill='white'
				/>
				<path
					d='M98.4426 86.2081C97.7052 87.4854 96.4905 88.4173 95.0659 88.799C93.6413 89.1807 92.1234 88.9809 90.8462 88.2435L61.9508 71.5602C60.6839 70.8175 59.7622 69.6039 59.3869 68.1842C59.0115 66.7645 59.213 65.2539 59.9472 63.9822C60.6815 62.7104 61.889 61.7807 63.3062 61.3959C64.7234 61.0112 66.2353 61.2026 67.5118 61.9284L96.4073 78.6117C97.6845 79.3491 98.6165 80.5638 98.9982 81.9884C99.3799 83.413 99.18 84.9309 98.4426 86.2081V86.2081Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};
