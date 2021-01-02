import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'src/app/Shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkTableModule } from '@angular/cdk/table';
@NgModule({
  declarations: [
    DashboardComponent,DefaultComponent,PostsComponent
  ],
  imports: [
    CommonModule,RouterModule,MatSidenavModule,SharedModule,FlexLayoutModule,
    MatDividerModule,MatCardModule,MatPaginatorModule,MatToolbarModule,CdkTableModule
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[],
  providers:[DashboardService],
})
export class DefaultModule { }
