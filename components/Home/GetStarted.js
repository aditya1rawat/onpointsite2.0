import React from 'react';
import { Box } from '@chakra-ui/react';

const GetStarted = () => {
	return (
		<Box>
			<Box visibility={{ lg: 'visible', md: 'hidden', sm: 'hidden' }}>
				<Blur />
			</Box>
			<GetStarted />
		</Box>
	);
};

export const Blur = () => {
	return (
		<Box pos='absolute' top={500}>
			<svg
				width='741'
				height='1060'
				viewBox='0 0 741 1060'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='211'
					cy='530'
					r='511.646'
					transform='rotate(-177.906 211 530)'
					fill='url(#paint0_linear)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear'
						x1='479.852'
						y1='144.521'
						x2='-113.574'
						y2='922.337'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#5465FF' />
						<stop offset='1' stop-color='#09E85E' />
					</linearGradient>
				</defs>
			</svg>
		</Box>
	);
};
export const GetStarted1 = () => {
	return (
		<Box pos='absolute' top={500} right='0' zIndex='2'>
			<svg
				width='843'
				height='1034'
				viewBox='0 0 843 1034'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g filter='url(#filter0_d)'>
					<circle
						cx='325.932'
						cy='513.068'
						r='266.932'
						fill='url(#paint0_linear)'
					/>
				</g>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M381.009 537.092C381.009 567.806 356.112 592.703 325.398 592.703C294.685 592.703 269.788 567.806 269.788 537.092C269.788 506.378 294.685 481.481 325.398 481.481C356.112 481.481 381.009 506.378 381.009 537.092ZM392.132 537.092C392.132 573.945 362.252 603.825 325.398 603.825C288.545 603.825 258.665 573.945 258.665 537.092C258.665 500.238 288.545 470.359 325.398 470.359C362.252 470.359 392.132 500.238 392.132 537.092ZM294.812 537.092C299.423 537.092 303.154 533.355 303.154 528.75C303.154 524.145 299.423 520.408 294.812 520.408C290.202 520.408 286.471 524.145 286.471 528.75C286.471 533.355 290.202 537.092 294.812 537.092ZM364.326 528.75C364.326 533.355 360.595 537.092 355.984 537.092C351.374 537.092 347.643 533.355 347.643 528.75C347.643 524.145 351.374 520.408 355.984 520.408C360.595 520.408 364.326 524.145 364.326 528.75ZM325.404 573.239C339.029 573.239 350.618 563.701 353.209 550.994C354.5 544.655 336.526 542.653 325.404 542.653C314.282 542.653 296.158 543.937 297.599 550.994C300.19 563.701 311.774 573.239 325.404 573.239ZM325.404 564.897C331.543 564.897 336.526 562.117 336.526 562.117C336.526 562.117 331.543 556.555 325.404 556.555C319.259 556.555 314.282 562.117 314.282 562.117C314.282 562.117 319.259 564.897 325.404 564.897Z'
					fill='white'
				/>
				<g filter='url(#filter1_dii)'>
					<path
						d='M230.381 677.146C227.547 677.146 224.797 676.796 222.131 676.096C219.464 675.396 217.297 674.462 215.631 673.296L218.881 665.996C220.447 667.029 222.264 667.862 224.331 668.496C226.397 669.129 228.431 669.446 230.431 669.446C234.231 669.446 236.131 668.496 236.131 666.596C236.131 665.596 235.581 664.862 234.481 664.396C233.414 663.896 231.681 663.379 229.281 662.846C226.647 662.279 224.447 661.679 222.681 661.046C220.914 660.379 219.397 659.329 218.131 657.896C216.864 656.462 216.231 654.529 216.231 652.096C216.231 649.962 216.814 648.046 217.981 646.346C219.147 644.612 220.881 643.246 223.181 642.246C225.514 641.246 228.364 640.746 231.731 640.746C234.031 640.746 236.297 641.012 238.531 641.546C240.764 642.046 242.731 642.796 244.431 643.796L241.381 651.146C238.047 649.346 234.814 648.446 231.681 648.446C229.714 648.446 228.281 648.746 227.381 649.346C226.481 649.912 226.031 650.662 226.031 651.596C226.031 652.529 226.564 653.229 227.631 653.696C228.697 654.162 230.414 654.646 232.781 655.146C235.447 655.712 237.647 656.329 239.381 656.996C241.147 657.629 242.664 658.662 243.931 660.096C245.231 661.496 245.881 663.412 245.881 665.846C245.881 667.946 245.297 669.846 244.131 671.546C242.964 673.246 241.214 674.612 238.881 675.646C236.547 676.646 233.714 677.146 230.381 677.146ZM250.004 649.346H259.504V676.446H250.004V649.346ZM254.754 646.346C253.021 646.346 251.621 645.862 250.554 644.896C249.487 643.929 248.954 642.729 248.954 641.296C248.954 639.862 249.487 638.662 250.554 637.696C251.621 636.729 253.021 636.246 254.754 636.246C256.487 636.246 257.887 636.712 258.954 637.646C260.021 638.546 260.554 639.712 260.554 641.146C260.554 642.646 260.021 643.896 258.954 644.896C257.887 645.862 256.487 646.346 254.754 646.346ZM294.828 649.346V671.496C294.828 676.529 293.461 680.296 290.728 682.796C287.994 685.329 284.061 686.596 278.928 686.596C276.261 686.596 273.761 686.296 271.428 685.696C269.094 685.096 267.111 684.212 265.478 683.046L268.928 676.396C270.028 677.296 271.411 677.996 273.078 678.496C274.778 679.029 276.444 679.296 278.078 679.296C280.578 679.296 282.411 678.746 283.578 677.646C284.744 676.546 285.328 674.912 285.328 672.746V671.846C283.494 673.979 280.811 675.046 277.278 675.046C274.878 675.046 272.661 674.512 270.628 673.446C268.594 672.346 266.978 670.812 265.778 668.846C264.578 666.846 263.978 664.546 263.978 661.946C263.978 659.379 264.578 657.112 265.778 655.146C266.978 653.146 268.594 651.612 270.628 650.546C272.661 649.446 274.878 648.896 277.278 648.896C281.144 648.896 283.978 650.146 285.778 652.646V649.346H294.828ZM279.528 667.496C281.228 667.496 282.628 666.979 283.728 665.946C284.861 664.912 285.428 663.579 285.428 661.946C285.428 660.312 284.878 658.996 283.778 657.996C282.678 656.962 281.261 656.446 279.528 656.446C277.794 656.446 276.361 656.962 275.228 657.996C274.128 658.996 273.578 660.312 273.578 661.946C273.578 663.579 274.144 664.912 275.278 665.946C276.411 666.979 277.828 667.496 279.528 667.496ZM318.582 648.896C321.948 648.896 324.648 649.896 326.682 651.896C328.748 653.896 329.782 656.912 329.782 660.946V676.446H320.282V662.496C320.282 658.796 318.798 656.946 315.832 656.946C314.198 656.946 312.882 657.479 311.882 658.546C310.915 659.612 310.432 661.212 310.432 663.346V676.446H300.932V649.346H309.982V652.296C311.048 651.196 312.315 650.362 313.782 649.796C315.248 649.196 316.848 648.896 318.582 648.896ZM366.897 677.146C361.697 677.146 357.647 675.729 354.747 672.896C351.88 670.062 350.447 666.046 350.447 660.846V641.446H360.347V660.546C360.347 666.146 362.563 668.946 366.997 668.946C371.397 668.946 373.597 666.146 373.597 660.546V641.446H383.347V660.846C383.347 666.046 381.897 670.062 378.997 672.896C376.13 675.729 372.097 677.146 366.897 677.146ZM406.653 648.896C409.12 648.896 411.353 649.479 413.353 650.646C415.387 651.779 416.987 653.412 418.153 655.546C419.353 657.646 419.953 660.096 419.953 662.896C419.953 665.696 419.353 668.162 418.153 670.296C416.987 672.396 415.387 674.029 413.353 675.196C411.353 676.329 409.12 676.896 406.653 676.896C403.487 676.896 400.97 675.946 399.103 674.046V686.146H389.603V649.346H398.653V652.046C400.42 649.946 403.087 648.896 406.653 648.896ZM404.653 669.346C406.32 669.346 407.687 668.779 408.753 667.646C409.82 666.479 410.353 664.896 410.353 662.896C410.353 660.896 409.82 659.329 408.753 658.196C407.687 657.029 406.32 656.446 404.653 656.446C402.987 656.446 401.62 657.029 400.553 658.196C399.487 659.329 398.953 660.896 398.953 662.896C398.953 664.896 399.487 666.479 400.553 667.646C401.62 668.779 402.987 669.346 404.653 669.346Z'
						fill='white'
					/>
				</g>
				<g filter='url(#filter2_dii)'>
					<path
						d='M345.103 314.964V419.964H315.403V337.914H295.903V314.964H345.103Z'
						fill='white'
					/>
				</g>
				<defs>
					<filter
						id='filter0_d'
						x='-191'
						y='0.135437'
						width='1033.86'
						height='1033.86'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood
							flood-opacity='0'
							result='BackgroundImageFix'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						/>
						<feOffset dy='4' />
						<feGaussianBlur stdDeviation='125' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
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
					</filter>
					<filter
						id='filter1_dii'
						x='210.631'
						y='632.246'
						width='214.323'
						height='60.35'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood
							flood-opacity='0'
							result='BackgroundImageFix'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						/>
						<feOffset dy='1' />
						<feGaussianBlur stdDeviation='2.5' />
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
						<feGaussianBlur stdDeviation='2' />
						<feComposite
							in2='hardAlpha'
							operator='arithmetic'
							k2='-1'
							k3='1'
						/>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
						/>
						<feBlend
							mode='normal'
							in2='effect2_innerShadow'
							result='effect3_innerShadow'
						/>
					</filter>
					<filter
						id='filter2_dii'
						x='290.903'
						y='310.964'
						width='59.2'
						height='115'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood
							flood-opacity='0'
							result='BackgroundImageFix'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						/>
						<feOffset dy='1' />
						<feGaussianBlur stdDeviation='2.5' />
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
						<feGaussianBlur stdDeviation='2' />
						<feComposite
							in2='hardAlpha'
							operator='arithmetic'
							k2='-1'
							k3='1'
						/>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
						/>
						<feBlend
							mode='normal'
							in2='effect2_innerShadow'
							result='effect3_innerShadow'
						/>
					</filter>
					<linearGradient
						id='paint0_linear'
						x1='298.572'
						y1='366.255'
						x2='467.406'
						y2='683.904'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#FC466B' />
						<stop offset='1' stop-color='#5465FF' />
					</linearGradient>
				</defs>
			</svg>
		</Box>
	);
};

export default GetStarted;
