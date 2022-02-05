import React, { useState, useEffect } from 'react';
import {validEmail} from './rulesCheck.js';


function Mail({onClick}) {
    const [email, setEmail] = useState(' ');
    const [emailerr, setEmailErr] = useState(false);
    const [box , setBox] = useState(false);
    
    const validate = () => {
        if (validEmail(email,box)) {
           setEmailErr(true);
        } else {
            setEmailErr(false);
        }
    };
    useEffect( () =>{if(email !== ' '){validate()}}, [email,box])

    const handleNameChange = (event) => {
        event.preventDefault();
        onClick(email)
    }

    return(
        <form onSubmit={handleNameChange}>
            <div className= "mail">
                <input 
                className={`input ${emailerr ? 'input__error' : ''}`} type="email" id="mail" name="Mail" value={email}
                onFocus={()=> {validate();}}
                onChange={(e)=> { setEmail(e.target.value); } }

                placeholder="Type your email address here…" />
                
                <button className={`mail__button ${emailerr ? 'mail__button__error':''}`} disabled={validEmail(email,box) !== false ?"true":""}>
                    <div>
                        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="1"
                                d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
                        </svg>
                    </div>
                </button>
                <label className={`mail__label ${emailerr ? 'mail__label__visible' : 'mail__label__hidden'}`} htmlFor="mail">{validEmail(email,box)}</label>
            </div>
            <div className="terms">
                <input type="checkbox" onChange={(e)=> { setBox(e.target.checked)}} value={box} id="checkbox-id" />
                <label htmlFor="checkbox-id"></label>
                <div className="terms__label">I agree to </div>
                <a className="terms__labelUrl" href="/#">terms of service</a>
            </div>
    </form>
    );
}

export default Mail;
