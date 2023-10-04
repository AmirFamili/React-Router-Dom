import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <>

                <div className="log-in">
                    <form className="form-log-in" action="index.html" enctype="multipart/form-data">

                        <h1 className="title">Log In</h1>
                        <hr />
                        <div className="input-control">

                            <div className="input-control">
                                <label for="email">Email</label>
                                <input type="email" name="email" className="email-log-in" />
                                <div className="error"></div>
                            </div>

                            <div className="input-control">
                                <label for="password">Password</label>
                                <input type="password" name="password" className="password-log-in" />
                                <div className="error"></div>
                            </div>

                            <button className="submit" type="submit">Log In</button>
                        </div>

                    </form>
                </div>
                </>
        );
    }
}

export default Login;