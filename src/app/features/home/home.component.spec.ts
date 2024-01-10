import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
    console.log('HomeComponent test - INIT')
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(HomeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        console.log('HomeComponent - should create')
        expect(component).toBeTruthy()
    })
    console.log('HomeComponent test - STOP')
})
