/** @format */

import React from "react";

type Course = {
	id: number;
	name: string;
	description: string;
};

const courses: Course[] = [
	{ id: 1, name: "Klasse B", description: "PKW-Führerschein mit 18 Jahren" },
	{ id: 2, name: "Klasse A", description: "Motorradführerschein" },
	{ id: 3, name: "Klasse C", description: "LKW-Führerschein" },
];

const Courses: React.FC = () => {
	return (
		<div className="p-10">
			<h2 className="text-2xl font-bold">Unsere Kurse</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
				{courses.map((course) => (
					<div
						key={course.id}
						className="p-4 border rounded shadow">
						<h3 className="text-xl font-semibold">{course.name}</h3>
						<p>{course.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Courses;
