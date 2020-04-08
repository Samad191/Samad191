import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {GiCongress} from 'react-icons/gi'
import {FaGift} from 'react-icons/fa'


class AppNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand" >
                <GiCongress  style={{ color:'gold' }}  size={80} /> 
                    <h4 style={{marginLeft:'12px',textDecoration: 'underline', color:'DarkSalmon' }}  >Hello</h4>
                
                    
                </Link>
                <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarMain">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMain" >
                    <ul className="navbar-nav mr-auto" >
                        <br/>
                        <Link to="/" className="nav-link" >
                             DashBoard 
                        </Link>
                       
                    </ul>
                </div>

            </div>
            </nav>
        )
    }
}
export default AppNavBar