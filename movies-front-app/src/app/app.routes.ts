import { Routes } from '@angular/router';
import { ColaborativeComponent } from './components/colaborative-component/colaborative-component';
import { App } from './app';
import { ContentBasedComponent } from './components/content-based/content-based';
export const routes: Routes = [
    {
        path: "",
        component: App
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
