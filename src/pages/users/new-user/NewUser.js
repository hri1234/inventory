import React from 'react';
//import React, { useEffect, useState } from 'react';

const NewUser = () => {

    return (
        <div className="newUser-container">

            <div className="text">New users</div>
            <div className="form-container">
                <form>
                    <div className="grid-form">
                        <div className="form-item">
                            <label htmlFor="name">
Name</label>
                            <input className="input" type="text" id="name" maxlength="45" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="nuser">
User</label>
                            <input className="input" type="text" maxlength="20" id="nuser" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="pass">Password</label>
                            <input className="input" type="password" id="pass" maxlength="15" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="tel">telephone</label>
                            <input className="input" type="text" id="tel" maxlength="20" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="email">mail</label>
                            <input className="input" type="email" id="email" maxlength="100" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="admin">Administrator</label>
                            <select className="input">
                                <option value="true">Si</option>
                                <option selected value="false">No</option>
                            </select>
                        </div>

                    </div>

                    <div className="button-container">
                        <button type="submit" className="btn">
                           craeer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewUser;
