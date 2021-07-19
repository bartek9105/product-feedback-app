import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import styles from './LikeButton.module.scss'
import ArrowUpIcon from '../../../icons/arrow-up.svg'

type LikeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string
	likesCount: number
	variant?: string
}

const LikeButton = ({ className, likesCount, variant }: LikeButtonProps) => {
	return (
		<button
			className={classNames(className, styles.likesBtn, {
				[styles.likesBtnActive]: variant === 'active'
			})}
		>
			<span>
				<ArrowUpIcon className={styles.likesBtnIcon} />
			</span>
			<span>{likesCount}</span>
		</button>
	)
}

export default LikeButton
