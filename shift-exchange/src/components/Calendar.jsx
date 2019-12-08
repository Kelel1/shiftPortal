import React from 'react';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    // use react.createelement to dynamically add elements in page
    // need to use this for # of weeks / tr
    // {React.createElement('th', {}, 'created element')}

    populateDays() {
        const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        let tabledays = [];
        for(let i in days) {
            tabledays.push(React.createElement('td', {}, days[i]));
        }
        return (
            tabledays
        );
    }
    

    render() {
        return (
            <div>
                Calendar!
                <table>
                    <tr>
                        <th colspan='7'>
                            December
                        </th>
                    </tr>
                    <tr>
                        {this.populateDays()}
                    </tr>

                </table>
            </div>

        );
    }
}

export default Calendar;