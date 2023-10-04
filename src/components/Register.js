import React, { Component } from 'react';

class Regisgter extends Component {

    render() {
        return (
            <>
                <div className="registration">
                    <form className="form-registration" action="index.html" enctype="multipart/form-data">
                        <h1 className="title">Registration</h1>
                        <hr />
                        <div className="input-control ">
                            <label for="fname">First name</label>
                            <input type="text" name="fname" className="fname" />
                            <div className="error"></div>
                        </div>
                        <div className="input-control">
                            <label for="lname">Last name</label>
                            <input type="text" name="lname" className="lname" />
                            <div className="error"></div>
                        </div>
                        <div className="input-control">
                            <label for="age">Age</label>
                            <input type="number" name="age" className="age" min="15" max="90" value="20" />
                            <div className="error"></div>
                        </div>

                        <div className="input-control">
                            <label for="email">Email</label>
                            <input type="email" name="email" className="email" />
                            <div className="error"></div>
                        </div>
                        <div className="input-control">
                            <label for="password">Password</label>
                            <input type="password" name="password" className="password" />
                            <div className="error"></div>
                        </div>
                        <div className="input-control">
                            <label for="passworda">Password again</label>
                            <input type="password" name="passworda" className="passworda" />
                            <div className="error"></div>
                        </div>
                        <button className="submit" type="submit">Sign Up</button>


                    </form>
                </div>
            </>
        );
    }
}

export default Regisgter;