import React , {Component} from 'react'
import logo from '../../../images/logo.jpg'
import './Navbar.css'

class NavBar extends Component{
    
    render(){
       return <div className="navbar">
                <div className='logo'>
                    <img src={ logo } height="60vh" width="200vw" className='img'/>
                </div>
                <div className='adminTabs'>
                    <button className='tab' onClick={this.props.selectTab}>Categories</button>
                    <button className='tab' onClick={this.props.selectTab}>Books</button>
                    <button className='tab' onClick={this.props.selectTab}>Authors</button>
                </div>
             </div>
    }
}

export default NavBar;