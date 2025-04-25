import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!

export default function FCalendar() {
  return (
    <FullCalendar
      plugins={[ timeGridPlugin ]}
      initialView="timeGridDay"
      editable={true}
      selectable={true}
    />
  )
}