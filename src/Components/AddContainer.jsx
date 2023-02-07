import React from 'react'

const AddContainer = () => {
	return (
		<div>
			<div className="container mx-auto ">
				<div className="flex-col scale-90 px-2 py-10 hover:scale-110 delay-200 hover:text-orange-900 hover:bg-orange-400 border-orange-900 min-h-[200px]  rounded-xl  shadow-2xl shadow-orange-800 justify-center text-center hover:cursor-pointer">
					<h1 className="text-3xl font-bold underline ">Register Employee</h1>
					<p>Click here to add new employee</p>
				</div>
			</div>
		</div>
	)
}

export default AddContainer
