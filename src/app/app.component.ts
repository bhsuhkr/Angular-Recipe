import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  loadedFeature = 'recipes';

  onNav(feature: string) {
    this.loadedFeature = feature;
  }
}
