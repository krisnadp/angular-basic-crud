import { NgModule } from "@angular/core";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: ProductsPageComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {}