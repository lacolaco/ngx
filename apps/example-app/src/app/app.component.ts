import { Component, OnInit } from '@angular/core';
import { Store } from '@lacolaco/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count$ = this.store.select(state => state.count);
  constructor(private store: Store<any>) {}

  ngOnInit() {
    setInterval(() => {
      this.store.dispatch(state => ({ count: (state.count || 0) + 1 }));
    }, 1000);
  }
}
