import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SiteStatusService {
    private isSiteOnline = false;

    getIsSiteOnline(): boolean {
        return this.isSiteOnline;
    }

    setIsSiteOnline(status: boolean): void {
        this.isSiteOnline = status;
    }
}
