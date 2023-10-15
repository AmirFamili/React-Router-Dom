import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Login = () => {

    return (
        <>


            <div className="log-in">



                <Formik initialValues={{
                    email: "",
                    password: "",

                }}

                    onSubmit={(values, { setSubmitting }) => {
                        values.email = '';
                        values.password = '';

                        setTimeout(() => {
                            setSubmitting(false);
                        }, 2000)
                    }}


                    validate={(values) => {
                        const errors = {};

                        if (values.email === '') {

                            errors.email = 'Provide valid email address';
                        } else if (!values.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                            errors.email = 'This is not a valid email address'
                        }

                        if (values.password == '') {

                            errors.password = 'Password can not be empty';
                        } else if (values.password.length < 8) {
                            errors.password = 'You must use at least 8 characters';
                        }


                        return errors;
                    }}



                >
                    {({isSubmitting }) => (
                    <Form className="form-log-in" action="index.html" enctype="multipart/form-data">

                        <h1 className="title">Log In</h1>
                        <hr />
                        <div className="input-control">
                            <div className="input-control">
                                <label for="email">Email</label>
                                <Field type="email" name="email" className="email-log-in" />
                                <ErrorMessage name='email' >
                                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                                </ErrorMessage>
                            </div>

                            <div className="input-control">
                                <label for="password">Password</label>
                                <Field type="password" name="password" className="password-log-in" />
                                <ErrorMessage name='password' >
                                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                                </ErrorMessage>
                            </div>


                           
                            <button className="submit" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? <span><i class="fas fa-circle-notch fa-spin"></i></span> : <span>Log in</span>}</button>

                        </div>

                    </Form>)}
                   
                </Formik>
            </div>
        </>
    );
}


export default Login;