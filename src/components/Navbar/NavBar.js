import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from "./MenuItems"
import {Button} from "../Buttons"
import "./NavBar.css"

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render () {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    React <i className="fab fa-react"></i>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key = {index} >
                                <Link to={item.url} className={item.cName}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar