import Proptype from 'prop-types'
import React, { useState } from 'react'

export default function NavBar(props) {

    const toggleMode= ()=>{
        console.log("Toggle Button");
        if(toggle==='light'){
            setToggle('dark');
            document.body.style.backgroundColor='grey';
            document.body.style.color='white';
            setToggleText('Enable Light Mode');
        }
        else{
            setToggle('light');
            setToggleText('Enable Dark Mode');
            document.body.style.backgroundColor='white';
        }
    }
    
    const [toggle,setToggle]=useState('light');
    const [toggleText,setToggleText]=useState('Enable Dark Mode');

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${toggle==='light' ? 'light':'dark'} bg-${toggle==='light' ? 'light':'dark'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success mx-2" type="submit">Search</button>
                        </form>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleMode} />
                            <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault" >{toggleText}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

NavBar.Proptype = {
    title: Proptype.string.isRequired
}

NavBar.defaultProps = {
    title: "Word-World"
}
