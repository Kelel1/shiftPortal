import React from 'react';
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/planner');
    }

    render() {
        
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}>
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

export default withRouter(Login);
