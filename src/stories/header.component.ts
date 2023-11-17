import { Component, Input, Output, EventEmitter } from '@angular/core'
import type { User } from './User'

@Component({
    selector: 'app-storybook-header',
    template: `<header>
        <div class="storybook-header">
            <div>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                            fill="#FFF" />
                        <path
                            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                            fill="#555AB9" />
                        <path
                            d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                            fill="#91BAF8" />
                    </g>
                </svg>
                <h1>Acme</h1>
            </div>
            <div>
                @if (user) {
                <span class="welcome">
                    Welcome, <b>{{ user.name }} </b>!
                </span>
                <app-storybook-button
                    *ngIf="user"
                    size="small"
                    (onClick)="handleLogout.emit($event)"
                    label="Log out">
                </app-storybook-button>
                } @else {
                <app-storybook-button
                    *ngIf="!user"
                    size="small"
                    class="margin-left"
                    (onClick)="handleLogin.emit($event)"
                    label="Log in"></app-storybook-button>
                <app-storybook-button
                    *ngIf="!user"
                    size="small"
                    [primary]="primary"
                    class="margin-left"
                    (onClick)="handleCreateAccount.emit($event)"
                    label="Sign up"></app-storybook-button>
                }
            </div>
        </div>
    </header>`,
    styleUrls: ['./header.css'],
})
export default class HeaderComponent {
    @Input()
    user: User | null = null

    primary = true

    @Output()
    handleLogin = new EventEmitter<Event>()

    @Output()
    handleLogout = new EventEmitter<Event>()

    @Output()
    handleCreateAccount = new EventEmitter<Event>()
}
