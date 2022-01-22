import {Suspense, lazy} from "react";

const Loader = (Component) => (props) => (
    <Suspense fallback={<></>}>
        <Component {...props}/>
    </Suspense>
)

export const Layout = Loader(lazy(() => import('../ui-components/layout.component')));