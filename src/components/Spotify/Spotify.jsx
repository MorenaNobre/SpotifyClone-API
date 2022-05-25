import { Container } from "./SpotifyStyles";
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"

export default function Spotify() {
  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body__contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  );
}
