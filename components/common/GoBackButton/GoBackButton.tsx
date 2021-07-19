import { ButtonHTMLAttributes } from 'react'
import styles from './GoBackButton.module.scss'
import classNames from 'classnames'
import ArrowLeft from '../../../icons/arrow-left.svg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: string
	variant: 'white' | 'black'
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
				[styles.black]: variant === 'black',
				[styles.white]: variant === 'white'
			})}
		>
			<span>
				<ArrowLeft className={styles.arrowLeftIcon} />
			</span>
			<span>{children}</span>
		</button>
	)
}

export default Button
