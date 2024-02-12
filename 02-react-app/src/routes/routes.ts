import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(/* webpackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout")
);
const NoLazy = lazy(
  () =>
    import(/* webpackChunkName: "LazyLayout"*/ "../01-lazyload/pages/NoLazy")
);

export const routes: Route[] = [
  {
    path: "/lazy-layout/*",
    to: "/lazy-layout",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "NoLazy",
  }
];
