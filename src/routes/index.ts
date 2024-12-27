import Content from "../pages/content";
import Home from "../pages/home";

export type RouteProps = {
    path: string,
    component: () => JSX.Element
}

export const publicRoute: RouteProps[] = [
    { path: '/home', component: Home },
    { path: '/content', component: Content }
]