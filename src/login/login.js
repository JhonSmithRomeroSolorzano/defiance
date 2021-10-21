import React, { useEffect } from 'react';
import { Modal } from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';


function Login() {

  useEffect(
    () => {
      if(document.getElementsByClassName('bx--modal-close') && document.getElementsByClassName('bx--modal-close')[0]) document.getElementsByClassName('bx--modal-close')[0].remove()
    },
    []
  );
  

  /*var submit = ()=>{

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
  }*/

  return (
    <div>
      <Modal
        open
        modalHeading="Defiance Analitycs"
        //modalLabel="Login"
        primaryButtonText="Login"
        secondaryButtonText="Cancel"
        //onRequestSubmit = {this.submit}
        >
        <TextInput
          data-modal-primary-focus
          id="user"
          labelText="Username"
          //placeholder="e-mail"
          style={{ marginBottom: '1rem' }}
          //onChange={(e)=> this.setState({user: e.target.value})}
        />
        <TextInput.PasswordInput
          data-modal-primary-focus
          id="password"
          labelText="Password"
          placeholder=""
          style={{ marginBottom: '1rem' }}
          //onChange={(e)=> this.setState({pass: e.target.value})}
        />
      </Modal>
     
    </div>
  )
}

export  {Login};