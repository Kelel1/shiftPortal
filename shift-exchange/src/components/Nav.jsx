import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <nav>
                    <ul className='nav-list'>
                        <Link to='/register'>
                            <li>
                                Register
                            </li>
                        </Link>
                        <Link to='/login'>
                            <li>
                                Log In
                            </li>
                        </Link>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;
