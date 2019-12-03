import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <form>
                    <input type='text'></input>
                    <input type='password'></input>
                    <input type='submit' value='Register'></input>
                </form>
            </div>
        )
    }
}

export default Register;
