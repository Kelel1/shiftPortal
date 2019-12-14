import React from 'react';
// need connect function to be able to connect to store from Provider
import {connect} from 'react-redux';
import { storeCurrentMonth } from '../actions/calendarActions';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.getCurrentMonth = this.getCurrentMonth.bind(this);
        this.days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'
        ];
        this.state = {
            currentMonth: 0,
            firstDay: '',
            lastDate: '',
            lastDay: '',

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
        this.setState({ currentMonth: x.getMonth()});
    }

    //get # of weeks
    // count 2 weeks straight off-the-bat. 1st week where first date of month is.
    // 2nd week is where last date of month is.
    // take first date of the last week, subtract 1 to get the last date of the week before
    // i.e. if 27 is first date of last week, then the 26th is the last date of the week before
    // after getting that date, look for the last date of the first week
    // then subtract that from the last date of 2nd-to-the-last week
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

const mapStateToProps = (state) => {
    return state.calendar;
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        storeCurrentMonth: (month) => {
            dispatch(storeCurrentMonth(month));
        }
    }
};


const Container = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Container;