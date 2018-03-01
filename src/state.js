import moment from "moment";
import json from '../data/data.json'

/*
 One true source of truth
 state is actually not used since there is no state in this app,
 anyhow, that is where the state shall be if it is implemented
 */
var state = {
  data: json,
  state:{}
}

export default{
  getReportMetrics(){
    return {
      total: {
        title: "Total visits",
        value: state.data.report.visits.total,
        updated: moment(state.data.report.end_time).format("YYYY-MM-DD HH:mm")
      },
      new: {
        title: "New visits",
        value: state.data.report.visits.new,
        updated: moment(state.data.report.end_time).format("YYYY-MM-DD HH:mm")
      },
      recurring: {
        title: "Recurring visits",
        value: state.data.report.visits.recurring,
        updated: moment(state.data.report.end_time).format("YYYY-MM-DD HH:mm")
      }
    }
  },
  getPassersby(){
    var data = state.data.report.passersby
    data.updated = moment(state.data.report.end_time).format("YYYY-MM-DD HH:mm")
    return data
  },
  /*
  creates a two dimensional array of the data in the "shape" of a one month calendar

   */
  getCalendarData(){
    var data = {}

    let reports = state.data.interval_reports

    //create an object with hour and day as keys in a two dimensional grid
    for ( let index in reports ){
      let point = reports[index]
      //this makes an assumption that there is only one site
      //which is the case in this task
      if( !point.within_opening_hours.length ){
        continue
      }

      let hour = moment( point.start_time ).format("HH")
      let day = moment( point.start_time ).format("dddd")

      if( !(hour in data) ){
        data[hour] = { hour: hour }
      }
      if( !(day in data[hour]) ){
        data[hour][day] = 0
      }
      data[hour][day] += point.visits.total
    }
    //convert to array and ensure order of hours by sorting
    //days (columns) are not sorted, the UI can decide that order
    return Object.keys( data ).map( i => data [i])
      .sort( (a, b) => parseInt(a.hour)-parseInt(b.hour))
  }
}

