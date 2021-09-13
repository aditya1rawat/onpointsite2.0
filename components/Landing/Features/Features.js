import {
	Box,
	Text,
	chakra,
	Stack,
	HStack,
	VStack,
	useColorModeValue
} from '@chakra-ui/react';
import WowMan from '../../../public/wowman.png';
import Image from 'next/image';
import BigThree from './BigThree';

export default function Features() {
	return (
		<VStack
			spacing={{
				sm: '0',
				md: '25px',
				lg: '25px',
				xl: '25px',
				base: '0'
			}}
			bg={useColorModeValue('white', 'black')}
		>
			<Stack
				direction={{
					sm: 'column',
					md: 'column',
					lg: 'column',
					xl: 'row',
					base: 'column'
				}}
				spacing={{
					sm: '0',
					md: '25px',
					lg: '25px',
					xl: '25px',
					base: '0'
				}}
				mt='10'
			>
				<Box
					mx='auto'
					color={useColorModeValue('white', 'black')}
					bg='#09E85E'
					width={{
						sm: '100%',
						md: '725px',
						lg: '975px',
						xl: '725px',
						base: '100%'
					}}
					height={{
						sm: '750px',
						md: '450px',
						lg: '425px',
						xl: '450px',
						base: '550px'
					}}
					borderRadius={{
						sm: '0',
						md: '25px',
						lg: '25px',
						xl: '25px',
						base: '0'
					}}
					position='relative'
					px='7'
					py='5'
					overflow='hidden'
					_hover={{
						boxShadow: 'rgba(100, 100, 111, 0.5) 0px 0px 25px 0px'
					}}
				>
					<chakra.h1
						fontSize={{
							sm: '40px',
							md: '70px',
							lg: '70px',
							xl: '70px',
							base: '40px'
						}}
						fontWeight='800'
					>
						What Makes Us Different?
					</chakra.h1>
					<Text
						fontSize={{
							sm: '20px',
							md: '25px',
							lg: '25px',
							xl: '25px',
							base: '20px'
						}}
						fontWeight='500'
						width={{
							sm: 'full',
							md: '300px',
							lg: '500px',
							xl: '350px',
							base: 'full'
						}}
						mt='3'
						color={useColorModeValue('black', 'white')}
					>
						We have a whole assortment of features that make us
						stand out from the rest
					</Text>
					<Box
						position='absolute'
						bottom='-10'
						right={{
							sm: '5',
							md: '-6',
							lg: '-1',
							xl: '-10',
							base: '3'
						}}
						transform={{
							sm: '',
							md: 'rotate(15deg)',
							lg: 'rotate(0deg)',
							xl: 'rotate(15deg)'
						}}
					>
						<Image src={WowMan} width='400px' height='400px' />
					</Box>
				</Box>
				<VStack
					spacing={{
						sm: '0',
						md: '25px',
						lg: '25px',
						xl: '25px',
						base: '0'
					}}
				>
					<Stack
						direction={{
							sm: 'column',
							md: 'column',
							lg: 'row',
							xl: 'row',
							base: 'column'
						}}
						spacing={{
							sm: '0',
							md: '25px',
							lg: '25px',
							xl: '25px',
							base: '0'
						}}
					>
						<Box
							bg='#5465FF'
							width={{
								sm: '100%',
								md: '725px',
								lg: '475px',
								xl: '315px',
								base: '100%'
							}}
							height={{
								sm: '200px',
								md: '200px',
								lg: '200px',
								xl: '200px',
								base: '250px'
							}}
							borderRadius={{
								sm: '0',
								md: '25px',
								lg: '25px',
								xl: '25px',
								base: '0'
							}}
							position='relative'
							px='5'
							py='4'
							overflow='hidden'
						>
							<chakra.h1
								fontSize={{
									sm: '35px',
									md: '40px',
									lg: '30px',
									xl: '30px',
									base: '35px'
								}}
								fontWeight='800'
								color={useColorModeValue('white', 'black')}
							>
								Daily Articles
							</chakra.h1>
							<Text
								fontSize={{
									sm: '25px',
									md: '25px',
									lg: '25px',
									xl: '20px',
									base: '20px'
								}}
								fontWeight='600'
							>
								Relevant. Concise. Accurate. Crafted for
								precision.
							</Text>
							<CalendarIcon />
						</Box>
						<Box
							bg='#669bbc'
							width={{
								sm: '100%',
								md: '725px',
								lg: '475px',
								xl: '315px',
								base: '100%'
							}}
							height={{
								sm: '275px',
								md: '200px',
								lg: '200px',
								xl: '200px',
								base: '275px'
							}}
							borderRadius={{
								sm: '0',
								md: '25px',
								lg: '25px',
								xl: '25px',
								base: '0'
							}}
							position='relative'
							px='5'
							py='4'
							overflow='hidden'
						>
							<chakra.h1
								fontSize='30px'
								fontWeight='800'
								color={useColorModeValue('white', 'black')}
							>
								Analytic Articles
							</chakra.h1>
							<Text
								fontSize={{
									sm: '25px',
									md: '25px',
									lg: '25px',
									xl: '18px',
									base: '20px'
								}}
								fontWeight='600'
							>
								Longer Articles. Deeper Analysis.
							</Text>
							<ChartIcon />
							<MagGlassIcon />
						</Box>
					</Stack>
					<Box
						bg='#e07a5f'
						width={{
							sm: '100%',
							md: '725px',
							lg: '975px',
							xl: '657px',
							base: '100%'
						}}
						height={{
							sm: '400px',
							md: '200px',
							lg: '200px',
							xl: '225px',
							base: '400px'
						}}
						borderRadius={{
							sm: '0',
							md: '25px',
							lg: '25px',
							xl: '25px',
							base: '0'
						}}
						position='relative'
						px='5'
						py='4'
						overflow='hidden'
					>
						<HStack spacing='3'>
							<Box>
								<chakra.h1
									fontSize='30px'
									fontWeight='800'
									color={useColorModeValue('white', 'black')}
								>
									Weekly Videos
								</chakra.h1>
								<Text
									fontSize={{
										sm: '25px',
										md: '20px',
										lg: '25px',
										xl: '20px',
										base: '20px'
									}}
									fontWeight='600'
									width={{
										sm: '100%',
										md: '400px',
										lg: '475px',
										xl: '350px',
										base: '100%'
									}}
								>
									Weekly videos provide a brief description of
									the events we covered during the week.
								</Text>
							</Box>
							<Box
								display={{
									sm: 'none',
									md: 'unset',
									lg: 'unset',
									xl: 'unset',
									base: 'unset'
								}}
							>
								<VideoIcon />
							</Box>
							<Box
								display={{
									sm: 'none',
									md: 'none',
									lg: 'unset',
									xl: 'none',
									base: 'none'
								}}
							>
								<PlaylistIcon />
							</Box>
						</HStack>
					</Box>
				</VStack>
			</Stack>
			<BigThree />
			{/* <Stack
				direction={{
					sm: 'column',
					md: 'column',
					lg: 'row',
					xl: 'row',
					base: 'column'
				}}
				borderRadius={{
					sm: '0',
					md: '25px',
					lg: '25px',
					xl: '25px',
					base: '0'
				}}
			>
				<BigThree
					bgColor={'#02c39a'}
					title={'Newsletter'}
					description={
						'Important articles are sent out every week to users. It is customizable to the user’s preference.'
					}
					image={<MailBoxIllustration />}
				/>
				<BigThree
					bgColor={'#6a6b83'}
					title={'Guest Speakers / Interviews'}
					description={
						'We will conduct interviews and hold speaker events to further educate the public about specific topics.'
					}
					image={<Speaker />}
				/>
				<BigThree
					bgColor={'#3a86ff'}
					title={'Active Community'}
					description={
						'We want to use our platform to allow others to provide opportunities that will benefit our community.'
					}
					image={<Group />}
				/>
			</Stack> */}
		</VStack>
	);
}

