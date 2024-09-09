import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ForumComponent } from './forum/forum.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationComponent } from './application/application.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StartComponent,ForumComponent,NavComponent,FooterComponent,ApplicationComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BMproject';
}


