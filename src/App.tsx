import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from './context/ThemeContext'
import { Hero } from './components/Hero'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  ),
  notFoundComponent: NotFoundPage,
})

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Hero })
const projectsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/projects', component: ProjectsPage })
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: ContactPage })

const routeTree = rootRoute.addChildren([indexRoute, projectsRoute, contactRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
