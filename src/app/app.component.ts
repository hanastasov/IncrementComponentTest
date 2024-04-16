import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public count = 0;

	public buttonClick() {
		this.count++;
	}

	public buttonClick1() {
		this.count--;
	}
}
