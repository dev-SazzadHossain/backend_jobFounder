import { RouterProvider, useLocation } from "react-router-dom"
import { router } from "./Routes/routes"


function App() {
 


  return (
    <>
     <RouterProvider router={router }></RouterProvider>
    </>
  )
}

export default App
