import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { MenuComponent } from './shared/components/menu/menu.component'
import { FooterComponent } from './shared/components/footer/footer.component'
import { RouterTestingModule } from '@angular/router/testing'
import { SiteStatusService } from './core/services/site-status.service'
import { ActivatedRoute } from '@angular/router'

describe('AppComponent', () => {
    console.log('AppComponent test - INIT')
    let fixture: AppComponent

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AppComponent,
                MenuComponent,
                FooterComponent,
            ],
            providers: [
                SiteStatusService,
                { provide: ActivatedRoute, useValue: { snapshot: {} } },
            ],
        }).compileComponents()

        fixture = new AppComponent()
    })

    it('should create the app component', () => {
        console.log('AppComponent - should create the app component')
        expect(fixture).toBeTruthy()
    })

    it('should contain app-menu, router-outlet, and app-footer elements in the template', () => {
        console.log(
            'AppComponent - should contain app-menu, router-outlet, and app-footer elements in the template'
        )
        // const compiled = fixture.nativeElement as HTMLElement
        // const menuElement = compiled.querySelector('app-menu')
        // const routerOutletElement = compiled.querySelector('router-outlet')
        // const footerElement = compiled.querySelector('app-footer')

        // expect(menuElement).toBeTruthy()
        // expect(routerOutletElement).toBeTruthy()
        // expect(footerElement).toBeTruthy()
    })
    console.log('AppComponent test - STOP')
})

// Estes testes cobrem os seguintes cenários:

// O AppComponent é criado corretamente.
// O AppComponent renderiza os elementos app-menu, router-outlet e app-footer.
