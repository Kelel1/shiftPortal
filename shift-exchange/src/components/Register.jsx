import React from 'react';
import { Form, Button } from 'semantic-ui-react'
class Register extends React.Component {
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
                    <Button type='submit'>Register</Button>
                </Form>
            </div>
        )
    }
}

export default Register;
