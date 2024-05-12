import { useRef } from "react";
import { Inter } from "next/font/google";
import Transcription from "@/components/Transcription";
import {transcription} from "./utils";
import audio from "../public/Test_Call.wav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playFrom = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      audioRef.current.play();
    }
  };

  return (
    <>
    <Head>
      <title>Audio Salto</title>
    </Head>
    <main
      className={`flex min-h-screen flex-col p-4 md:p-24 ${inter.className} bg-gradient-to-b from-cyan-950 to-indigo-700`}
    >
      <h1 className="text-3xl font-bold tracking-wide text-cyan-50 self-center">Audio Salto</h1>
      <div className="flex flex-wrap justify-center gap-10 p-4 md:p-20">
        <div className="relative w-72">
          <audio ref={audioRef} controls className="min-[1192px]:fixed">
            <source src={audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <Transcription transcription={transcription} playFrom={playFrom} />
      </div>

    </main>
    </>
  );
}
