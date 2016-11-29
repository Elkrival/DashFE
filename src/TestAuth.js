import React, {Component} from 'react'
import Fire from './Utils/Firebase'
import Helpers from './Utils/Api'

class TestAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: 'SELECT user_dim.user_properties.value.value.string_value FROM [firebase-teqcharging:TEQQueue_TEQCharging_TEQ_IOS.app_events_20160913]',
      // query: 'https://www.googleapis.com/bigquery/v2/projects/firebase-teqcharging/datasets/TEQQueue_TEQCharging_TEQ_IOS?key=AIzaSyC1LUGfFGzW4NGo6V59Nfxp-v_Mk694W6k',
      email: "",
      password: ""
    }
  }
  handleSignIn(e,email, password){
    console.log('Hello', e)
    e.preventDefault()
    Fire.SignIn(this.state.email, this.state.password).catch(error => {
      console.log(error)}).then(res => {
      console.log(res, 'I\'m in');
    })
  }
  handleQuery(query){
      const data = {query: this.state.query}
      Helpers.bigQueryCall(data).catch(error => {
        console.log(error, 'error').then(res => {
          console.log(res, 'wazzzq')
        })
      })
  }
  render(){
    return(
      <div>
        <span>
        Email<input placeholder="email" onChange={e => this.setState({email: e.target.value})}/>
        Password<input placeholder="password" onChange={e => this.setState({password: e.target.value})}/>
        <button onClick={e => this.handleSignIn(e)}> SignIn </button>
        </span>
        <button onClick={e => this.handleQuery(e)}>API Call</button>
      </div>
    )
  }
}

export default TestAuth
