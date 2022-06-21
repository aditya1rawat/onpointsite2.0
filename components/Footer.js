import {
	Box,
	chakra,
	Flex,
	Link,
	Stack,
	Text,
	VisuallyHidden,
	useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Logo = () => {
	return (
		<svg
			width='75'
			height='75'
			viewBox='0 0 100 100'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='1'
				y='1'
				width='98'
				height='98'
				rx='49'
				fill='url(#paint2_radial)'
				stroke='url(#paint3_radial)'
				stroke-width='2'
			/>
			<g filter='url(#filter4_dii)'>
				<path
					d='M56.265 87.8499C55.5195 87.6587 53.9005 86.8513 53.7301 86.5964C53.6662 86.4901 53.9644 86.0865 54.3691 85.6828C56.6698 83.4731 59.6521 79.3725 61.271 76.1431C62.7622 73.1898 63.2309 72.8286 66.8096 71.8088C67.9173 71.4901 70.2819 70.5977 72.0287 69.8329C73.7967 69.068 75.6074 68.3881 76.0761 68.3456C77.1625 68.2181 77.8441 68.728 78.0146 69.7691C78.2063 70.9164 77.5672 71.5113 74.521 73.0623C73.4882 73.5816 72.5375 74.101 71.7812 74.5506C70.521 75.2998 70.7911 75.6998 72.1565 75.1657V75.1657C76.6512 73.4235 78.7601 71.9363 79.0797 70.3215C79.1862 69.7266 79.101 69.3654 78.6749 68.6431V68.6431C78.3501 68.1072 78.435 67.4186 78.8803 66.9778L81.0395 64.8399C84.107 61.8017 84.8526 61.2705 86.0455 61.2705C87.4088 61.2705 87.8562 62.3753 87.0041 63.5651C84.0218 67.687 82.6158 69.7904 81.146 72.255C78.8453 76.1006 78.8453 76.1218 77.695 76.6105C74.8831 77.8216 70.1328 80.2649 68.7055 81.221C66.6605 82.5808 64.8498 84.5142 63.9764 86.2564L63.8986 86.4142C63.533 87.1552 62.8321 87.6741 62.0166 87.8074V87.8074C60.5468 88.0624 57.2449 88.0836 56.265 87.8499Z'
					fill='#09E85E'
				/>
			</g>
			<g filter='url(#filter5_dii)'>
				<path
					d='M39.8192 87.8072C38.7328 87.5948 38.7115 87.5735 38.0938 86.2775C37.3056 84.5778 35.4523 82.6019 33.386 81.2208C31.9587 80.2648 27.2084 77.8214 24.3965 76.6104C23.2462 76.1217 23.2462 76.1005 20.9455 72.2549C19.4757 69.7903 18.0697 67.6869 15.1088 63.5651C14.2354 62.3541 14.704 61.2705 16.0886 61.2705C17.239 61.2705 18.0058 61.8229 21.052 64.8399L23.2112 66.9777C23.6565 67.4186 23.7414 68.1072 23.4166 68.643V68.643C22.0745 70.9589 23.9491 72.8285 29.935 75.1656V75.1656C31.3004 75.6997 31.5705 75.2997 30.3103 74.5505C29.554 74.1009 28.6033 73.5816 27.5705 73.0622C24.5243 71.5113 23.8852 70.9164 24.0769 69.7691C24.2474 68.728 24.929 68.2181 26.0154 68.3455C26.4841 68.388 28.3161 69.0679 30.0628 69.8328C31.8309 70.5977 34.1742 71.49 35.2819 71.8087C38.8606 72.8285 39.3293 73.1897 40.8204 76.143C42.4394 79.3724 45.4217 83.473 47.7223 85.6826C48.1271 86.0863 48.4253 86.4899 48.3614 86.5962C48.2975 86.7024 47.7436 87.0211 47.1472 87.3398C46.146 87.8497 45.7838 87.9135 43.4832 87.9559C42.0773 87.9984 40.437 87.9135 39.8192 87.8072Z'
					fill='white'
				/>
			</g>
			<g filter='url(#filter6_dii)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M49.4168 18.3909C49.4168 21.1654 49.5137 21.6642 50.0626 22.1941C50.7731 22.8799 51.4189 22.9735 52.3554 22.5059C52.9044 22.1941 52.969 21.82 52.969 18.1415C52.969 14.2448 52.9367 14.0889 52.194 13.6213C51.2252 12.9978 49.9012 13.4343 49.6428 14.463C49.5137 14.8683 49.4168 16.614 49.4168 18.3909ZM62.065 27.1129C61.7098 26.7699 61.4192 26.271 61.4192 25.9904C61.4192 25.3045 66.5537 20.2847 67.4902 20.0353C68.459 19.817 69.4924 20.7212 69.4924 21.7501C69.4924 22.3425 68.7496 23.2467 66.8121 25.1486C63.9703 27.8923 63.1953 28.2041 62.065 27.1129ZM33.1668 22.3692C33.1668 22.9927 33.8126 23.8032 35.8794 25.7361C37.5263 27.3261 38.8503 28.2925 39.2701 28.2925C40.0775 28.2925 41.24 27.2637 41.24 26.5467C41.24 25.8608 36.1054 20.8416 35.1689 20.5922C34.2002 20.3739 33.1668 21.278 33.1668 22.3692ZM46.0955 58.2101C45.3528 57.8048 44.5778 56.0902 44.5778 54.8743C44.5778 53.1597 43.3184 49.2004 41.7037 45.9893C40.8318 44.2123 39.9599 42.2171 39.7662 41.5312C39.1849 39.536 39.3464 36.3249 40.1214 34.0179C41.0902 31.1498 44.0934 28.1257 46.9997 27.0969C52.9093 24.977 59.3032 27.4399 62.0804 32.9268C63.0815 34.8596 63.146 35.2026 63.146 38.289V38.289C63.146 40.4434 62.659 42.5699 61.7214 44.5095L61.3377 45.3034C59.1418 49.8239 58.5605 51.4762 58.173 54.3755C57.8501 56.8384 57.4625 57.7425 56.5261 58.2413C55.7187 58.6466 46.8383 58.6466 46.0955 58.2101ZM55.0406 52.9414C55.3635 50.2292 56.0417 48.2651 58.0761 44.0876C59.1418 41.8741 59.9168 39.7854 60.0137 38.9436C60.3043 35.8261 58.6574 32.9891 55.5573 31.3056C54.0072 30.4639 53.4583 30.3392 51.3592 30.3392C49.2925 30.3392 48.6789 30.4639 47.2258 31.2433C44.3194 32.8021 42.6402 35.3896 42.6402 38.3201C42.6402 39.6295 42.9954 40.6583 44.4163 43.62C46.5799 48.1404 47.355 50.3539 47.6456 52.8791V52.8791C47.7745 53.9811 48.7082 54.812 49.8177 54.812H51.3592H52.9304C54.0057 54.812 54.9116 54.009 55.0406 52.9414V52.9414ZM44.9946 60.0412C44.2519 60.6959 44.2196 61.6623 44.9301 62.4105C45.3822 62.9093 46.028 62.9717 50.9688 62.9717C54.0043 62.9717 56.6522 62.847 56.846 62.7223C57.621 62.2235 57.9116 61.2259 57.5241 60.4465C57.4504 60.3151 57.3896 60.2068 57.3084 60.1169C56.927 59.6954 56.0947 59.6819 51.3563 59.6048C46.3186 59.5424 45.5113 59.6048 44.9946 60.0412ZM46.2086 65.3856C46.0794 65.9156 46.2408 66.2898 46.8221 66.8822C47.5971 67.6305 47.8232 67.6617 51.1171 67.6617C55.0568 67.6617 56.0579 67.2875 56.0579 65.8845C56.0579 64.2008 55.3797 63.9202 51.2139 63.9202C47.2419 63.9202 46.6284 64.1072 46.2086 65.3856ZM26.6595 35.7862C25.9814 36.4097 26.0136 37.4384 26.6918 38.1554C27.1762 38.6853 27.6606 38.7165 31.2774 38.6542L31.2887 38.6539C35.2817 38.5606 35.3144 38.5599 35.7984 37.7501C36.2182 37.002 36.2182 36.8461 35.7338 36.098C35.1848 35.2875 35.1202 35.2875 31.1482 35.2875C27.9512 35.2875 27.047 35.381 26.6595 35.7862ZM66.7886 37.8309C66.3042 37.0827 66.3042 36.9268 66.724 36.1786C67.2079 35.3688 67.2406 35.3681 71.169 35.2748L71.1803 35.2745C74.571 35.2122 75.2814 35.2745 75.7658 35.711C76.5085 36.3657 76.5408 37.0203 75.8627 37.9556C75.4106 38.6103 75.1523 38.6414 71.3741 38.6414C67.4021 38.6414 67.3375 38.6414 66.7886 37.8309Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter4_dii'
					x='52.4714'
					y='60.7705'
					width='36.2163'
					height='29.4922'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='1' />
					<feGaussianBlur stdDeviation='0.625' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-0.5' />
					<feGaussianBlur stdDeviation='0.25' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
					/>
					<feBlend
						mode='normal'
						in2='shape'
						result='effect2_innerShadow'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-0.5' />
					<feGaussianBlur stdDeviation='0.5' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.92549 0 0 0 0 0.215686 0 0 0 0 0.313726 0 0 0 0.5 0'
					/>
					<feBlend
						mode='normal'
						in2='effect2_innerShadow'
						result='effect3_innerShadow'
					/>
				</filter>
				<filter
					id='filter5_dii'
					x='13.4165'
					y='60.7705'
					width='36.2035'
					height='29.4466'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='1' />
					<feGaussianBlur stdDeviation='0.625' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-0.5' />
					<feGaussianBlur stdDeviation='0.25' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
					/>
					<feBlend
						mode='normal'
						in2='shape'
						result='effect2_innerShadow'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-0.5' />
					<feGaussianBlur stdDeviation='0.5' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.92549 0 0 0 0 0.215686 0 0 0 0 0.313726 0 0 0 0.5 0'
					/>
					<feBlend
						mode='normal'
						in2='effect2_innerShadow'
						result='effect3_innerShadow'
					/>
				</filter>
				<filter
					id='filter6_dii'
					x='24.9167'
					y='12.833'
					width='52.6814'
					height='57.0787'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='1' />
					<feGaussianBlur stdDeviation='0.625' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-0.5' />
					<feGaussianBlur stdDeviation='0.25' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
					/>
					<feBlend
						mode='normal'
						in2='shape'
						result='effect2_innerShadow'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='-0.5' />
					<feGaussianBlur stdDeviation='0.5' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.92549 0 0 0 0 0.215686 0 0 0 0 0.313726 0 0 0 0.5 0'
					/>
					<feBlend
						mode='normal'
						in2='effect2_innerShadow'
						result='effect3_innerShadow'
					/>
				</filter>
				<radialGradient
					id='paint2_radial'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(50 50) rotate(90) scale(50)'
				>
					<stop stop-color='#3C4858' />
					<stop offset='1' stop-color='#1F2D3D' />
				</radialGradient>
				<radialGradient
					id='paint3_radial'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(50 50) rotate(90) scale(50)'
				>
					<stop stop-color='#DFFFF6' />
					<stop offset='1' stop-color='#C5FBEB' />
				</radialGradient>
			</defs>
		</svg>
	);
};

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			target='_blank'
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

const FooterHead = () => {
	return (
		<Box>
			<Box>
				<Stack
					direction={{
						sm: 'column',
						md: 'row',
						lg: 'row',
						xl: 'row',
						base: 'column'
					}}
					spacing='25px'
				>
					<Logo />
					<Box ml='25px' mt='-5px'>
						<chakra.h1 fontSize='35px' fontWeight='700'>
							OnPoint
						</chakra.h1>
						<Text>A 501(c)(3) Organization</Text>
					</Box>
				</Stack>
				<Box mt='5'>
					<Text fontSize={'sm'}>
						&copy; {new Date().getUTCFullYear()} OnPoint. All rights
						reserved.
					</Text>
				</Box>
			</Box>
			<Stack direction={'row'} spacing={6} mt='5'>
				<SocialButton
					label={'Instagram'}
					href={'https://www.instagram.com/onpoint_irvine/'}
				>
					<FaInstagram />
				</SocialButton>
				<SocialButton
					label={'Github'}
					href={'https://github.com/OnPointOrg'}
				>
					<FaGithub />
				</SocialButton>
				<SocialButton
					label={'Email'}
					href={'mailto:help@onpointnews.org'}
				>
					<FaEnvelope />
				</SocialButton>
			</Stack>
		</Box>
	);
};

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={'500'} fontSize={'lg'} mb={2}>
			{children}
		</Text>
	);
};

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue('white', 'black')}
			position='relative'
			zIndex='0'
		>
			<Box py={10} px='10' position='relative' zIndex='2'>
				<Stack
					mx='auto'
					justifyContent='center'
					direction={{
						sm: 'column',
						md: 'column',
						lg: 'column',
						xl: 'row',
						base: 'column'
					}}
				>
					<Box
						mr={{
							sm: '',
							md: '',
							lg: '',
							xl: '24',
							base: ''
						}}
					>
						<FooterHead />
					</Box>
					<Stack
						direction={{
							sm: 'column',
							md: 'column',
							lg: 'column',
							xl: 'row',
							base: 'column'
						}}
						ml='10'
						spacing='24'
						justifyContent={{
							sm: 'center',
							md: 'center',
							lg: 'left',
							xl: 'left',
							base: 'center'
						}}
						mx='auto'
					>
						<Stack align={'flex-start'}>
							<ListHeader>
								<chakra.h1 fontSize='25px' fontWeight='700'>
									Company
								</chakra.h1>
							</ListHeader>
							<NextLink href={'/about'} passHref>
								<Link>About</Link>
							</NextLink>
							<NextLink href={'/blog'} passHref>
								<Link>Blog</Link>
							</NextLink>
							<NextLink href={'/support'} passHref>
								<Link>Support</Link>
							</NextLink>
						</Stack>
						<Stack align={'flex-start'}>
							<ListHeader>
								<chakra.h1 fontSize='25px' fontWeight='700'>
									Products
								</chakra.h1>
							</ListHeader>
							<NextLink href={'/signup'} passHref>
								<Link>Get Started</Link>
							</NextLink>
							<NextLink href={'/articles'} passHref>
								<Link>Articles</Link>
							</NextLink>
							<NextLink href={'/new'} passHref>
								<Link>Write A Story</Link>
							</NextLink>
						</Stack>
						<Stack align={'flex-start'}>
							<ListHeader>
								<chakra.h1 fontSize='25px' fontWeight='700'>
									Privacy
								</chakra.h1>
							</ListHeader>
							<Link href={'#'}>Terms & Conditions</Link>
							<Link href={'#'}>Privacy Policy</Link>
							<Link href={'#'}>Contact</Link>
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
}
