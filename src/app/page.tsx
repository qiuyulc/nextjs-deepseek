import NavBar from "@/app/components/NavBar";
import TextArea from "@/app/components/TextArea";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavBar />
      <div className="w-screen lg:w-4/5 h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
        <div className="w-3/5 h-1/3"><TextArea /></div>
      </div>
    </div>
  );
}
