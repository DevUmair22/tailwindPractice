import React, { useState } from 'react'

const RegisterEmployee = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		cnic: '',
		designation: '',
		joining: '',
		status: '',
		fuel: '',
		insurance: '',
		accomodation: '',
	})

	const array = []

	const [data, setData] = useState([])

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	const handleSubmit = () => {
		setData([...data, { ...formData }])
		array.push(data)
		localStorage.setItem('data', JSON.stringify(data))
	}

	console.log('my array', data)
	return (
		<>
			<div className="text-center mb-5 md:mb-10 text-xl font-semibold text-black-200">
				<h1>Add Employee</h1>
			</div>
			<div className="p-10 border-orange-700 border-2 overflow-hidden rounded-xl">
				<div>
					<h1 className="font-semibold">Personal Details</h1>
				</div>
				<form className="h-full flex flex-col gap-4 divide-y divide-orange-700 ">
					<div className="flex flex-wrap gap-4 py-5">
						<input
							name="name"
							placeholder="Full Name"
							onChange={onChange}
							type={'text'}
							className="w-full md:w-3/12  bg-transparent p-2 border-b border-b-black  placeholder:text-orange-700 focus:outline-none"
						/>
						<input
							name="phone"
							placeholder="Phone Number"
							onChange={onChange}
							type={'tel'}
							className="w-full md:w-3/12  bg-transparent p-2 border-b border-b-black  placeholder:text-orange-700 focus:outline-none"
						/>
						<input
							name="cnic"
							placeholder="CNIC"
							type={'text'}
							onChange={onChange}
							className="w-full md:w-4/12  bg-transparent p-2 border-b border-b-black  placeholder:text-orange-700 focus:outline-none"
						/>
						<input
							name="designation"
							onChange={onChange}
							placeholder="Designation"
							className="w-full md:w-3/12  bg-transparent p-2 border-b border-b-black  placeholder:text-orange-700 focus:outline-none"
						/>
						<input
							name="experience"
							onChange={onChange}
							placeholder="Work Experience"
							className="w-full md:w-3/12  bg-transparent p-2 border-b border-b-black  placeholder:text-orange-700 focus:outline-none"
						/>
						<input
							name="address"
							onChange={onChange}
							placeholder="Address"
							className="w-full md:w-4/12  bg-transparent p-2 border-b border-b-black  placeholder:text-orange-700 focus:outline-none"
						/>
					</div>

					<div className="py-5">
						<div>
							<label>
								<b>Benifits</b>
							</label>
							<div className="flex gap-x-2 items-center">
								<input
									className="accent-orange-700"
									onChange={onChange}
									name="fuel"
									type={'checkbox'}
								/>
								<label className="font-medium text-orange-700">Fuel Card</label>
							</div>
							<div className="flex gap-x-2 items-center">
								<input
									className="accent-orange-700"
									onChange={onChange}
									name="fuel"
									type={'checkbox'}
								/>
								<label className="font-medium text-orange-700">
									Accomodation
								</label>
							</div>
							<div className="flex gap-x-2 items-center">
								<input
									className="accent-orange-700"
									onChange={onChange}
									name="fuel"
									type={'checkbox'}
								/>
								<label className="font-medium text-orange-700">
									Health Insurance
								</label>
							</div>
						</div>
						<div className="flex justify-around py-5">
							<div className="flex items-center gap-x-2 text-sm">
								<label className="font-semibold text-orange-700">
									Date Joined :
								</label>
								<input
									name="joining"
									type={'date'}
									onChange={onChange}
									className=" bg-transparent p-2 border-b border-b-black  placeholder:text-orange-700 focus:outline-none"
								/>
							</div>
							<div className="flex items-center gap-x-2 text-sm">
								<label className="font-semibold text-orange-700">
									Active Status :
								</label>
								<select
									name="status"
									onChange={onChange}
									className=" bg-transparent border rounded-md  border-orange-500 px-2 py-1 focus:border-orange-700 focus:outline-none focus:ring-orange-700 sm:text-sm"
								>
									<option value={true}>Active</option>
									<option value={false}>In-Active</option>
								</select>
							</div>
						</div>
						<div className="flex justify-center pt-4">
							<button
								type="button"
								onClick={handleSubmit}
								className=" rounded-xl py-2 px-6 items-center bg-orange-700 "
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default RegisterEmployee
