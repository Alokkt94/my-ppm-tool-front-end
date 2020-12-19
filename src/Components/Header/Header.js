import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render(){
    return (
            <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                <a className="navbar-brand ml-5 text-light" href="#">Personal Project Management Tool</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link mr-3 text-light" to="/">DashBoard</Link></li>
                        <li className="nav-item"><a className="nav-link mr-3 text-light" href="#">Sign Up</a></li>
                        <li className="nav-item"><a className="nav-link mr-3 text-light" href="#">Login</a></li>
                    </ul>
                </div>
            </nav>
    )
}
}

export default Header
