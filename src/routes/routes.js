import {Home} from "./pages";
import {Layout} from "./components";

export const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            }
        ]
    }
]
