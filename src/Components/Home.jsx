import React, { useState } from 'react'
import AddContainer from './AddContainer'
import Card from './Card'
import RegisterEmployee from './RegisterEmployee'

const Home = () => {
	const [isActive, setIsActive] = useState(false)

	const handleChange = (e) => {
		setIsActive(true)
	}
	return (
		<div className="container-fluid py-10 ">
			<div className="container h-full mx-auto self-center bg-orange-300 border-2 border-orange-700 rounded-xl justify-around divide-y md:divide-y-0  divide-orange-700 flex flex-wrap p-10 gap-y-10">
				{/* <button type='button'  onClick={<RegisterEmployeee/>}>Add New Employee</button> */}
				<div className="w-full md:w-1/2 px-10" onClick={handleChange}>
					{/* <RegisterEmployeee /> */}
					{isActive ? <RegisterEmployee /> : <AddContainer />}
				</div>
				<div className="w-full border-0 md:border-l block border-orange-700 md:w-1/2 px-10">
					<Card />
				</div>
				{/* <Card/>
<div className='h-400 w-5 bg-zinc-300'></div>
<Card/> */}
			</div>
		</div>
	)
}

export default Home
