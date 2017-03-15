import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Start Lesson Two' },
    { text: 'Watch Mark Zuckerberg webcast re: tapping into network effects.' },
    { text: 'Clean up A/R' },
    { text: 'Initiate automatic email marketing for new signups' },
    { text: 'A/B test checkout processs: pop-up checkout or completely new page?' },
    { text: 'Talk to Morgan about integrating smoothie offerings with my Lemonade stand' },
    { text: 'Email Eric and Alex about drag and drop dashboard feature' },
    { text: 'Update profile picture on MyVeer community' },
    { text: 'Level up to 10 badges collected' },
    { text: 'Get birthday gift for Grace' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
