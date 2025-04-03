"use client";
import { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { UseChatHelpers } from "@ai-sdk/react";
const TextArea = (props: {
  model?: string;
  input?: string;
  handleInputChange?: UseChatHelpers["handleInputChange"];
  handleSubmit?: UseChatHelpers["handleSubmit"];
}) => {
  const { model: prop_model, input, handleInputChange, handleSubmit } = props;

  const [model, setModel] = useState("deepseek-r1");

  const handleModel = () => {
    setModel(model === "deepseek-r1" ? "deepseek-r2" : "deepseek-r1");
  };
  useEffect(() => {
    if (prop_model) {
      setModel(prop_model);
    }
  }, [prop_model]);
  return (
    <div className="w-full h-full flex shadow-[0px_0px_0px_.5px_#dce0e9] flex-col border border-gray-300 rounded-md">
      {/* <div className="h-1/4 flex justify-between items-center">
            <h3 className="pl-2 pt-2 font-bold">这是一个demo</h3>
        </div> */}
      <div className="h-2/3">
        <textarea
          value={input}
          onChange={handleInputChange}
          className="w-full h-full p-2 pt-6 outline-none resize-none"
          placeholder="我能帮你做什么？"
        ></textarea>
      </div>
      <div className="h-1/3 flex justify-between items-center">
        <div
          onClick={handleModel}
          className={`w-30 h-9 text-center ${
            model === "deepseek-r1"
              ? "text-[#4CAEFF] border-[#007aff26] bg-[#DBEAFE] drak:bg-[#4d6bfe66]"
              : "border-gray-300"
          } border  leading-9 rounded-md cursor-pointer ml-4`}
        >
          深度思考(R1)
        </div>
        <div onClick={handleSubmit} className="shrink-0 rounded-full border border-gray-300 p-2 mr-4 cursor-pointer">
          <EastIcon />{" "}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
