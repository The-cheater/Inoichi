import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import BingoGenerated from "./pages/bingo generated";
import Exercise from "./pages/exercise-profile";
import Marketplace from "./pages/marketplace";
import Pastreport from "./pages/pastreport";
import ProfileLayout from "./pages/profilelayout";
import Symptomhis from "./pages/symptomhis";
import Yoga from "./pages/yoga";
import SignInSignUpPage from "./pages/signinsignuppage";


import './App.css';

const router = createBrowserRouter([
  {
    index: true,
    element: <SignInSignUpPage />,
  },
  {
    path: "landing",
    element: <Landing />
  },
  {
    path: "bingo",
    element: <BingoGenerated />
  },
  {
    path: "excercise",
    element: <Exercise />
  },
  {
    path: "marketplace",
    element: <Marketplace />
  },
  {
    path: "report",
    element: <Pastreport />
  },
  {
    path: "profile",
    element: <ProfileLayout />
  },
  {
    path: "history",
    element: <Symptomhis />
  },
  {
    path: "yoga",
    element: <Yoga />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;