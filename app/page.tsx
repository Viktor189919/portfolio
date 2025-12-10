import Image from "next/image";
import MainLayout from "@/components/MainLayout";

 

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          <div className="rounded-full overflow-hidden w-64 h-64 shrink-0">
            <Image src="/images/ViktorProfilbild.jpg" alt="Profile image" width={256} height={256} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-center md:text-left">
            Hello, <br /> my name is Viktor <br/> welcome to my portfolio.
          </h1>
        </div>
      </MainLayout>
    </>
  );
}
