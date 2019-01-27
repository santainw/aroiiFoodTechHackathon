import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



/** Comonents Link*/
import { PreOrderComponent } from './pre-order/pre-order.component';
import { AcceptOrderComponent } from './accept-order/accept-order.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ThankyouReviewComponent } from './thankyou-review/thankyou-review.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { SignatureComponent } from './signature/signature.component';
import { OrderComponent } from './pre-order/order/order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MainComponent } from './main/main.component';
import { ProcessingComponent } from './processing/processing.component';

const routes: Routes = [
  {path: 'app-pre-order' , component:   PreOrderComponent},
  {path: 'app-accept-order' , component:   AcceptOrderComponent},
  {path: 'app-thankyou' , component:   ThankyouComponent},
  {path: 'app-thankyou-review' , component:   ThankyouReviewComponent},
  {path: 'app-sentiment' , component:   SentimentComponent},
  {path: 'app-review' , component:   ReviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-signature', component: SignatureComponent},
  {path: 'order', component: OrderComponent},
  {path: 'app-delivery', component: DeliveryComponent},
  {path: 'app-main', component: MainComponent},
  {path: 'app-processing', component: ProcessingComponent},
  /** New Rounting */
  /** path ไปหน้า list ให้เป็นหน้าเเรก */
  {path: '', redirectTo: 'app-main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
