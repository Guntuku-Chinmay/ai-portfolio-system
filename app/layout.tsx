import "./globals.css";
import NeuralNetwork from "./components/background/NeuralNetwork";
import AIAssistantWidget from "./components/ai-assistant/AIAssistantWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative">
        <NeuralNetwork />

        <main className="relative z-10">{children}</main>

        <AIAssistantWidget />
      </body>
    </html>
  );
}

