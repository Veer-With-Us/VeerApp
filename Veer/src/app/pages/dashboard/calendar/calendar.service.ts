import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-03-01',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'Lesson 2 Due',
          start: '2017-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'AAA Basketball Tournament',
          start: '2017-03-07',
          end: '2017-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Mark Zuckerberg Interview Discussion',
          start: '2017-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2017-04-01T07:00:00',
          color: dashboardColors.gossip
        }
      ]
    };
  }
}
