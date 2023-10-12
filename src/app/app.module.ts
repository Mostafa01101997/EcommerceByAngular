import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { BrandsComponent } from 'src/app/components/brands/brands.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NavbarAuthComponent } from 'src/app/components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from 'src/app/components/navbar-blank/navbar-blank.component';
import { NotfoundComponent } from 'src/app/components/notfound/notfound.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CuttextPipe } from './cuttext.pipe';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { MyhttpInterceptor } from './interceptor/myhttp.interceptor';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { SearchPipe } from './search.pipe';
import { ChangepassowrdComponent } from './components/changepassowrd/changepassowrd.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategorytdetailsComponent } from './components/categorytdetails/categorytdetails.component';
import { SubcategoriesofcategoryComponent } from './components/subcategoriesofcategory/subcategoriesofcategory.component';
import { BrandsdetailsComponent } from './components/brandsdetails/brandsdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    NotfoundComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    CuttextPipe,
    ProductdetailsComponent,
    PaymentComponent,
    AllordersComponent,
    SearchPipe,
    ForgetpasswordComponent,
    ChangepassowrdComponent,
    WishlistComponent,
    CategorytdetailsComponent,
    SubcategoriesofcategoryComponent,
    BrandsdetailsComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgxPaginationModule

  

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyhttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
