import { CategoryService } from './shared/services/categories.service';
import { NgModule } from "@angular/core";
import { SystemComponent } from "./system.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HistoryPageComponent } from './history-page/history-page.component';
import { BillPageComponent } from "./bill-page/bill-page.component";
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SystemRoutingModule } from "./system-routing.module";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from "../shared/directives/dropdown.directive";
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { BillCurrencyComponent } from './bill-page/bill-currency/bill-currency.component';
import { BillService } from "./shared/services/bill.service";
import { MomentPipe } from "../shared/pipes/moment.pipe";
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import { EditEventComponent } from './records-page/edit-event/edit-event.component';


@NgModule({
    declarations: [
        SystemComponent,
        BillPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SidebarComponent,
        HeaderComponent,
        DropdownDirective,
        BillCardComponent,
        BillCurrencyComponent,
        MomentPipe,
        AddEventComponent,
        AddCategoryComponent,
        EditCategoryComponent,
        EditEventComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule
    ],
    providers:[
        BillService,
        CategoryService
    ]
})
export class SystemModule { }