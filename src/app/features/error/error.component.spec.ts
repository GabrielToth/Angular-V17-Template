import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ErrorComponent } from './error.component'

describe('ErrorComponent', () => {
    console.log('ErrorComponent test - INIT')
    let component: ErrorComponent
    let fixture: ComponentFixture<ErrorComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ErrorComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(ErrorComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        console.log('ErrorComponent - should create')
        expect(component).toBeTruthy()
    })
    console.log('ErrorComponent test - STOP')
})
