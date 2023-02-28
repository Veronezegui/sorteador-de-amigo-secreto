import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { StartingPage } from "./pages/StartingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartingPage />
  }
])

function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
