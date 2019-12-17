import React from 'react';
// need connect function to be able to connect to store from Provider
import {connect} from 'react-redux';
import { storeCurrentMonth, storeCurrentYear } from '../actions/calendarActions';

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
    }

    componentDidMount() {
        this.getCurrentMonth();
        this.getCurrentYear();
        this.getLastDate();
    }

    // use react.createelement to dynamically add elements in page
    // need to use this for # of weeks / tr
    // {React.createElement('th', {}, 'created element')}

    populateDays() {
        let tabledays = [];
        for(let i in this.days) {
            tabledays.push(React.createElement('td', {key: `${this.days[i]}-${i}` }, this.days[i]));
        }
        return (
            tabledays
        );
    }

    populateDates() {

    }

    getCurrentMonth() {
        let data = this.props.currentMonth || new Date();
        let month = data.getMonth();
        this.props.storeCurrentMonthToState(month);
    }

    getCurrentYear() {
        let data = this.props.currentMonth || new Date();
        let year = data.getFullYear();
        this.props.storeCurrentYearToState(year);

    }

    // last date of any given month is
    // 1st date of next month - 1
    // need current year
    async getLastDate() {
        console.log('currentmonth - ', this.props.currentMonth);
        let nextMonth = this.props.currentMonth === 11 ? 0 : this.props.currentMonth + 1;
        console.log('nextMonth - ',nextMonth);
        let a = await (new Date(`${nextMonth + 1}/1/${this.props.currentYear}`));
        console.log('a - ', a);
        let data = await (new Date(a.setDate(0)));
        console.log('data - ', data);
        let lastDate = data.getDate();
   
    }

    async getNextMonth() {
        
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
                <table>
                    <thead>
                        <tr>
                            <th colSpan='7'>
                                {this.months[this.props.currentMonth]}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.populateDays()}
                        </tr>
                    </tbody>
                    

                </table>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log('state in Calendar mapstatetoprops is ', state);
    return state.calendar;
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        storeCurrentMonthToState: (month) => {
            dispatch(storeCurrentMonth(month));
        },
        storeCurrentYearToState: (year) => {
            dispatch(storeCurrentYear(year));
        }
    }
};


const Container = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Container;