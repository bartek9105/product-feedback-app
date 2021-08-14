import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import style from './GoBackButton.module.scss'
import ArrowLeftIcon from 'icons/arrow-left.svg'

type GoBackButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'white' | 'black'
	className?: string
}

const GoBackButton = ({
	variant,
	className,
	...restProps
}: GoBackButtonProps) => {
	return (
		<button
			{...restProps}
			className={cn(
				style.button,
				{
					[style.white]: variant === 'white',
					[style.black]: variant === 'black'
				},
				className
			)}
		>
			<ArrowLeftIcon className={style.arrowLeftIcon} />
			Go Back
		</button>
	)
}

export default GoBackButton
