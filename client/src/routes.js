import CreateQuote from "./components/createQuote";
import Login from "./components/login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUP";
import Home from "./components/Home";
import OtherProfile from "./components/OtherUserProfile";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/create", element: <CreateQuote /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/:userId", element: <OtherProfile /> },
];
