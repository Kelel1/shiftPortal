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
        this.getLastFullDate();
        this.getNumberOfWeeks();
        this.populateDates();
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
        let dateNumber = 1; // date counter
        let weekNumber = 1; // first week
        let lastFullDate = this.getLastFullDate();
        let lastDate = lastFullDate.getDate();
        let weekCount = this.getNumberOfWeeks();
        let firstDay = this.getFirstDay();
        let tdCount = weekCount * 7;
        let dateCount = 0; //date counter
        // create elements inside week. always will have 7 tds.
        for(let i = 0; i <= tdCount; i++) {
            let elem = React.createElement('td', {key: `td-${i}`},'')
            if(i >= firstDay && i <= firstDay + lastDate - 1) {
                elem = React.createElement('td', {key: `td-${i}`},dateNumber)
                dateNumber++;
            }
            week.push(elem)
        }

        for(let i = weekNumber; i <= weekCount; i++) {
            let elem = React.createElement('tr', {},
            week[dateCount],
            week[dateCount+1],
            week[dateCount+2],
            week[dateCount+3],
            week[dateCount+4],
            week[dateCount+5],
            week[dateCount+6],
            )
            allWeeks.push(elem);
            dateCount+=7;
        }
        return allWeeks;
    }

    getCurrentMonth() {
        let month = this.props.currentMonth || (new Date()).getMonth();
        this.props.storeCurrentMonthToState(month);
        return month;
    }

    getCurrentYear() {
        let year = this.props.currentYear || (new Date()).getFullYear();
        this.props.storeCurrentYearToState(year);
        return year;
    }

    getCurrentDate() {
        let date = this.props.currentDate || (new Date()).getDate();
        this.props.storeCurrentDateToState(date);
        return date;
    }

    // last date of any given month is
    // 1st date of next month - 1
    // need current year
    getLastFullDate() {
        let currentMonth = this.props.currentMonth || this.getCurrentMonth();
        let currentYear = currentMonth === 11 ? // if december, make it new year
            (this.props.currentYear  || this.getCurrentYear()) + 1 
            : (this.props.currentYear  || this.getCurrentYear());
        let nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        // add 1 to nextMonth to get exact month
        // because months array is zero-based
        // thus, 0 is january but 1/1 is january 1st in date format
        let nextMonthFullDate = (new Date(`${nextMonth + 1}/1/${currentYear}`));
        let lastFullDate =  (new Date(nextMonthFullDate.setDate(0)));
        return lastFullDate;
    }

    // get first day of the month
    getFirstDay() {
        let month = this.getCurrentMonth() + 1;
        let currentYear = this.getCurrentYear();
        let firstDate = (new Date(`${month}/1/${currentYear}`));
        let firstDay = firstDate.getDay();
        return firstDay;
    }


    //get # of weeks
    // count 2 weeks straight off-the-bat. 1st week where first date of month is.
    // 2nd week is where last date of month is.
    // take first date of the last week, subtract 1 to get the last date of the week before
    // i.e. if 27 is first date of last week, then the 26th is the last date of the week before
    // after getting that date, look for the last date of the first week
    // then subtract that from the last date of 2nd-to-the-last week
    getNumberOfWeeks() {
        let weekCount = 2;
        let lastFullDate = this.getLastFullDate();
        let lastDate = lastFullDate.getDate();
        let lastDay = lastFullDate.getDay();
        let a = lastDate - lastDay;
        let firstDay = this.getFirstDay();
        let b = 1 + (6 - firstDay);
        weekCount += (a - b - 1)/7
        return weekCount;

    }

    //next month and previous month
    prevMonth() {
        let month = this.props.currentMonth || (new Date()).getMonth();
        month--;
        this.props.storeCurrentMonthToState(month);
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
                        {this.populateDates()}
                    </tbody>
                    

                </table>
                <button onClick={this.prevMonth}>Prev</button>
                <button>Next</button>
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