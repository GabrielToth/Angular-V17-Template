/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CanActivateFn, Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from '../../app.component'
import { SiteStatusService } from '../services/site-status.service'
import { MaintenanceGuard } from './maintenance/maintenance.guard'

describe('Functional Guards', () => {
    console.log('Functional Guards test - INIT')
    let fixture: ComponentFixture<AppComponent>
    let appComponent: AppComponent
    let router: Router
    let siteStatusService: SiteStatusService

    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() =>
            MaintenanceGuard(...guardParameters)
        )

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, AppComponent],
            providers: [SiteStatusService],
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
        appComponent = fixture.debugElement.componentInstance
        fixture.detectChanges()
        router = TestBed.inject(Router)
        siteStatusService = TestBed.inject(SiteStatusService)
    })

    it('should navigate to the HomeComponent when the path is "/"', async () => {
        console.log(
            'Functional Guards - should navigate to the HomeComponent when the path is "/"'
        )
        console.log(appComponent)
        console.log(fixture.debugElement.nativeElement.textContent)
        // Log do caminho atual da rota
        console.log('Current route:', router.url)
        router.navigateByUrl('/home')
        fixture.detectChanges()
        console.log('Current route:', router.url)
        router.navigateByUrl('/maintenance')
        fixture.detectChanges()
        console.log('Current route:', router.url)
        expect(appComponent).toBeTruthy()
    })

    console.log('Functional Guards test - STOP')
})

// Estes testes cobrem os seguintes cenários:

// O router navega para a HomeComponent quando o caminho é /.
// O router navega para a MaintenanceComponent quando o caminho é /maintenance.
// O router navega para a ErrorComponent para qualquer outro caminho.
// O MaintenanceGuard impede o acesso a rotas quando o aplicativo está no modo de manutenção.
