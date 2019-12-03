import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <form>
                    <input type='text'></input>
                    <input type='password'></input>
                    <input type='submit' value='Login'></input>
                </form>
            </div>
        )
    }
}

export default Login;
