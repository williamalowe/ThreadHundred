import AdBanner from "../../components/AdBanner/AdBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Navbar from "../../components/Navbar/Navbar";
import SideCart from "../../components/SideCart/SideCart";
import Spotlight from "../../components/Spotlight/Spotlight";
import styles from "./App.module.css";

const App = () => {
  return (
    <main className={styles.app}>
      <SideCart />
      <Navbar />
      <HeroBanner />
      <AdBanner />
      <Spotlight />
    </main>
  );
};

export default App;
