import React, { Component } from 'react';
import { data } from './MenuItems'
import Button from '../Button';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render() {
        return (
            <div className="NavbarItems">
                <h1 className="navbar-logo">React<i className='fab fa-react'/></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </div>
        );
    }
}

export default Navbar;