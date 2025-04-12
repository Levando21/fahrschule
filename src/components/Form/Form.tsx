/** @format */

import React from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import "./Form.styles.css";

interface MyFormValues {
	name: string;
	nachname: string;
	adresse: string;
	postleihzahl: string;
	handy: string;
	email: string;
}

const Form: React.FC = () => {
	const initialValues: MyFormValues = {
		name: "",
		nachname: "",
		adresse: "",
		postleihzahl: "",
		handy: "",
		email: "",
	};

	return (
		<div className="form-container">
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					console.log({ values, actions });
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false); // Marks the form as not submitting
				}}>
				<FormikForm>
					<label htmlFor="name">Name</label>
					<Field
						id="name"
						name="name"
						placeholder="Name"
						type="text"
					/>

					<label htmlFor="nachname">Nachname</label>
					<Field
						id="nachname"
						name="nachname"
						placeholder="Nachname"
						type="text"
					/>

					<label htmlFor="adresse">Adresse</label>
					<Field
						id="adresse"
						name="adresse"
						placeholder="Adresse"
						type="text"
					/>
					<label htmlFor="postleizahl">Postleihzahl</label>
					<Field
						id="postleihzahl"
						name="postleihzahl"
						placeholder="Postleihzahl"
						type="text"
					/>
					<label htmlFor="handy">Handy</label>
					<Field
						id="handy"
						name="handy"
						placeholder="Handy"
						type="text"
					/>
					<label htmlFor="email">Email</label>
					<Field
						id="email"
						name="email"
						placeholder="Email"
						type="email"
					/>
					<button type="submit">Absenden</button>
				</FormikForm>
			</Formik>
		</div>
	);
};

export default Form;
