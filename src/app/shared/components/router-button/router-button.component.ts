import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

export interface RouterButtonI {
  title: string;
  link: string;
}

@Component({
  selector: 'app-router-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './router-button.component.html',
  styleUrl: './router-button.component.scss'
})
export class RouterButtonComponent {
  @Input() options!: RouterButtonI;
}