const CalendarIcon = () => {
	return (
		<Box
			position='absolute'
			bottom={{
				sm: '3',
				md: '-5',
				lg: '0',
				xl: '-7',
				base: '3'
			}}
			right={{
				sm: '3',
				md: '14',
				lg: '2',
				xl: '-2',
				base: '3'
			}}
			transform={{
				sm: 'none',
				md: 'none',
				lg: 'rotate(-30deg)',
				xl: 'rotate(-15deg)',
				base: 'none'
			}}
		>
			<svg
				width='100'
				height='100'
				viewBox='0 0 200 200'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M60 40H40V30H20V60H180V30H160V40H140V30H60V40ZM180 80H20V180H180V80ZM140 10H60V0H40V10H20C8.9543 10 0 18.9543 0 30V180C0 191.046 8.9543 200 20 200H180C191.046 200 200 191.046 200 180V30C200 18.9543 191.046 10 180 10H160V0H140V10ZM50 120V100H70V120H50ZM90 120H110V100H90V120ZM130 120V100H150V120H130ZM50 140V160H70V140H50ZM110 160H90V140H110V160Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};

const ChartIcon = () => {
	return (
		<Box
			position='absolute'
			bottom={{
				sm: '6',
				md: '9',
				lg: '-6',
				xl: '-6',
				base: '6'
			}}
			left={{
				sm: '-1',
				md: '465px',
				lg: '-1',
				xl: '-1',
				base: '10'
			}}
			transform={{
				sm: 'none',
				md: 'none',
				lg: 'rotate(18deg)',
				xl: 'rotate(18deg)',
				base: 'none'
			}}
		>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M100 10H95V60C95 65.5229 90.5229 70 85 70H55V77.169L77.5725 90.7125L72.4275 99.2875L55 88.8309V100H45V88.8309L27.5725 99.2875L22.4275 90.7125L45 77.169V70H15C9.47715 70 5 65.5229 5 60V10H0V0H100V10ZM15 10V60H85V10H15ZM30 50H40V30H30V50ZM55 50H45V20H55V50ZM60 50H70V35H60V50Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};

const MagGlassIcon = () => {
	return (
		<Box
			position='absolute'
			right={{
				sm: '10',
				md: '10',
				lg: '-1',
				xl: '-1',
				base: '10'
			}}
			bottom={{
				sm: '7',
				md: '10',
				lg: '-3',
				xl: '-3',
				base: '7'
			}}
		>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M40.5945 81.189C18.1748 81.189 0 63.0142 0 40.5945C0 18.1748 18.1748 0 40.5945 0C63.0142 0 81.189 18.1748 81.189 40.5945C81.189 49.9753 78.007 58.613 72.6636 65.4871L100 92.8239L92.8242 100L65.4874 72.6633C58.6133 78.0069 49.9755 81.189 40.5945 81.189ZM71.0404 40.5945C71.0404 57.4093 57.4093 71.0404 40.5945 71.0404C23.7797 71.0404 10.1486 57.4093 10.1486 40.5945C10.1486 23.7797 23.7797 10.1486 40.5945 10.1486C57.4093 10.1486 71.0404 23.7797 71.0404 40.5945Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};

const PlaylistIcon = () => {
	return (
		<Box
			position='absolute'
			bottom={{
				sm: '-3',
				md: '-3',
				lg: '12',
				xl: '-3',
				base: '-3'
			}}
			right={{
				sm: '3',
				md: '3',
				lg: '20',
				xl: '3',
				base: '3'
			}}
			transform={{
				sm: 'rotate(-15deg)',
				md: 'rotate(-15deg)',
				lg: 'none',
				xl: 'rotate(-15deg)',
				base: 'rotate(-15deg)'
			}}
		>
			<svg
				width='100'
				height='81.82'
				viewBox='0 0 200 165'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M200 146.273C200 156.314 191.86 164.455 181.818 164.455H72.7273C62.6858 164.455 54.5455 156.314 54.5455 146.273V19.0001C54.5455 8.95851 62.6858 0.818237 72.7273 0.818237H181.818C191.86 0.818237 200 8.95851 200 19.0001V146.273ZM45.4546 155.364C35.413 155.364 27.2728 147.223 27.2728 137.182V28.0909C27.2728 18.0494 35.413 9.9091 45.4546 9.9091V155.364ZM0 128.091C0 138.132 8.14028 146.273 18.1818 146.273V19C8.14028 19 0 27.1402 0 37.1818V128.091ZM181.818 146.273V19H72.7272V146.273H181.818ZM145.455 82.6365L109.091 55.3638V109.909L145.455 82.6365Z'
					fill='white'
				/>
			</svg>
		</Box>
	);
};

const VideoIcon = () => {
	return (
		<Box
			position='absolute'
			bottom={{
				sm: '5',
				md: '5',
				lg: '1',
				xl: '5',
				base: '5'
			}}
			right={{
				sm: '5',
				md: '5',
				lg: '64',
				xl: '5',
				base: '5'
			}}
		>
			<svg
				width='250'
				height='187'
				viewBox='0 0 250 187'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clip-path='url(#clip0)'>
					<path
						d='M206.538 64.3765H80.7686V163.611H206.538V64.3765Z'
						fill='#F2F2F2'
					/>
					<path
						d='M188.983 152.091H62.6892V52.3322H188.983V152.091ZM63.2132 151.567H188.459V52.8559H63.2132V151.567Z'
						fill='#3F3D56'
					/>
					<path
						d='M151.355 182.803H5.64404V183.422H151.355V182.803Z'
						fill='#3F3D56'
					/>
					<path
						d='M108.281 131.765L108.207 79.9215L166.936 105.76L108.281 131.765Z'
						fill='#D0CDE1'
					/>
					<path
						d='M96.3523 82.1766C96.3523 82.1766 101.885 75.9634 103.034 78.3312C104.183 80.699 97.4108 84.2986 97.4108 84.2986L96.3523 82.1766Z'
						fill='#A0616A'
					/>
					<path
						d='M99.2487 84.7393C99.2487 84.7393 96.7884 85.6426 96.0757 86.7397C95.363 87.8394 92.9917 88.9863 92.9917 88.9863L92.7847 89.1093L90.5471 90.442L87.6151 92.1859L78.3343 97.7105L66.0849 102.612C65.9906 100.902 65.8989 99.1925 65.8124 97.5744C65.7862 97.09 65.781 96.6082 65.7914 96.1265C65.946 96.0793 66.1032 96.0374 66.2631 96.0034C69.8868 95.231 71.4275 94.1077 71.4275 94.1077L78.5125 89.8372C78.5125 89.8372 84.0752 86.2946 87.6046 84.632C88.0998 84.3963 88.5557 84.1999 88.9487 84.0559C92.1454 82.8829 97.3124 80.9872 97.3124 80.9872L97.3727 81.1051L98.6513 83.5794L99.2487 84.7393Z'
						fill='#D0CDE1'
					/>
					<path
						opacity='0.1'
						d='M99.2487 84.7393C99.2487 84.7393 96.7884 85.6426 96.0757 86.7397C95.363 87.8394 92.9917 88.9863 92.9917 88.9863L92.7847 89.1093L90.5471 90.442L87.6151 92.1859L78.3343 97.7105L66.0849 102.612C65.9906 100.902 65.8989 99.1925 65.8124 97.5744C65.7862 97.09 65.781 96.6082 65.7914 96.1265C65.946 96.0793 66.1032 96.0374 66.2631 96.0034C69.8868 95.231 71.4275 94.1077 71.4275 94.1077L78.5125 89.8372C78.5125 89.8372 84.0752 86.2946 87.6046 84.632C88.0998 84.3963 88.5557 84.1999 88.9487 84.0559C92.1454 82.8829 97.3124 80.9872 97.3124 80.9872L97.3727 81.1051L98.6513 83.5794L99.2487 84.7393Z'
						fill='black'
					/>
					<path
						d='M97.3126 131.709L97.2393 79.8663L155.968 105.705L97.3126 131.709Z'
						fill='#6C63FF'
					/>
					<path
						opacity='0.2'
						d='M152.216 104.054L97.3079 128.397L97.3126 131.709L155.968 105.705L152.216 104.054Z'
						fill='black'
					/>
					<path
						d='M80.8997 174.477V179.976H85.092L84.5679 174.216L80.8997 174.477Z'
						fill='#A0616A'
					/>
					<path
						d='M64.6543 174.216L63.3442 180.5L68.5846 180.761V174.216H64.6543Z'
						fill='#A0616A'
					/>
					<path
						d='M66.7505 124.467C66.7505 124.467 65.4404 123.944 65.1783 128.657C64.9163 133.37 64.6543 149.603 64.6543 149.603C64.6543 149.603 62.0341 164.004 63.0822 168.193C64.1303 172.383 64.1303 175.263 64.1303 175.263H68.8466L69.1086 172.645L69.3707 165.575C69.3707 165.575 71.9908 159.029 71.2048 153.007L77.4933 133.893L80.6375 154.316C80.6375 154.316 79.3274 159.291 79.5894 164.528C79.8514 169.764 79.8514 176.572 79.8514 176.572L85.0918 176.048L89.2841 151.436C89.2841 151.436 91.6423 126.824 89.2841 125.515C86.926 124.205 66.7505 124.467 66.7505 124.467Z'
						fill='#2F2E41'
					/>
					<path
						d='M82.4716 178.143C82.4716 178.143 80.1134 175.001 79.0654 177.358C78.0173 179.714 75.6591 182.856 77.4932 184.427C79.3274 185.998 81.6856 186.522 82.4716 185.998C83.2577 185.475 91.3803 181.285 91.3803 181.285C91.3803 181.285 92.9524 176.834 89.8082 176.572C86.6639 176.31 85.6159 175.525 85.6159 175.525L82.4716 178.143Z'
						fill='#2F2E41'
					/>
					<path
						d='M64.3924 178.929C64.3924 178.929 64.3924 176.31 63.3443 177.096C62.2962 177.881 61.5101 181.285 61.5101 181.285C61.5101 181.285 55.2217 186.26 61.2481 186.26C67.2746 186.26 71.2049 187.307 70.6808 184.951C70.1568 182.594 69.3707 178.667 69.3707 178.667C69.3707 178.667 66.7505 175.263 64.3924 178.929Z'
						fill='#2F2E41'
					/>
					<path
						d='M80.8996 79.1701C84.5173 79.1701 87.4501 76.2394 87.4501 72.6243C87.4501 69.0091 84.5173 66.0784 80.8996 66.0784C77.2819 66.0784 74.3491 69.0091 74.3491 72.6243C74.3491 76.2394 77.2819 79.1701 80.8996 79.1701Z'
						fill='#A0616A'
					/>
					<path
						d='M75.7902 74.8499C75.7902 74.8499 74.7421 82.443 73.17 83.4904C71.5979 84.5377 83.6508 84.7995 83.6508 84.7995C83.6508 84.7995 82.8647 78.7774 83.6508 77.2064L75.7902 74.8499Z'
						fill='#A0616A'
					/>
					<path
						d='M96.3589 126.824C96.3589 126.824 100.289 134.155 97.669 134.417C95.0488 134.679 94.0007 127.086 94.0007 127.086L96.3589 126.824Z'
						fill='#A0616A'
					/>
					<path
						d='M74.8476 77.3775C75.8416 77.8618 76.9706 77.9949 78.0501 77.7551C79.1296 77.5153 80.0958 76.9167 80.7908 76.0572C81.6721 74.9062 82.1831 73.2301 83.5885 72.8722C84.5061 72.6385 85.5642 73.0795 86.3835 72.6051C87.9123 71.7198 86.8386 68.9136 88.2582 67.8622C87.6475 67.8538 87.0623 67.6164 86.6185 67.1971C86.1747 66.7779 85.9047 66.2073 85.862 65.5985C85.8257 66.0886 85.1809 66.3083 84.7104 66.165C84.24 66.0216 83.8706 65.6601 83.4314 65.4389C82.664 65.0526 81.7558 65.1229 80.9002 65.2025C78.7139 65.4058 76.355 65.6831 74.749 67.1794C73.2398 68.5853 72.7381 70.8335 73.032 72.8742C73.326 74.915 73.8449 75.5848 74.9433 77.3301L74.8476 77.3775Z'
						fill='#2F2E41'
					/>
					<path
						d='M91.1183 86.2396L91.0816 86.5014L90.5471 90.442L88.354 106.587L88.2361 107.448C88.2361 107.448 88.4955 108.079 88.8204 109.085C89.3706 110.779 90.1148 113.536 90.1436 116.133C90.1524 116.643 90.1279 117.153 90.0702 117.66C89.6772 120.998 89.5776 124.336 89.554 125.797C89.5462 126.284 89.5462 126.562 89.5462 126.562L65.7024 125.776C65.8514 125.441 65.9834 125.099 66.098 124.75C66.9595 122.22 67.2713 119.535 67.0125 116.874C66.7793 114.659 66.4151 108.624 66.0849 102.612C65.9906 100.902 65.8989 99.1925 65.8124 97.5744C65.7862 97.09 65.781 96.6082 65.7915 96.1264C65.8555 93.3109 66.5378 90.5439 67.7902 88.021C69.0425 85.4981 70.8344 83.281 73.0389 81.5266C73.0389 81.5266 73.5211 81.5476 74.2809 81.5921C76.6705 81.7308 81.8166 82.0922 83.4332 82.6865C83.5075 82.7127 83.5802 82.7433 83.6507 82.7782C84.4315 83.1631 86.0639 83.925 87.6046 84.632C89.4256 85.4698 91.1183 86.2396 91.1183 86.2396Z'
						fill='#D0CDE1'
					/>
					<path
						d='M87.4502 86.5015H91.1185C91.1185 86.5015 94.2627 90.1671 93.7387 93.8328C93.2146 97.4985 93.7387 99.3313 93.7387 99.3313L95.3108 107.448C95.3108 107.448 97.1449 115.827 97.1449 119.231V128.133L92.9526 128.657C92.9526 128.657 92.9526 126.038 92.1665 124.991C91.3805 123.944 91.1185 121.325 91.1185 121.325L87.9742 104.568L87.4502 86.5015Z'
						fill='#D0CDE1'
					/>
					<path
						d='M33.8757 81.7991L26.3213 84.7188L29.1418 92.0064L36.6962 89.0868L33.8757 81.7991Z'
						fill='#6C63FF'
					/>
					<path
						d='M35.3311 88.512L27.3791 91.5853L24.4102 83.9141L32.3622 80.8408L35.3311 88.512ZM27.6283 91.0481L34.7851 88.2821L32.113 81.378L24.9562 84.144L27.6283 91.0481Z'
						fill='#3F3D56'
					/>
					<path
						d='M229.285 31.8693L226.652 24.2151L219.257 26.7555L221.891 34.4097L229.285 31.8693Z'
						fill='#6C63FF'
					/>
					<path
						d='M222.517 33.0683L219.745 25.0113L227.529 22.3372L230.301 30.3942L222.517 33.0683ZM220.273 25.2804L222.768 32.5318L229.773 30.1251L227.278 22.8737L220.273 25.2804Z'
						fill='#3F3D56'
					/>
					<path
						d='M22.1389 183.198L21.8069 183.073C21.7339 183.046 14.4723 180.266 11.0706 173.962C7.66881 167.658 9.3345 160.067 9.35173 159.991L9.43013 159.646L9.762 159.77C9.83496 159.798 17.0964 162.578 20.4983 168.882C23.9001 175.186 22.2344 182.776 22.2171 182.852L22.1389 183.198ZM11.6153 173.668C14.4913 178.998 20.2297 181.731 21.6836 182.354C21.96 180.797 22.827 174.5 19.9535 169.175C17.0804 163.851 11.3398 161.114 9.88527 160.489C9.60868 162.047 8.74207 168.344 11.6153 173.668Z'
						fill='#3F3D56'
					/>
					<path
						d='M13.6704 171.751C19.7836 175.426 22.138 182.726 22.138 182.726C22.138 182.726 14.5809 184.067 8.46763 180.392C2.3544 176.717 0 169.417 0 169.417C0 169.417 7.55712 168.075 13.6704 171.751Z'
						fill='#6C63FF'
					/>
					<path
						d='M250 6.56189H5.53564V7.08556H250V6.56189Z'
						fill='#3F3D56'
					/>
					<path
						d='M10.5302 4.74506C11.8415 4.74506 12.9044 3.68284 12.9044 2.37253C12.9044 1.06222 11.8415 0 10.5302 0C9.21898 0 8.15601 1.06222 8.15601 2.37253C8.15601 3.68284 9.21898 4.74506 10.5302 4.74506Z'
						fill='#3F3D56'
					/>
					<path
						d='M17.8505 4.74506C19.1618 4.74506 20.2248 3.68284 20.2248 2.37253C20.2248 1.06222 19.1618 0 17.8505 0C16.5393 0 15.4763 1.06222 15.4763 2.37253C15.4763 3.68284 16.5393 4.74506 17.8505 4.74506Z'
						fill='#3F3D56'
					/>
					<path
						d='M25.1711 4.74506C26.4823 4.74506 27.5453 3.68284 27.5453 2.37253C27.5453 1.06222 26.4823 0 25.1711 0C23.8598 0 22.7969 1.06222 22.7969 2.37253C22.7969 3.68284 23.8598 4.74506 25.1711 4.74506Z'
						fill='#3F3D56'
					/>
					<path
						d='M152.203 24.4695H96.2869V25.0973H152.203V24.4695Z'
						fill='#3F3D56'
					/>
					<path
						d='M152.203 28.8643H96.2869V29.4921H152.203V28.8643Z'
						fill='#3F3D56'
					/>
					<path
						d='M152.203 33.259H96.2869V33.8869H152.203V33.259Z'
						fill='#3F3D56'
					/>
				</g>
				<defs>
					<clipPath id='clip0'>
						<rect width='250' height='186.492' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</Box>
	);
};
