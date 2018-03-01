
import moment from "moment";
import json from '../data/data.json'
/*
 One true source of truth
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
        updated: state.data.report.end_time
      },
      new: {
        title: "New visits",
        value: state.data.report.visits.new,
        updated: state.data.report.end_time
      },
      recurring: {
        title: "Recurring visits",
        value: state.data.report.visits.recurring,
        updated: state.data.report.end_time
      }
    }
  },
  getPassersby(){
    var data = state.data.report.passersby
    data.updated = state.data.report.end_time
    return data
  },
  getCalendarData(){
    var data = {}

    let reports = state.data.interval_reports
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
    //convert to array and sort
    return Object.keys( data ).map( i => data [i])
      .sort( (a, b) => parseInt(a.hour)-parseInt(b.hour))

  }
}

