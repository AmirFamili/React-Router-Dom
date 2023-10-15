import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Regisgter = () => {


    return (
        <>
            <div className="registration">
                <Formik initialValues={{
                    fname: "",
                    lname: "",
                    age: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}

                    onSubmit={(values,{setSubmitting})=>{
                        values.fname ='';
                        values.lname ='';
                        values.age ='';
                        values.email ='';
                        values.password ='';
                        values.confirmPassword ='';
                       setTimeout(()=>{
                        setSubmitting(false);
                       },2000)
                    }}
          

                    validate={(values) => {
                        const errors = {};


                        if (values.fname === '') {

                            errors.fname = 'Firstname is required';
                        }


                        if (values.lname === '') {

                            errors.lname = 'Lastname is required';
                        }


                        if (values.age === '') {

                            errors.age = 'age is required';
                        } else if (values.age < 20) {
                            errors.age = 'You must be older than 20 years';
                        }



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

                        if (values.confirmPassword == '') {
                            errors.confirmPassword = "Password can not be empty";
                        } else if (values.confirmPassword !== values.password) {
                            errors.confirmPassword = "Password does not match";
                        }
                        return errors;
                    }}



                >
                   

                    {({isSubmitting})=>(
                         <Form className="form-registration" action="index.html" enctype="multipart/form-data">
                         
                         <h1 className="title">Registration</h1>
                         <hr />
                         <div className="input-control ">
                             <label for="fname">First name</label>
                             <Field type="text" name="fname" className="fname" />
                             <ErrorMessage name='fname' >
                                 {(errorMsg) => <div className="error">{errorMsg}</div>}
                             </ErrorMessage>


                         </div>
                         <div className="input-control ">
                             <label for="lname">Last name</label>
                             <Field type="text" name="lname" className="lname" />
                             <ErrorMessage name='lname' >
                                 {(errorMsg) => <div className="error">{errorMsg}</div>}
                             </ErrorMessage>
                         </div>
                         <div className="input-control">
                             <label for="age">Age</label>
                             <Field type="number" name="age" className="age" min="15" max="90" />
                             <ErrorMessage name='age' >
                                 {(errorMsg) => <div className="error">{errorMsg}</div>}
                             </ErrorMessage>
                         </div>

                         <div className="input-control">
                             <label for="email">Email</label>
                             <Field type="email" name="email" className="email" />
                             <ErrorMessage name='email' >
                                 {(errorMsg) => <div className="error">{errorMsg}</div>}
                             </ErrorMessage>
                         </div>
                         <div className="input-control">
                             <label for="password">Password</label>
                             <Field type="password" name="password" />
                             <ErrorMessage name='password' >
                                 {(errorMsg) => <div className="error">{errorMsg}</div>}
                             </ErrorMessage>
                         </div>
                         <div className="input-control">
                             <label for="confirmPassword">Password again</label>
                             <Field type="password" name="confirmPassword" className="passworda" />
                             <ErrorMessage name="confirmPassword" >
                                 {(errorMsg) => <div className="error">{errorMsg}</div>}
                             </ErrorMessage>
                         </div>
                         <button className="submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? <span> <i class="fas fa-circle-notch fa-spin"></i></span>:<span>Sign in</span> }</button>


                     </Form>
                    )}
                       
               

                </Formik>
            </div>
        </>
    );
}


export default Regisgter;