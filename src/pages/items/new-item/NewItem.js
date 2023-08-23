import React from 'react';
//import React, { useEffect, useState } from 'react';
import '../../../styles/new-form.css'

const NewItem = () => {

    return (
        <div className="newItem-container">
            <div className="text">New items</div>
            <div className="form-container">
                <form>
                    <div className="grid-form">
                        <div className="form-item">
                            <label htmlFor="name">name</label>
                            <input className="input" type="text" id="name" maxlength="45" required />
                        </div>

                        <div className="two-together">
                            <div className="form-item">
                                <label htmlFor="stock">Stock</label>
                                <input className="input" type="number" min="0" id="stock" required />
                            </div>
                            <div className="form-item">
                                <label htmlFor="weight">Weight</label>
                                <input className="input" type="text" id="weight" maxlength="15" required />
                            </div>
                        </div>

                        <div className="form-item">
                            <label htmlFor="brand">Brand</label>
                            <input className="input" type="text" id="brand" maxlength="45" required />
                        </div>

                        <div className="two-together">
                            <div className="form-item">
                                <label htmlFor="purchasePrice">purchase price</label>
                                <input className="input" type="number" id="purchasePrice" required />
                            </div>
                            <div className="form-item">
                                <label htmlFor="salePrice">
Sale price</label>
                                <input className="input" type="number" id="salePrice" required />
                            </div>
                        </div>

                        <div className="form-item">
                            <label htmlFor="provider">Supplier</label>
                            <input className="input" type="text" id="provider" maxlength="45" required />
                        </div>

                        <div className="form-item">
                            <label htmlFor="category">
                            Category
                            </label>
                            <input className="input" type="text" id="category" maxlength="45" required />
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

export default NewItem;
