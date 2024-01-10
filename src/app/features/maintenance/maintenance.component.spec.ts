import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MaintenanceComponent } from './maintenance.component'

describe('MaintenanceComponent', () => {
    console.log('MaintenanceComponent test - INIT')
    let component: MaintenanceComponent
    let fixture: ComponentFixture<MaintenanceComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaintenanceComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(MaintenanceComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        console.log('MaintenanceComponent - should create')
        expect(component).toBeTruthy()
    })
    console.log('MaintenanceComponent test - STOP')
})
