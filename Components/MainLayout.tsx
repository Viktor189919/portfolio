import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 mx-auto sm:px-6 lg:px-8 w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}