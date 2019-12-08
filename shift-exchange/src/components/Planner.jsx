import React from 'react';
import Calendar from './Calendar'

class Planner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Calendar />
            </div>

        );
    }
}

export default Planner;