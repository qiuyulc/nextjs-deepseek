import TextArea from "@/app/components/TextArea";
import NavBar from "@/app/components/NavBar";
const ChatPage = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavBar />
      <div className="w-screen lg:w-4/5 h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
        <div className="w-full h-8/10 p-7">
          

        
        </div>
        <div className="w-4/5 h-2/10"><TextArea /></div>
      </div>
    </div>
  );
};

export default ChatPage;
