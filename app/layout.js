import './globals.css';

export const metadata = {
  title: 'Agentic Market Entry',
  description: 'Agentic market entry pods for global pipeline generation and headcount signals.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
