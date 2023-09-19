import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss'],
})
export class RendezVousComponent implements OnInit {
  @ViewChild('fullcalendar') fullcalendar!: FullCalendarComponent;

  Events: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: this.Events,
    dateClick: this.handleDateClick.bind(this),
  };

  constructor(private httpClient: HttpClient) {}

  handleDateClick(info: any) {
    alert('Clicked on date: ' + info.dateStr);
  }

  ngOnInit() {
    setTimeout(() => {
      return this.httpClient
        .get('http://localhost:8080/Rendez-Vous/events')
        .subscribe((res: any) => {
          this.Events.push(res);
          this.fullcalendar.getApi().refetchEvents(); // Rafraîchir les événements dans le calendrier
        });
    }, 2200);
  }
}
