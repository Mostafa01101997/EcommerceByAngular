import { CategorytdetailsComponent } from './components/categorytdetails/categorytdetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from 'src/app/components/brands/brands.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NotfoundComponent } from 'src/app/components/notfound/notfound.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './guards/auth.guard';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ChangepassowrdComponent } from './components/changepassowrd/changepassowrd.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SubcategoriesofcategoryComponent } from './components/subcategoriesofcategory/subcategoriesofcategory.component';
import { BrandsdetailsComponent } from './components/brandsdetails/brandsdetails.component';


const routes: Routes = [
  {
    path: "", component: BlankLayoutComponent,
    children: [
      { path: "", redirectTo: 'home', pathMatch: 'full', title: 'Home' },
      { path: "home", component: HomeComponent, title: 'Home', canActivate: [authGuard] },
      { path: "payment/:id", component: PaymentComponent, title: 'Payment', canActivate: [authGuard] },
      { path: "allorders", component: AllordersComponent, title: 'AllOrders', canActivate: [authGuard] },
      { path: "cart", component: CartComponent, title: 'Cart', canActivate: [authGuard] },
      { path: "products", component: ProductsComponent, title: 'Products', canActivate: [authGuard] },
      { path: "productdetails/:id", component: ProductdetailsComponent, title: 'productdetails', canActivate: [authGuard] },
      { path: "categories", component: CategoriesComponent, title: 'Categories', canActivate: [authGuard] },
      { path: "brands", component: BrandsComponent, title: 'Brands', canActivate: [authGuard] },
      { path: "changepassowrd", component: ChangepassowrdComponent, title: 'changepassowrd', canActivate: [authGuard] },
      { path: "wishlist", component: WishlistComponent, title: 'wishlist', canActivate: [authGuard] },
      { path: "categorytdetails/:id", component: CategorytdetailsComponent, title: 'categorytdetails', canActivate: [authGuard] },
      { path: "subcategoriesofcategory/:id", component: SubcategoriesofcategoryComponent, title: 'subcategoriesofcategory', canActivate: [authGuard] },
      { path: "brandsdetails/:id", component: BrandsdetailsComponent, title: 'brandsdetails', canActivate: [authGuard] },

    ]
  },
  {
    path: "", component: AuthLayoutComponent
    , children: [
      { path: "login", component: LoginComponent, title: 'Login' },
      { path: "register", component: RegisterComponent, title: 'Register' },
      { path: "forgetpassword", component: ForgetpasswordComponent, title: 'FoegetPassword' }
    ]
  },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
