import React, {Component} from 'react'
import Fire from './Utils/Firebase'

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }
  handleSignUp(){
    Fire.SignUp().then(res => console.log(res))
  }
  render(){
    const liStyle = {
      listStyle: "none"
    }
    return(
      <ul style={liStyle}>
           <li>Full Name<input /*insert placeholder names for data *//></li>
           <li>Company Name<input /*insert placeholder names for data *//></li>
           <li>Security Code<input /*insert placeholder names for data *//></li>
           <li>E-mail<input /*insert placeholder names for data*//></li>
           <li>Password<input /*insert placeholder names for data *//></li>
           <li>Retype Password<input /*insert placeholder names for data *//></li>
           <li><button onClick={e => this.handleSignUp(e)}>SignUp</button></li>
      </ul>
    )
  }
}

export default SignUp
