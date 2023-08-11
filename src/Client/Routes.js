import App from "./App";
import Home from "./Page/Home";
import About from "./Page/About";

export default [
    {
        ...App,
        path: '/',
        routes: [
            {
                ...Home,
                path: '/',
            },
            {
                ...About,
                path: '/about'
            }
        ]
    }
]