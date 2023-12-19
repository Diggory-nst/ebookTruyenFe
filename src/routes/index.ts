import { ComponentType, lazy } from "react";

const Home = lazy(() => import('../pages/home'))
const Ebook = lazy(() => import('../pages/ebook'))
const Admin = lazy(() => import('../pages/admin'))
const SignIn = lazy(() => import('../pages/signIn'))
const LogIn = lazy(() => import('../pages/logIn'))
const ForgotPassword = lazy(() => import('../pages/forgotPassword'))
const ResetPassword = lazy(() => import('../pages/resetPassword'))
const Page404 = lazy(() => import('../pages/page404'))
const WaitingVerification = lazy(() => import('../pages/waitingVerification'))
const WaitingResetPw = lazy(() => import('../pages/waitingResetPw'))
const Activate = lazy(() => import('../pages/activate'))

interface Route {
    path: string,
    component: ComponentType
}

const publicRoutes: Route[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/ebook/:slug',
        component: Ebook
    },
    {
        path: '/admin-secret',
        component: Admin
    },
    {
        path: '/signIn-secret',
        component: SignIn
    },
    {
        path: '/logIn-secret',
        component: LogIn
    },
    {
        path: '/forgot-password-secret',
        component: ForgotPassword
    },
    {
        path: '/reset-password-secret/:username_encode',
        component: ResetPassword
    },
    {
        path: '/page404',
        component: Page404
    },
    {
        path: 'signin-secret/waiting-verification',
        component: WaitingVerification
    },
    {
        path: '/waiting-reset-password',
        component: WaitingResetPw
    },
    {
        path: '/activate-account/:username_encode',
        component: Activate
    }
]

const privatePublic: Route[] = []

export {
    publicRoutes,
    privatePublic
}