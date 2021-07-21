import Image from 'next/image';
import {
	Stack,
	Container,
	Box,
	Flex,
	Text,
	Heading,
	SimpleGrid,
	Image as ChakraImage
} from '@chakra-ui/react';

import Newsletter from '../../public/newsletter.png';

export default function ExtraFeature() {
	return (
		<Box
			bg={'#27292A'}
			position={'relative'}
			mx={{ lg: '20', md: '20', sm: 0 }}
			mt='5'
			p='10'
			borderRadius='15px'
		>
			<Stack direction={{ base: 'column', lg: 'row' }}>
				<Stack flex={0.5} justify={{ lg: 'center' }}>
					<Box mb={{ base: 8 }}>
						<Text
							fontFamily={'heading'}
							fontWeight={700}
							textTransform={'uppercase'}
							fontSize={'xl'}
						>
							But Wait, There's More
						</Text>
					</Box>

					<SimpleGrid columns={1} spacing={10}>
						{stats.map(stat => (
							<Box
								key={stat.title}
								borderWidth='3px'
								borderColor='white'
								borderRadius='10px'
								p='5'
								color='white'
								_hover={{
									backgroundColor: 'white',
									color: 'black'
								}}
							>
								<Text
									fontFamily={'heading'}
									fontSize={'3xl'}
									mb={3}
								>
									{stat.title}
								</Text>
								<Text fontSize={'xl'}>{stat.content}</Text>
							</Box>
						))}
					</SimpleGrid>
				</Stack>
				<Flex
					flex={0.5}
					width='100%'
					display='block'
					mx='auto'
					px='auto'
					justifyContent='center'
				>
					<Box
						width='100%'
						display='block'
						mx='auto'
						justifyContent='center'
						ml='5'
						mt='24'
					>
						<Image src={Newsletter} alt='Newsletter' />
					</Box>
				</Flex>
			</Stack>
		</Box>
	);
}

const StatsText = ({ children }) => (
	<Text as={'span'} fontWeight={700}>
		{children}
	</Text>
);

const stats = [
	{
		title: 'Newsletter',
		content: (
			<>
				<StatsText>Important articles</StatsText> are sent out every
				week to users. It is <StatsText>customizable</StatsText> to the
				user’s preference.
			</>
		)
	},
	{
		title: 'Guest Speakers',
		content: (
			<>
				We will <StatsText>conduct interviews</StatsText> to help
				further educate the public on many topics.
			</>
		)
	},
	{
		title: 'Community',
		content: (
			<>
				We want to use our platform to allow others to{' '}
				<StatsText>provide opportunities</StatsText> that will benefit
				our community.
			</>
		)
	}
];
