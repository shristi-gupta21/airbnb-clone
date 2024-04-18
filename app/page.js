import { Header } from "./components/Header";
import Image from "next/image";
import { SearchBar } from "./components/SearchBar";
export default function Home() {
  return (
    <main>
      <Header />
      <SearchBar />
    </main>
  );
}
