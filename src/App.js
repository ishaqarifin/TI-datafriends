import { Frend } from "./pages/friend/Frend";
import { Auth } from "./pages/Auth/Auth";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Report } from "./pages/Report/Report";
import { AddFriend } from "./pages/friend/componen/AddFriend";
import { EditFriend } from "./pages/friend/componen/EditFriend";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/datafriends" element={<Frend />} />
        <Route path="/laporan" element={<Report />} />
        <Route path="/addfriend" element={<AddFriend />} />
        <Route path="/editfriend/:id" element={<EditFriend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
