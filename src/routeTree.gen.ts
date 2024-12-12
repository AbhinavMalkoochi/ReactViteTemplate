/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as SigninImport } from './routes/signin'
import { Route as LandingImport } from './routes/landing'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SigninRoute = SigninImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const LandingRoute = LandingImport.update({
  id: '/landing',
  path: '/landing',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/landing': {
      id: '/landing'
      path: '/landing'
      fullPath: '/landing'
      preLoaderRoute: typeof LandingImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/landing': typeof LandingRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/landing': typeof LandingRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/landing': typeof LandingRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/landing' | '/signin' | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/landing' | '/signin' | '/signup'
  id: '__root__' | '/' | '/landing' | '/signin' | '/signup'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LandingRoute: typeof LandingRoute
  SigninRoute: typeof SigninRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LandingRoute: LandingRoute,
  SigninRoute: SigninRoute,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/landing",
        "/signin",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/landing": {
      "filePath": "landing.tsx"
    },
    "/signin": {
      "filePath": "signin.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    }
  }
}
ROUTE_MANIFEST_END */