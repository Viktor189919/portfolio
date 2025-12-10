import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}