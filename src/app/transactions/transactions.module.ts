import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranactionsRoutingModule } from './tranactions-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranactionsRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent
    ]
})
export class TransactionsModule {
}
