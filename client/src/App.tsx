import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/main";
import { SignIn } from "./pages/sign-in";
import { Room } from "./pages/room";
import { StreamCall } from "@stream-io/video-react-sdk";
import { useUser } from "./user-context";

function App() {
  const { call } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/room"
          element={
            call ? (
              <StreamCall call={call}>
                <Room />
              </StreamCall>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
