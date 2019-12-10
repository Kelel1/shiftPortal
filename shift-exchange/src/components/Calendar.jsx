import React from 'react';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.state = {

        }
    }

    // use react.createelement to dynamically add elements in page
    // need to use this for # of weeks / tr
    // {React.createElement('th', {}, 'created element')}

    populateDays() {
        let tabledays = [];
        for(let i in this.days) {
            tabledays.push(React.createElement('td', {}, this.days[i]));
        }
        return (
            tabledays
        );
    }

    getCurrentMonth() {
        let x = new Date();
        return x.getMonth();
    }

    //get # of weeks
    // count 2 weeks straight off-the-bat. 1st week where first date of month is.
    // 2nd week is where last date of month is.
    // take 
    getNumberOfWeeks() {


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