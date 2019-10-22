import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material  from '@angular/material'
import {MatInputModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

//extra lines
import {
  MatAutocompleteModule,MatButtonModule,MatButtonToggleModule,MatCardModule,MatBadgeModule,
  MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatExpansionModule,
  MatGridListModule,  MatIconModule,   MatListModule,  MatMenuModule,  MatNativeDateModule,  MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,
  MatRadioModule,MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,MatSnackBarModule, MatSortModule,MatStepperModule,  MatTooltipModule,
    MatTableModule,MatFormFieldModule, MatSelectModule
} from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    //draggable
    DragDropModule,
    CommonModule,
    Material.MatToolbarModule, //for toolbar
    Material.MatGridListModule, //for grid
    Material.MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    //extra
    // Material.FormsModule,
    // Material.ReactiveFormsModule,
    // Material.MatTabsModule,
    // Material.MatSelectModule,
    // Material.MatTableModule,
    // Material.MatToolbarModule,
    // // Material.BrowserModule,
    // // Material.HttpClientModule,
    // // Material.HttpModule,
    // // Material.FileUploadModule,
    // Material.MatCardModule, 
    // Material.MatInputModule, 
    // Material.MatMenuModule,
    // Material.MatProgressSpinnerModule,

    MatButtonModule, 
    MatCardModule,
 
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports :[
    Material.MatToolbarModule,
    MatSidenavModule, 
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSelectModule,
   // MatSelectModule,
    MatSidenavModule,
    MatBadgeModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
   // MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    Material.MatCardModule, 
    Material.MatInputModule, 
    Material.MatMenuModule,
    Material.MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
