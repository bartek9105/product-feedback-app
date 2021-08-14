import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'purple' | 'blue' | 'black' | 'red'
	children: string
	className?: string
}

const Button = ({
	variant,
	children,
	className,
	...restProps
}: ButtonProps) => {
	return (
		<button
			{...restProps}
			className={cn(
				styles.button,
				{
					[styles.purple]: variant === 'purple',
					[styles.blue]: variant === 'blue',
					[styles.black]: variant === 'black',
					[styles.red]: variant === 'red'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
