import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './shared/components/footer/footer.component'
import { MenuComponent } from './shared/components/menu/menu.component'
import { HttpClientModule } from '@angular/common/http'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        RouterOutlet,
        HttpClientModule,
        FooterComponent,
        MenuComponent,
    ],
})
export class AppComponent {}
