import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">{{pageTitle}}</a>
      <div class="nav nav-pills">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" [routerLink] ="['/welcome']">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink] ="['/products']">Product List</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
