import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../components/Loader/Loader";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const StackPage = lazy(() => import('../pages/StackPage/StackPage'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage/PortfolioPage'))
const ProjectDetailsPage = lazy(() => import('../pages/ProjectDetailsPage/ProjectDetailsPage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/stack' element={<StackPage />} />
                <Route path='/projects' element={<PortfolioPage />} />
                <Route path='/projects/:id' element={<ProjectDetailsPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes