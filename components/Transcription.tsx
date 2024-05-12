import { Message } from "@/utils"

interface TranscriptionProps {
    transcription: Message[],
    playFrom:(start:number)=>void
}
const Transcription = ({transcription, playFrom}: TranscriptionProps)=> {

    function capitalizeFirstLetter(str: string): string {
        return str.replace(/^\w/, c => c.toUpperCase());
      }

    return(
        <div className="flex flex-col gap-3 max-w-lg">
            {
            transcription.map(message=> (
                <div
                key={message.start} 
                className={`flex flex-col px-3.5 hover:px-4 py-3 bg-gray-100 bg-opacity-70 hover:bg-opacity-80 shadow-md hover:shadow-2xl rounded-3xl justify-start w-fit cursor-pointer ${message.role === "agent"? "rounded-tl-none" : "rounded-tr-none items-end self-end"}`}
                onClick={() => playFrom(message.start)}
                >
                    <h3 className="font-bold w-fit px-3">{capitalizeFirstLetter(message.role)}</h3>
                    <p className={`${message.role !== "agent" && "text-right"} w-fit p-3 hover:animate-pulse `}>{message.content}</p>
                
                </div>
            ))
            }
        </div>
    )
}

export default Transcription;