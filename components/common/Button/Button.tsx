import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: string
	variant: 'purple' | 'blue' | 'black' | 'red'
	className?: string
}

const Button = ({
	className,
	variant,
	children,
	...buttonProps
}: ButtonProps) => {
	return (
		<button
			{...buttonProps}
			className={classNames(className, styles.btn, {
				[styles.purple]: variant === 'purple',
				[styles.blue]: variant === 'blue',
				[styles.black]: variant === 'black',
				[styles.red]: variant === 'red'
			})}
		>
			{children}
		</button>
	)
}

export default Button
