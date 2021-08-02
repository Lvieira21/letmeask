import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'; 


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean;
};


// ... -> rest operator, ou operador de resto
export function Button({ isOutlined, ...props}: ButtonProps) {
	return (
		<StyledButton 
         className={`button ${isOutlined ? 'outlined' : ''}`}
         {...props} 
      />
	)
}