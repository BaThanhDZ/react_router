import React from "react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotfoundPage from "./pages/NotfoundPage";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: "/about",
        exact: true,
        main: () => <AboutPage/>
    },
    {
        path: "/blog",
        exact: true,
        main: () => <BlogPage/>
    },
    {
        path: "/contact",
        exact: true,
        main: () => <ContactPage/>
    },
    {
        path: "",
        exact: true,
        main: () => <NotfoundPage/>
    }
];

export default routes;