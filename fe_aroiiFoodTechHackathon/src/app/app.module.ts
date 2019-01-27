import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** link Back-end */
import { IssueService } from './issue.service';
import { HttpClientModule } from '@angular/common/http';

/** Componnets */
import { MainComponent } from './main/main.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { AcceptOrderComponent } from './accept-order/accept-order.component';
import { LoginComponent } from './login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ThankyouReviewComponent } from './thankyou-review/thankyou-review.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { ReviewComponent } from './review/review.component';
import { OrderComponent } from './pre-order/order/order.component';
import { SignatureComponent } from './signature/signature.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProcessingComponent } from './processing/processing.component';


/** Materails */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';



@NgModule({
  declarations: [
    AppComponent,
    PreOrderComponent,
    AcceptOrderComponent,
    LoginComponent,
    ThankyouComponent,
    ThankyouReviewComponent,
    SentimentComponent,
    ReviewComponent,
    OrderComponent,
    SignatureComponent,
    DeliveryComponent,
    MainComponent,
    ProcessingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
