import React from 'react';
// need connect function to be able to connect to store from Provider
import {connect} from 'react-redux';
import { storeCurrentMonth, storeCurrentYear, storeCurrentDate } from '../actions/calendarActions';

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

    // make nested array with the weeks in it
    // [[week1],[week2], [week3], [week4]]
    // where week1 = ['','','','1','2','3','4']
    // when 1st of the month falls on a wednesday
    // [tr,tr,tr,tr]
    // tr = [td,td,td,td,td,td,td]
    populateDates() {
        let allWeeks = [];
        let week = [];
        let i = 1; //first date
        let lastDate = getLastDate();

        // create elements inside week. always will have 7 tds.
        week.push(React.createElement('td', {key: `${this.days[i]}-${i}` }, this.days[i]))
        // while (i <= lastDate) {
            
        // }


    }

    getCurrentMonth() {
        let data = this.props.currentMonth || new Date();
        let month = data.getMonth();
        this.props.storeCurrentMonthToState(month);
        return month;
    }

    getCurrentYear() {
        let data = this.props.currentYear || new Date();
        let year = data.getFullYear();
        this.props.storeCurrentYearToState(year);
        return year;
    }

    getCurrentDate() {
        let data = this.props.currentDate || new Date();
        let date = data.getDate();
        this.props.storeCurrentDateToState(date);
        return date;
    }

    // last date of any given month is
    // 1st date of next month - 1
    // need current year
    getLastDate() {
        let currentMonth = this.props.currentMonth || this.getCurrentMonth();
        let currentYear = this.props.currentYear || this.getCurrentYear();
        let nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        // add 1 to nextMonth to get exact month
        // because months array is zero-based
        // thus, 0 is january but 1/1 is january 1st in date format
        let nextMonthFullDate = (new Date(`${nextMonth + 1}/1/${currentYear}`));
        let lastDate =  (new Date(nextMonthFullDate.setDate(0))).getDate();
        return lastDate;
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
        },
        storeCurrentDateToState: (date) => {
            dispatch(storeCurrentDate(date));
        }
    }
};


const Container = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default Container;