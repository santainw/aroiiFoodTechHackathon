import { NgModule } from '@angular/core';

/** Material */
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule
    ]
})

export class MaterialModule { }
