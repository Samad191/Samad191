import React, {Component} from 'react';
import './App.css';
import ListItems from './listItems'
// import Person from './Person/Person' ;
import X from './1.gif'
import A from './3.gif'
import Z from './6.gif'
import './img.css'
import NavBar from './nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './dragon.css' 
import Person from './comp'
import styled from 'styled-components';
import {FiShoppingCart} from 'react-icons/fi'
import {GiCongress} from 'react-icons/gi'
import {FaDragon} from 'react-icons/fa'
import {FaPaypal} from 'react-icons/fa'
import {FaCcVisa} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'
import {FaBtc} from 'react-icons/fa'
import {FaEthereum} from 'react-icons/fa'
import {FaGift} from 'react-icons/fa'
import {FaSignInAlt} from 'react-icons/fa'

import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,

  } from "react-share";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLogin: false,
        }
    }


    clickHandler = () => {
        const doesShow = this.state.showLogin;
        this.setState({ showLogin: !doesShow })
        
    }


    render() {
        
        const style = {
            margintop: '100px',
            marginleft: '300px'
        }

        let Y = null;

        if(this.state.showLogin===true) {
            Y = (
                //  <div className="login" > </div>
                <Person name="Ali" />
                 
            )
        }

        

        
        return (   
        
            <div style={{display:'flex', flexDirection:'column'}} >
                <Router>
                <NavBar/>
                </Router> 
                
            <div className="gift" >
                <FaGift cursor= 'pointer' size={60} style={{color:'DarkBlue' , paddingTop: '5px',paddingBlock: '10px', borderColor: 'red' , borderStyle: 'solid'}} /> 
                {/* <p style={{marginLeft:'1000px'}} >G
                <div><FaSignInAlt size={10} /> </div>
                </p> */}
                <p style={{fontSize:'20px'}}>Deals</p>
                </div>   
                <br/>

                <div style={{disply:"flex",height:'100%', width:'100%', flexDirection:"row", justifyContent:'space-between'}}>

            <div style={{disply:"flex",flexDirection:"row"}}>
            <h4>Sign In</h4> 
                <p>Email</p>
                <input type="text" size={20} />
                <br/>
                <br/>
                <p>Password</p>
                
                <input type="password" size={20} />
                <br/>
                <br/>
                
                
                <FaSignInAlt style={{marginLeft:'100px'}} cursor= 'pointer' size = {32}/>
                </div>
                
                

                
            <div className="App3" style={{disply:"flex",flexDirection:"row"}} >
                <br/>
            <FaPaypal className="icons"  cursor= 'pointer' style={{marginLeft:"50px" , color:'purple' }} size={42} round={true} />
            <FaCcVisa className="icons" cursor= 'pointer' style={{marginLeft:"50px", color :'white'  }}  size={42} round={true} />
            <FaCcMastercard className="icons" cursor= 'pointer'  style={{marginLeft:"50px", color :'red' }} size={42} round={true} />
            <FaBtc className="icons" cursor= 'pointer' style={{marginLeft:"50px", color:"orange" }} size={42} round={true}  />
            <FaEthereum className="icons" cursor= 'pointer'  style={{marginLeft:"45px", color:"purple" }} size={42} round={true} />
            

                </div>
            </div>
            <br/>
            <br/>

             <div  className = "App">  
            
          <header>
           
                  {/* <img style={{height:'200px' ,marginRight:'60px' }  } src= {X} alt="Hello" /> */}
                  <img className="Img" src= {X} style={{marginTop:'90px'}} alt="Hello" />
                  <img src={A}  style={{marginTop:'90px'}} />
                  <img src={Z} style={{marginTop:'90px'}} />
                  
                  <br/>
                  <br/>
              
                  {/* <input type="text" placeholder="Enter text" 
                //   value = {this.state.currentItem.text} 
                //   onChange={this.handleInput} 
                /> */}
                  {/* <button className="button" >Next</button> */}
                  
                  <FiShoppingCart className="cart" size={50}  cursor= 'pointer'/>
                  <FiShoppingCart className="cart" size={50}  style={{marginLeft:'270px'}} cursor= 'pointer'/>
                  <FiShoppingCart className="cart" size={50}  style={{marginLeft:'290px'}} cursor= 'pointer'/>
                                
            
          </header>

          <div className="App2" >
                  <TwitterIcon className="icons" size={42} round={true} cursor= 'pointer' /> 
                  <br/>
                  <FacebookIcon className="icons" size={42} round={true} cursor= 'pointer' />
                  <br/>
                  <WhatsappIcon className="icons" size={42} round={true}  cursor= 'pointer' />
                  <br/>
                  <br/>
                  <br/>
                  <br/>

                  <div className="B" >
                      <FaDragon className="dragon" size={60} cursor='grabbing' />

                  </div>
                  


          </div>
          

          </div> 
          </div>
        );
    }
}

export default App