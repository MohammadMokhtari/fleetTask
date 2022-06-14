import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./layout/components/home/home.component";

import { LayoutComponent } from "./layout/layout.component";

const pageRoutes:Routes= [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            }
        ]
    }
]

@NgModule({
    imports :[RouterModule.forChild(pageRoutes)],
    exports:[RouterModule]
})
export class PageRoutingModule {    
}