import React from 'react';
import { Modal } from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';
import { Auth } from 'aws-amplify';

class Login extends React.Component {
  
  constructor(){
    super();
    this.state={
      user: '',
      pass: ''
    }
    this.submit = this.submit.bind(this)
  }

  submit(){

    console.log('User: '+ this.state.user)
    console.log('Pass: '+ this.state.pass)

    async function signIn() {
      try {
        const user = await Auth.signIn(this.state.user, this.state.pass);
      } catch (error) {
        console.log('error signing in', error);
      }
    }
    signIn.call(this);
  }
  render() {
    return (
      <div>
        <Modal
          open
          modalHeading="Login"
          //modalLabel="Login"
          primaryButtonText="Login"
          secondaryButtonText="Cancel"
          onRequestSubmit = {this.submit}
          >
          <TextInput
            data-modal-primary-focus
            id="text-input-1"
            labelText="Username"
            //placeholder="e-mail"
            style={{ marginBottom: '1rem' }}
            onChange={(e)=> this.setState({user: e.target.value})}
          />
          <TextInput
            data-modal-primary-focus
            id="text-input-1"
            labelText="Password"
            placeholder=""
            style={{ marginBottom: '1rem' }}
            onChange={(e)=> this.setState({pass: e.target.value})}
          />
      </Modal>
          
    </div>
    )
  }
}

export default Login;