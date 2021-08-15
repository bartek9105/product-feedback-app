import FieldWrapper from '../FieldWrapper/FieldWrapper'
import cn from 'classnames'
import styles from './InputField.module.scss'

type InputFieldProps = {
	error?: string
	type: 'text' | 'email' | 'password'
	placeholder?: string
}

const InputField = ({ type, error, placeholder }: InputFieldProps) => {
	return (
		<FieldWrapper error={error}>
			<input
				type={type}
				placeholder={placeholder}
				className={cn(styles.input, {
					[styles.error]: error
				})}
			/>
		</FieldWrapper>
	)
}

export default InputField
