import styles from './SelectField.module.scss'
import { useState } from 'react'
import TickIcon from 'icons/tick.svg'
import ArrowDownIcon from 'icons/arrow-down.svg'
import cn from 'classnames'

type SelectFieldProps = {
	options: string[]
	className?: string
	onSelect: (selectedValue: string) => void
}

const SelectField = ({ options, className, onSelect }: SelectFieldProps) => {
	const [selectedValue, setSelectedValue] = useState(options[0])
	const [showDropdownList, toggleDropdownList] = useState(false)

	const handleSelectValue = (value: string) => {
		onSelect(value)
		setSelectedValue(value)
		toggleDropdownList(!showDropdownList)
	}

	return (
		<>
			<div
				className={styles.dropdown}
				onClick={() => toggleDropdownList(!showDropdownList)}
			>
				<span>{selectedValue}</span>
				<ArrowDownIcon />
				{showDropdownList && (
					<ul className={cn(styles.dropdownList, className)}>
						{options.map((option) => (
							<li
								className={styles.dropdownListItem}
								key={option}
								onClick={() => handleSelectValue(option)}
							>
								<span>{option}</span>
								{option === selectedValue && <TickIcon />}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}

export default SelectField
