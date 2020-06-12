import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainPageComponent } from './main-page/main-page.component'
import { AboutComponent } from './about/about.component'
import { CoursesComponent } from './courses/courses.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgxDatatableModule } from '@swimlane/ngx-datatable'

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        AboutComponent,
        CoursesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule,
        NgxDatatableModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
