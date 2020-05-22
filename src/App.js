import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./main.scss"; // webpack must be configured to do this

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        defaultView="dayGridWeek"
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={[
          { title: "event 1", date: "2020-05-05" },
          { title: "event 2", date: "2020-05-09" }
        ]}
        header={{
          center: "dayGridMonth,dayGridWeek,timelineCustom" // buttons for switching between views
        }}
        fixedWeekCount={false}
        contentHeight={650}
        views={{
          timelineCustom: {
            type: "timeGrid",
            buttonText: "Year",

            visibleRange: function(currentDate) {
              // Generate a new date for manipulating in the next step
              var startDate = new Date(currentDate.valueOf());
              var endDate = new Date(currentDate.valueOf());

              // Adjust the start & end dates, respectively
              startDate.setDate(startDate.getDate() - 1); // One day in the past
              endDate.setDate(endDate.getDate() + 8); // Two days into the future

              return { start: startDate, end: endDate };
            }
          }
        }}
      />
    );
  }
}
