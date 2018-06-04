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


@NgModule({
    declarations: [
        SystemComponent,
        BillPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule
    ]

})
export class SystemModule { }