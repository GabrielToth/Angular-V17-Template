import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TermOfServiceComponent } from './term-of-service.component'

describe('TermOfServiceComponent', () => {
    console.log('TermOfServiceComponent test - INIT')
    let component: TermOfServiceComponent
    let fixture: ComponentFixture<TermOfServiceComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TermOfServiceComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(TermOfServiceComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        console.log('TermOfServiceComponent - should create')
        expect(component).toBeTruthy()
    })
    console.log('TermOfServiceComponent test - STOP')
})
