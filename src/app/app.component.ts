import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'mail' },
    { title: 'Face-Scan', url: '/folder/Face-Scan', icon: 'paper-plane' },
    { title: 'History', url: '/folder/History', icon: 'heart' },
  ];
  public labels = ['Security', 'Scalability', 'Ground-Breaking'];
  constructor() {}
}
