import React from 'react';
import { Box, Grid, chakra } from '@chakra-ui/react';

const GetStarted = () => {
	return (
		<Box width='100%' display='block' mx='auto' justifyContent='center'>
			<chakra.h1 fontSize='90px' fontWeight='semibold'>
				Get Started In 3 Steps
			</chakra.h1>
			<Grid templateColumns='repeat(3, 1fr)' gap={3}>
				<GetStartedThing
					number={1}
					icon={<GetStarted1Icon />}
					step={'Sign Up'}
				/>
				<GetStartedThing
					number={1}
					icon={<GetStarted1Icon />}
					step={'Sign Up'}
				/>
				<GetStartedThing
					number={1}
					icon={<GetStarted1Icon />}
					step={'Sign Up'}
				/>
			</Grid>
		</Box>
	);
};

export const GetStartedThing = ({ number, icon, step }) => {
	return (
		<Box
			zIndex='2'
			borderRadius='500px'
			bgGradient='linear(to-r, #FC466B,#5465FF)'
			width='525px'
			height='525px'
			m='10'
		>
			<chakra.h1
				pt='5'
				fontSize='125px'
				textAlign='center'
				fontWeight='extrabold'
			>
				{number}
			</chakra.h1>
			{icon}
			<chakra.h1
				fontSize='75px'
				textAlign='center'
				fontWeight='extrabold'
			>
				{step}
			</chakra.h1>
		</Box>
	);
};

const GetStarted1Icon = () => {
	return (
		<Box width='100%' display='flex' mx='auto' justifyContent='center'>
			<svg
				width='135'
				height='134'
				viewBox='0 0 135 134'
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

export default GetStarted;
