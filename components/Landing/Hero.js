import {
	Box,
	Button,
	chakra,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import HeroRocket from '../../public/HeroRocket.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<Box
			bgGradient={'linear(-180deg, #FC466B , #5465FF, #09E85E)'}
			p='7'
			borderBottom={useColorModeValue(
				'10px solid black',
				'10px solid white'
			)}
			height='100%'
		>
			<Stack
				direction={{
					sm: 'column-reverse',
					md: 'column-reverse',
					lg: 'row',
					xl: 'row',
					base: 'column-reverse'
				}}
				mt='16'
				justifyContent={'center'}
				mx='auto'
				width={'80%'}
				alignItems='center'
			>
				<Box
					pt={{
						sm: '6',
						md: '24',
						lg: '20',
						xl: '0',
						base: '0'
					}}
					pl={{
						sm: 'unset',
						md: 'unset',
						lg: '5',
						xl: '8',
						base: 'unset'
					}}
					display='block'
					width='70%'
				>
					<Box
						textAlign={{
							sm: 'center',
							md: 'center',
							lg: 'left',
							xl: 'left',
							base: 'center'
						}}
						fontSize={{
							sm: '75px',
							md: '50px',
							lg: '70px',
							xl: '90px',
							base: '25px'
						}}
						fontWeight='bold'
						color='white'
					>
						<chakra.h1>Write. Earn.</chakra.h1>
						<chakra.h1>It's That Simple.</chakra.h1>
					</Box>
					<Button
						mt='4'
						rightIcon={<GetStartedArrowIcon />}
						transition='all .3s cubic-bezier(.645,.045,.355,1)'
						background='#FFF'
						fontSize='14px'
						px='24px'
						height='50px'
						sx={{
							p: {
								backgroundImage:
									'linear-gradient(270deg, #FC466B , #5465FF, #09E85E)'
							},
							span: {
								color: '#9121C2'
							},
							':hover': {
								backgroundColor: '#FFF'
							},
							':hover p': {
								backgroundImage:
									'linear-gradient(270deg, #9121C2 -119.03%, #FF5E5E 8.24%, #9121C2 50.97%, #FF5E5E 91.41%)',
								transition: 'all .3s ease-in-out'
							},
							':not(:hover) p': {
								transition: 'all .3s ease-in-out'
							},
							':not(:hover) span': {
								transition: 'all .3s ease-in-out'
							},
							':hover span': {
								transform: 'translateX(3px)',
								transition: 'all .3s ease-in-out'
							}
						}}
					>
						<Text
							fontSize={'20px'}
							sx={{
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
							transition='all .3s ease-in-out'
						>
							Get Started
						</Text>
					</Button>
				</Box>

				<Box
					pt={{
						sm: '16',
						md: '24',
						lg: '20',
						xl: '14',
						base: '16'
					}}
					display={{
						sm: 'unset',
						md: 'unset',
						lg: 'unset',
						xl: 'unset',
						base: 'unset'
					}}
					// bg={<Gradient />}
				>
					<motion.div
						animate={{ rotate: 15 }}
						transition={{
							delay: 1,
							duration: 3,
							repeat: Infinity,
							repeatType: 'reverse'
						}}
					>
						<Image src={HeroRocket} width='475px' height='475px' />
					</motion.div>
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

export const OnPointLogo = () => {
	return (
		<svg
			style={{ margin: 'auto', justifyContent: 'center' }}
			width='400'
			height='400'
			viewBox='0 0 400 400'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				width='400'
				height='400'
				rx='200'
				fill='url(#paint-1_radial)'
			/>
			<g filter='url(#filter0_dii)'>
				<path
					d='M223.537 344.624C220.555 343.83 214.079 340.478 213.397 339.42C213.142 338.979 214.335 337.303 215.954 335.627C225.156 326.454 237.086 309.432 243.561 296.025C249.526 283.766 251.401 282.266 265.716 278.033C270.146 276.71 279.605 273.005 286.592 269.83C293.664 266.655 300.907 263.833 302.781 263.656C307.127 263.127 309.854 265.244 310.535 269.566C311.302 274.328 308.746 276.798 296.561 283.237C292.396 285.41 288.565 287.583 285.528 289.46C280.52 292.555 281.647 294.183 287.103 291.968V291.968C305.082 284.736 313.518 278.562 314.796 271.859C315.222 269.389 314.881 267.89 313.177 264.891V264.891C311.868 262.65 312.215 259.811 314.025 257.951L322.635 249.103C334.905 236.491 337.887 234.286 342.659 234.286C348.112 234.286 349.902 238.872 346.493 243.811C334.564 260.922 328.94 269.654 323.061 279.885C313.859 295.849 313.859 295.937 309.257 297.966C298.01 302.993 279.008 313.136 273.299 317.105C265.119 322.75 257.876 330.776 254.383 338.009L254.005 338.804C252.586 341.788 249.802 343.894 246.544 344.447V344.447C240.664 345.506 227.457 345.594 223.537 344.624Z'
					fill='#09E85E'
				/>
			</g>
			<g filter='url(#filter1_dii)'>
				<path
					d='M157.754 344.447C153.408 343.565 153.323 343.477 150.852 338.097C147.699 331.041 140.286 322.838 132.021 317.105C126.312 313.136 107.31 302.993 96.0627 297.966C91.4615 295.937 91.4615 295.849 82.2589 279.885C76.3796 269.654 70.7558 260.922 58.9118 243.811C55.4183 238.784 57.2928 234.286 62.8314 234.286C67.4327 234.286 70.5002 236.579 82.685 249.103L91.2953 257.951C93.1054 259.811 93.4523 262.65 92.1431 264.891V264.891C86.775 274.505 94.2734 282.266 118.217 291.968V291.968C123.673 294.183 124.8 292.555 119.792 289.46C116.755 287.583 112.924 285.41 108.759 283.236C96.574 276.798 94.0177 274.328 94.7846 269.566C95.4663 265.244 98.1929 263.127 102.539 263.656C104.413 263.833 111.741 266.655 118.728 269.83C125.801 273.005 135.173 276.71 139.604 278.033C153.919 282.266 155.794 283.766 161.759 296.025C168.234 309.432 180.164 326.454 189.366 335.627C190.985 337.303 192.178 338.979 191.922 339.42C191.667 339.861 189.451 341.184 187.065 342.507C183.061 344.624 181.612 344.888 172.41 345.065C166.786 345.241 160.225 344.888 157.754 344.447Z'
					fill='white'
				/>
			</g>
			<g filter='url(#filter2_dii)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M197.063 60.9979C197.063 72.5161 197.451 74.5868 199.647 76.7869C202.488 79.6341 205.072 80.0224 208.818 78.0811C211.014 76.7869 211.272 75.2339 211.272 59.9625C211.272 43.7852 211.143 43.1381 208.172 41.1969C204.297 38.6085 199.001 40.4204 197.967 44.6912C197.451 46.3736 197.063 53.621 197.063 60.9979ZM133.756 74.1987C133.756 76.7871 136.34 80.1519 144.607 88.1757C151.195 94.776 156.491 98.7879 158.17 98.7879C161.399 98.7879 166.049 94.5172 166.049 91.5406C166.049 88.6934 145.511 67.8573 141.765 66.822C137.89 65.9161 133.756 69.6692 133.756 74.1987ZM185.054 228.074C182.083 226.392 178.983 219.274 178.983 214.226C178.983 207.108 173.945 190.672 167.487 177.342C163.999 169.965 160.511 161.683 159.736 158.835C157.411 150.553 158.057 137.223 161.157 127.646C165.032 115.739 177.045 103.186 188.671 98.915C212.309 90.1145 237.885 100.339 248.993 123.116C252.998 131.14 253.256 132.564 253.256 145.376V145.376C253.256 154.327 251.298 163.169 247.518 171.283L246.022 174.495C237.239 193.261 234.914 200.12 233.364 212.156C232.072 222.38 230.522 226.133 226.776 228.204C223.547 229.886 188.025 229.886 185.054 228.074ZM220.834 206.202C222.126 194.943 224.838 186.79 232.976 169.448C237.239 160.259 240.339 151.588 240.726 148.094C241.889 135.152 235.301 123.375 222.901 116.386C216.701 112.892 214.505 112.374 206.109 112.374C197.842 112.374 195.388 112.892 189.575 116.128C177.95 122.598 171.233 133.34 171.233 145.505C171.233 150.941 172.654 155.212 178.337 167.506C186.991 186.272 190.092 195.461 191.254 205.944V205.944C191.769 210.513 195.634 213.968 200.233 213.968H206.109H212.112C216.569 213.968 220.319 210.629 220.834 206.202V206.202ZM181.441 234.16C178.47 236.878 178.341 240.89 181.183 243.996C182.991 246.066 185.574 246.325 205.337 246.325C217.479 246.325 228.071 245.808 228.846 245.29C231.946 243.219 233.109 239.078 231.559 235.842C231.256 235.282 231.008 234.823 230.669 234.444C229.132 232.724 225.733 232.666 206.888 232.348H206.887C186.737 232.089 183.508 232.348 181.441 234.16ZM184.788 256.287C184.271 258.488 184.917 260.04 187.242 262.499C190.342 265.605 191.247 265.735 204.422 265.735C220.181 265.735 224.185 264.182 224.185 258.358C224.185 251.37 221.473 250.205 204.81 250.205C188.922 250.205 186.467 250.981 184.788 256.287ZM104.828 133.207C102.115 135.795 102.245 140.066 104.957 143.043C106.895 145.243 108.832 145.372 123.3 145.113L123.345 145.112C139.317 144.725 139.448 144.722 141.384 141.36C143.063 138.254 143.063 137.607 141.125 134.501C138.929 131.136 138.671 131.136 122.783 131.136C109.995 131.136 106.378 131.524 104.828 133.207ZM264.619 142.008C262.681 138.902 262.681 138.254 264.36 135.148C266.296 131.787 266.427 131.784 282.14 131.396L282.186 131.395C295.748 131.136 298.59 131.395 300.528 133.207C303.499 135.925 303.628 138.643 300.915 142.525C299.107 145.243 298.073 145.372 282.961 145.372C267.073 145.372 266.815 145.372 264.619 142.008ZM247.45 96.2C246.029 94.7764 244.867 92.7057 244.867 91.541C244.867 88.6938 265.405 67.8576 269.151 66.8223C273.026 65.9163 277.16 69.6694 277.16 73.9402C277.16 76.3991 274.189 80.1522 266.438 88.0467C255.071 99.4354 251.971 100.73 247.45 96.2Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dii'
					x='212.113'
					y='233.786'
					width='137.365'
					height='113.764'
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
					id='filter1_dii'
					x='55.8928'
					y='233.786'
					width='137.314'
					height='113.575'
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
					id='filter2_dii'
					x='101.607'
					y='39.5'
					width='202.5'
					height='228.485'
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
					id='paint-1_radial'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(200 200) rotate(90) scale(200)'
				>
					<stop stop-color='#3C4858' />
					<stop offset='1' stop-color='#1F2D3D' />
				</radialGradient>
			</defs>
		</svg>
	);
};

// export const Gradient = () => {
// 	return (
// 		<svg
// 			width='1520'
// 			height='1520'
// 			viewBox='0 0 1520 1520'
// 			fill='none'
// 			xmlns='http://www.w3.org/2000/svg'
// 			xmlns:xlink='http://www.w3.org/1999/xlink'
// 		>
// 			<g filter='url(#filter0_f)'>
// 				<circle
// 					r='500'
// 					transform='matrix(-1 0 0 1 760 760)'
// 					fill='url(#paint0_angular)'
// 				/>
// 			</g>
// 			<mask
// 				id='mask0'
// 				style='mask-type:alpha'
// 				maskUnits='userSpaceOnUse'
// 				x='260'
// 				y='260'
// 				width='1000'
// 				height='1000'
// 			>
// 				<circle
// 					r='500'
// 					transform='matrix(-1 0 0 1 760 760)'
// 					fill='url(#paint1_angular)'
// 				/>
// 			</mask>
// 			<g mask='url(#mask0)'>
// 				<g style='mix-blend-mode:soft-light'>
// 					<rect
// 						width='2467.47'
// 						height='2467.47'
// 						transform='matrix(-1 0 0 1 1993.73 -473.735)'
// 						fill='url(#pattern0)'
// 					/>
// 				</g>
// 				<g style='mix-blend-mode:soft-light' opacity='0.5'>
// 					<rect
// 						width='2467.47'
// 						height='2467.47'
// 						transform='matrix(-1 0 0 1 1993.73 -473.735)'
// 						fill='url(#pattern1)'
// 					/>
// 				</g>
// 			</g>
// 			<defs>
// 				<filter
// 					id='filter0_f'
// 					x='0'
// 					y='0'
// 					width='1520'
// 					height='1520'
// 					filterUnits='userSpaceOnUse'
// 					color-interpolation-filters='sRGB'
// 				>
// 					<feFlood flood-opacity='0' result='BackgroundImageFix' />
// 					<feBlend
// 						mode='normal'
// 						in='SourceGraphic'
// 						in2='BackgroundImageFix'
// 						result='shape'
// 					/>
// 					<feGaussianBlur
// 						stdDeviation='130'
// 						result='effect1_foregroundBlur'
// 					/>
// 				</filter>
// 				<pattern
// 					id='pattern0'
// 					patternContentUnits='objectBoundingBox'
// 					width='0.83'
// 					height='0.83'
// 				>
// 					<use xlink:href='#image0' transform='scale(0.000405273)' />
// 				</pattern>
// 				<pattern
// 					id='pattern1'
// 					patternContentUnits='objectBoundingBox'
// 					width='0.83'
// 					height='0.83'
// 				>
// 					<use xlink:href='#image0' transform='scale(0.000405273)' />
// 				</pattern>
// 				<radialGradient
// 					id='paint0_angular'
// 					cx='0'
// 					cy='0'
// 					r='1'
// 					gradientUnits='userSpaceOnUse'
// 					gradientTransform='translate(500 500) rotate(62.6703) scale(524.849)'
// 				>
// 					<stop offset='0.266716' stop-color='#FFECB8' />
// 					<stop offset='0.731444' stop-color='#6DB1E2' />
// 					<stop offset='1' stop-color='#FFA376' />
// 				</radialGradient>
// 				<radialGradient
// 					id='paint1_angular'
// 					cx='0'
// 					cy='0'
// 					r='1'
// 					gradientUnits='userSpaceOnUse'
// 					gradientTransform='translate(500 500) rotate(47.333) scale(504.161)'
// 				>
// 					<stop offset='0.266716' stop-color='#FFCA3C' />
// 					<stop offset='0.699498' stop-color='#C36BF8' />
// 					<stop offset='1' stop-color='#FD7E41' />
// 				</radialGradient>
// 			</defs>
// 		</svg>
// 	);
// };
