import React from 'react';
import { Form, Button, Grid, GridColumn } from 'semantic-ui-react'
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
                <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
                    <GridColumn style={{ maxWidth: 450 }}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Field>
                                <label> User ID</label>                        
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>                    
                            </Form.Field>
                            <Form.Field>
                                <label>Password (case sensitive)</label>
                                <Form.Input fluid icon='lock' iconPosition='left' type='password' placeholder='Password'/>
                            </Form.Field>
                            <Button type='submit'>SIGN IN</Button>
                        </Form>
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}

export default withRouter(Login);
