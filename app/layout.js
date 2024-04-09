import "./globals.css";

export const metadata = {
  title: "Airbnb | Holiday rentals, cabins, beach houses & more",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/images/airbnb-icon.png" />
      <body>{children}</body>
    </html>
  );
}
