import styles from './FieldWrapper.module.scss'

type FieldWrapperProps = {
	children: JSX.Element
	error?: string
	className?: string
}

const FieldWrapper = ({ children, error, className }: FieldWrapperProps) => {
	return (
		<div className={className}>
			<div>{children}</div>
			{error && <p className={styles.errorMessage}>{error}</p>}
		</div>
	)
}

export default FieldWrapper
