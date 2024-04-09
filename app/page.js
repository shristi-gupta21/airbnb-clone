import { Header } from "./components/Header";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Image
        src="/images/airbnb-logo.svg"
        alt="page Image"
        width={500}
        height={300}
      />
      <Header />
    </main>
  );
}
