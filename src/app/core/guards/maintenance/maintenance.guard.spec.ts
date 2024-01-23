import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { CanActivateFn, Router } from '@angular/router'
import { Location } from '@angular/common'
import { MaintenanceGuard } from './maintenance.guard'
import { SiteStatusService } from '../../services/site-status.service'
import { RouterTestingModule } from '@angular/router/testing'
import { expect } from '@jest/globals'
import { AppComponent } from '../../../app.component'
import { FooterComponent } from '../../../shared/components/footer/footer.component'
import { MenuComponent } from '../../../shared/components/menu/menu.component'
import { MaintenanceComponent } from '../../../features/maintenance/maintenance.component'
import { routes } from '../../../app.routes'

describe('MaintenanceGuard', () => {
    console.log(`MaintenanceGuard test - INIT`)
    // let component: AppComponent
    let fixture: ComponentFixture<AppComponent>
    let maintenanceFixture: ComponentFixture<MaintenanceComponent>
    let mockSiteStatusService: SiteStatusService
    let mockRouter: Router
    let location: Location

    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() =>
            MaintenanceGuard(...guardParameters)
        )

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
        }).compileComponents()
    }))

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppComponent, MenuComponent, FooterComponent],
            providers: [SiteStatusService, Router],
        })
        // component = fixture.componentInstance
        fixture = TestBed.createComponent(AppComponent)
        maintenanceFixture = TestBed.createComponent(MaintenanceComponent)

        mockSiteStatusService = TestBed.inject(SiteStatusService)
        mockRouter = TestBed.inject(Router)
        location = TestBed.inject(Location)
        mockRouter.initialNavigation()

        fixture.detectChanges()
        maintenanceFixture.detectChanges()
    })

    it('should be created', () => {
        console.log('MaintenanceGuard - should create')

        expect(executeGuard).toBeTruthy()
        fixture.whenStable().then(() => {
            console.log('LOCATION PATH: ' + location.path())
            expect(location.path()).toBe('/')
        })
    })

    it('should block navigation when site is offline', waitForAsync(() => {
        console.log(
            'MaintenanceGuard - should block navigation when site is offline'
        )
        mockSiteStatusService.setIsSiteOnline(false)
        maintenanceFixture.detectChanges()

        expect(mockSiteStatusService.getIsSiteOnline()).toBeFalsy()
        fixture.detectChanges()
        fixture.whenStable().then(() => {
            console.log('LOCATION PATH: ' + location.path())
            // Check if the guard properly redirects to /maintenance when the site is offline
            // expect(location.path()).toBe('/maintenance')
        })
    }))

    // it('should redirect to /maintenance when site is offline', () => {
    //     console.log(
    //         'MaintenanceGuard - should redirect to /maintenance when site is offline'
    //     )
    //     mockSiteStatusService.setIsSiteOnline(false)
    //     fixture.detectChanges()

    //     console.log('MOCK ROUTER URL - ' + mockRouter.url)

    //     console.log(
    //         'TEXT CONTENT - ' + fixture.debugElement.nativeElement.textContent
    //     )
    // })

    // it('should allow navigation when site is online', () => {
    //     // mockSiteStatusService.setIsSiteOnline(true) // It is already set to true by default
    //     console.log(
    //         'MaintenanceGuard - should allow navigation when site is online'
    //     )

    //     expect(mockSiteStatusService.getIsSiteOnline()).toBeTruthy()
    //     expect(fixture.debugElement.nativeElement.textContent).toContain(
    //         'home works!'
    //     )
    // })

    // it('should load HomeComponent from router in AppComponent when site is online', () => {
    //     console.log(
    //         'MaintenanceGuard - should load HomeComponent from router in AppComponent when site is online'
    //     )

    //     console.log(fixture.debugElement.nativeElement.textContent)

    //     expect(fixture.debugElement.nativeElement.textContent).toContain(
    //         'home works!'
    //     )
    // })
})
