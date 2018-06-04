import { NgModule } from "@angular/core";
import { Router, Routes, RouterModule } from "@angular/router";
import { SystemComponent } from "./system.component";
import { BillPageComponent } from "./bill-page/bill-page.component";
import { HistoryPageComponent } from "./history-page/history-page.component";
import { PlanningPageComponent } from "./planning-page/planning-page.component";
import { RecordsPageComponent } from "./records-page/records-page.component";

const route: Routes = [

    {
        path: 'system', component: SystemComponent, children: [
            { path: 'bill', component: BillPageComponent },
            { path: 'history', component: HistoryPageComponent },
            { path: 'planning', component: PlanningPageComponent },
            { path: 'records', component: RecordsPageComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class SystemRoutingModule { }