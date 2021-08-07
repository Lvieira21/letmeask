import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			primary : string;
			secondary : string;
			accent: string;
			
			background: string;
			backgroundSecondary: string;
			text: string;
			subtext: string;
			placeholder: string; 
			input: string;
			authButton: string;

			border: string;

			questionAccent: string;
			questionBackground: string;
			questionHighlighted: string;
			questionAnswered: string;
		}
	}
}