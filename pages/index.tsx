
import { Inter } from "next/font/google";
import transcription from "./utils";

const inter = Inter({ subsets: ["latin"] });

function capitalizeFirstLetter(str: string): string {
  return str.replace(/^\w/, c => c.toUpperCase());
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-gradient-to-b from-cyan-950 to-indigo-700`}
    >
      <div className="flex flex-col gap-3 max-w-lg">
        {
          transcription.map(message=> (
            <div key={message.start} className={`flex flex-col px-3.5 py-3 bg-gray-100 bg-opacity-70 shadow-md hover:shadow-2xl rounded-3xl justify-start w-fit cursor-pointer ${message.role === "agent"? "rounded-tl-none" : "rounded-tr-none items-end self-end"}`}>
                <h3 className="font-bold w-fit px-3">{capitalizeFirstLetter(message.role)}</h3>
                <p className={`${message.role !== "agent" && "text-right"} w-fit p-3 hover:animate-pulse `}>{message.content}</p>
              
            </div>
          ))
        }
      </div>
      
    </main>
  );
}
