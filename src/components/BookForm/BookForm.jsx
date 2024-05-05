//import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./BookForm.module.css";

function BookForm() {
  const Schema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setErrors }) => {
    if (!values.name || !values.email || !values.date) {
      setErrors({
        name: "Requared",
        email: "Requared",
        date: "Requared",
      });
      return;
    }
    window.location.reload();
  };

  return (
    <div className={css.formWrapper}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.formDiv}>
              <div className={css.inputContainer}>
                <Field
                  className={`${css.input} ${
                    errors.name && touched.name ? css.inputError : ""
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
                {errors.name && touched.name ? (
                  <div className={css.errorNameMessage}>{errors.name}</div>
                ) : null}
              </div>
              <div className={css.inputContainer}>
                <Field
                  className={`${css.input} ${
                    errors.email && touched.email ? css.inputError : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className={css.errorNameMessage}>{errors.email}</div>
                ) : null}
              </div>
              <div className={css.inputContainer}>
                <Field
                  className={`${css.input} ${
                    errors.date && touched.date ? css.inputError : ""
                  }`}
                  id="date"
                  name="date"
                  placeholder="Booking date"
                  type="date"
                />
                {errors.date && touched.date ? (
                  <div className={css.errorNameMessage}>{errors.date}</div>
                ) : null}
              </div>
              <div className={css.inputContainer}>
                <Field
                  className={css.inputComment}
                  id="comment"
                  name="comment"
                  placeholder="Comment"
                  type="text"
                />
              </div>
            </div>

            <button className={css.btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookForm;
