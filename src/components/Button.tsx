import { ButtonHTMLAttributes } from 'react'
import  '../styles/button.scss';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean;
};


// ... -> rest operator, ou operador de resto
export function Button({ isOutlined, ...props}: ButtonProps) {
	return (
		<button 
         className={`button ${isOutlined ? 'outlined' : ''}`}
         {...props} 
      />
	)
}