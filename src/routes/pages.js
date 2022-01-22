import {Suspense, lazy} from "react";

const Loader = (Component) => (props) => (
    <Suspense fallback={<></>}>
        <Component {...props}/>
    </Suspense>
)

export const Home = Loader(lazy(() => import('../pages/home.page')));