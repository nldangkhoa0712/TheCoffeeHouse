import { ComponentType } from "react";
import MainLayout from "../MainLayout";
import Auth from "../pages/auth";
import Content from "../pages/content";
import Home from "../pages/home";

export type RouteProps = {
    path: string,
    component: ComponentType
    children?: RouteProps[]
}

export const publicRoute: RouteProps[] = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '/home', component: Home },
            { path: '/content', component: Content }
        ]
    },
    {
        path: "/auth",
        component: Auth
    }

]