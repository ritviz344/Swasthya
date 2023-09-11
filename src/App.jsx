import { useState } from "react";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import React from "react";

import Hero from "./pages/Hero";
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Hero />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

// To use Loader we have to fetch the data from the data api layer
// in which browser router do not works so to use the routes in it we have to create a new instance
// brwser router element that fetcg=h a req or data from the api layer

export default function App() {
  return <RouterProvider router={router} />;
}

/*

// rendering the path by defining it using Browser Router compoonenets 
// it mai cuases some delaying in fetching the data 
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />

            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
              <Route path="/host/vans" element={<HostVans />} />

              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhoto />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

*/
