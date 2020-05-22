import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import "./main.scss"; // webpack must be configured to do this

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        defaultView="dayGridWeek"
        plugins={[dayGridPlugin, timeGridPlugin, resourceTimelinePlugin]}
        events={[
          {
            title: 'Event1',
            date: '2020-01-13',
            allDay: false,
            color: 'green',
            backgroundColor: 'green'
          }
        ]}
        header={{
          left: 'prev,next today',
          center: 'title',
          right: "dayGridMonth,dayGridWeek,timelineCustom" // buttons for switching between views
        }}
        fixedWeekCount={false}
        contentHeight={650}
        views={{
          timelineCustom: {
            type: 'timeline',
            buttonText: 'Year',
            dateIncrement: { years: 1 },
            slotDuration: { months: 1 },
            visibleRange: function (currentDate) {
                return {
                    start: new Date(new Date().getFullYear(), 0, 1),
                    end: new Date(new Date().getFullYear(), 12, 31)
                };
            }
          }
        }}
      />
    );
  }
}
