import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <MainLayout>
        <main className="h-full flex justify-center items-center">
          <h1 className="text-3xl font-bold">
            Hello, <br /> my name is Viktor <br/> welcome to my portfolio.
          </h1>
        </main>
      </MainLayout>
    </div>
  );
}
