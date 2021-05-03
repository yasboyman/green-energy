import React, {useState} from 'react';
import './App.scss';
import green from './assets/green.svg';


const App = () => {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="app">
            <div className="container">
                <img alt="green-logo" className="logo" src={green}/>
                <div>
                    <p className="title">Operations studio</p>
                    <p className="sub-title">Please enter your email below</p>
                </div>

                <div className="input-container">
                    <p className="label">Email Address</p>
                    <input
                        className="input"
                        value={email}
                        onChange={({target: {value}}) => setEmail(value)}
                        type="text"/>
                    <div className=" checkbox-container">
                        <form onChange={() => setIsChecked(prevState => !prevState)}>
                            <input
                                className="checkbox"
                                type="checkbox"
                                checked={isChecked}/>
                        </form>
                        <p
                            onClick={() => setIsChecked(prevState => !prevState)}
                            className="checkbox-text">Remember this device</p>
                    </div>
                </div>
                <button
                    className="button"
                    onClick={() => console.log('Email: ', email)}>
                    Sign In
                </button>

            </div>
        </div>
    );
}

export default App;
