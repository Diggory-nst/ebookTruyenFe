
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { lazy, Suspense } from "react";

const Page404 = lazy(() => import('./pages/page404'))

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
          <Route path="*" element={< Page404 />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
