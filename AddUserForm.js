import React, { useState } from 'react'

let sum;
const AddUserForm = props => {
	const initialFormState = { id: null, 
							name: '', 
							cabang: 0, 
							dealer: 0, 
							cod: 0, 
							jtr: 0, 
							gosend: 0, 
							reguler: 0, 
							total: 0
							}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })

		sum = value.toString()
		.split('+')
		.map(value => Number(value))
		.reduce((agg, value) => agg + value, 0);
		console.log(sum)
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				props.addUser(user)
				setUser(initialFormState)
			}}
		>	
			<label>Nama</label>
			<input type="text" name="name" value={user.name}  onChange={handleInputChange} />
			<h2>Input Fee</h2>
			<hr></hr>
			<label>Cabang</label>
			<input type="text" name="cabang" value={user.cabang} onChange={handleInputChange} />
			<p>{`Nilainya: ${sum}`}</p>
			<label>Dealer</label>
			<input type="text" name="dealer" value={user.dealer} onChange={handleInputChange} />
			<label>COD</label>
			<input type="number" name="cod" value={user.cod} onChange={handleInputChange} />
			<label>JTR</label>
			<input type="number" name="jtr" value={user.jtr} onChange={handleInputChange} />
			<label>Gosend</label>
			<input type="number" name="gosend" value={user.gosend} onChange={handleInputChange} />
			<label>Reguler</label>
			<input type="number" name="reguler" value={user.reguler} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm;