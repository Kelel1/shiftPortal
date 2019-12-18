import React from 'react';
import { Form, Button } from 'semantic-ui-react'
// Needs to be refractored to Administrator Login/Changed to SignUp
// Create a separate Component for employee Login
class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label> User ID</label>
                        <input type='text'></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Password (case sensitive)</label>
                        <input type='password'></input>
                    </Form.Field>
                    <Button type='submit'>SIGN IN</Button>
                </Form>
            </div>
        )
    }
}

export default Login;
