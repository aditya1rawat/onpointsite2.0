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
			mx='5'
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

					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
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
		title: '10+',
		content: (
			<>
				<StatsText>Software modules</StatsText> for detailed monitoring
				and real-time analytics
			</>
		)
	},
	{
		title: '24/7',
		content: (
			<>
				<StatsText>Analytics</StatsText> enabled right in your dashboard
				without history limitations
			</>
		)
	},
	{
		title: '13%',
		content: (
			<>
				<StatsText>Farms</StatsText> in North America has chosen
				NewLife™ as their management solution
			</>
		)
	},
	{
		title: '250M+',
		content: (
			<>
				<StatsText>Plants</StatsText> currently connected and monitored
				by the NewLife™ software
			</>
		)
	}
];
