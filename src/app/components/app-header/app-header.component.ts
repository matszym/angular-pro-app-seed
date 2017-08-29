import { Component, Output, EventEmitter, Input } from '@angular/core';

import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
    selector: 'app-header',
    styleUrls: ['app-header.component.scss'],
    template: `
        <div class="app-header">
            <div class="wrapper">
                <img src="/img/logo.svg" alt="" />
                <div
                    class="app-header__user-info"
                    *ngIf="user?.authenticated">
                    <span (click)='logoutUser()'></span>
                </div>
            </div>
        </div>
    `,
})
export class AppHeader {

    @Input()
    user: User;

    @Output()
    logout = new EventEmitter<any>();

    logoutUser() {
        this.logout.emit();
    }

    constructor() {}
}
