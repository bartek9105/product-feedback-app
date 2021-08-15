import SelectField from 'components/Form/SelectField'
import { useState } from 'react'

const Home = () => {
	const [selectedValue, setSelectedValue] = useState('')

	return (
		<>
			{selectedValue}
			<SelectField
				onSelect={setSelectedValue}
				options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']}
			/>
		</>
	)
}

export default Home
