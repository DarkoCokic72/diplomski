import { Routes } from '@angular/router';
import { ColaborativeComponent } from './components/colaborative-component/colaborative-component';
import { ContentBasedComponent } from './components/content-based/content-based';
import { HomeComponent } from './components/home-component/home-component';
export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "colaborative",
        component: ColaborativeComponent
    },
    {
        path: "content-based",
        component: ContentBasedComponent
    }
];
