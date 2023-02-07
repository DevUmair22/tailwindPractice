import React from 'react'
import { employees } from '../theme'

const Card = () => {
	console.log('first', employees)
	return (
		<>
			<div className="w-full max-w-md bg-white border rounded-lg sm: p-12 my-10 bg-orange-400 border-orange-700 ">
				<div className="flex items-center justify-between ">
					<h5 className="text-xl font-bold leading-none text-orange-900 ">
						Current Employees
					</h5>
					<p className="text-md font-medium text-orange-800 hover:underline ">
						View all
					</p>
				</div>

				<div>
					<ul className="divide-y divide-orange-700 pt-5">
						{employees.map((emp, index) => {
							return (
								<li className="py-3 sm:py-4">
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0 ">
											<img
												className="w-10 h-10 rounded-full border border-orange-700"
												key={index}
												src={emp.img}
												alt=""
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-md  text-orange-800 " key={index}>
												{emp.name}
											</p>
											<p className="text-sm text-orange-100" key={index}>
												{emp.title}
											</p>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Card
