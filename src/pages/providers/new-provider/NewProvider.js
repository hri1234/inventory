import React from 'react';
//import React, { useEffect, useState } from 'react';

const NewProvider = () => {

    return (
        <div className="newProvider-container">

            <div className="text">new provider</div>
            <div className="form-container">
                <form>
                    <div className="grid-form">
                        <div className="form-item">
                            <label htmlFor="name">name</label>
                            <input className="input" type="text" id="name" maxlength="45" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="tel">
telephone</label>
                            <input className="input" type="text" id="tel" maxlength="20" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="email">
mail</label>
                            <input className="input" type="email" id="email" maxlength="100" required />
                        </div>
                    </div>

                    <div className="button-container">
                        <button type="submit" className="btn">
                            
Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewProvider;
