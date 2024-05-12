
import { useRef } from "react";
import { Inter } from "next/font/google";
import Transcription from "@/components/Transcription";
import transcription from "./utils";
import audio from "../audio/Test_Call.wav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const audioRef = useRef(null);

  const playFrom = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      audioRef.current.play();
    }
  };

  return (
    <main
      className={`flex min-h-screen justify-center gap-10 p-24 ${inter.className} bg-gradient-to-b from-cyan-950 to-indigo-700`}
    >
      <Transcription transcription={transcription} playFrom={playFrom} />
      <div >
        <audio ref={audioRef} controls>
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </main>
  );
}
