import classNames from 'classnames'
import styles from './tag.module.scss'

type TagProps = {
	children: string
	className?: string
	variant?: string
}

const Tag = ({ children, className, variant }: TagProps) => {
	return (
		<button
			className={classNames(className, styles.tag, {
				[styles.tagActive]: variant === 'active'
			})}
		>
			{children}
		</button>
	)
}

export default Tag
