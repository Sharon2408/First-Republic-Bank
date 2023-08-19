import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeng
import { MegaMenuModule } from 'primeng/megamenu'
import { TreeSelectModule } from 'primeng/treeselect';
import { MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';

// Mat UI
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    UserComponent,
    SignupComponent,
    SigninComponent,
    CalculatorComponent,
    DashboardComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
