import { AudioClips } from "./App"
import React, { useEffect, useState} from 'react';

export const Drum = () =>{ 
  const [activeKey, setActivekey] = useState("")
    useEffect(()=>{
        document.addEventListener("keydown",(event)=>{
            const key1 = AudioClips.find((clip) => clip.keytrigger === event.key.toUpperCase());
            let arr = AudioClips.map((i)=>i.keytrigger)
            let status = arr.some((item) => item===key1.keytrigger)
            if (status===true){
                Playsound(key1.keytrigger,key1)
            }
        })
    }, [])
    const Playsound = function(id,clip){
      document.getElementById(id).play()
      setActivekey(clip.description)
    }
      return (
        <>
          <p className="text2">Press and Enjoy</p>
          <div id='container-sounds'>
          {AudioClips.map((clip) => (
            <button
              onClick={() => Playsound(clip.keytrigger,clip)} key={clip.keytrigger} className="drum-pad" id={clip.description}>
              {clip.keytrigger}
              <audio src={clip.url} id={clip.keytrigger} className="clip"></audio>
            </button>
          ))}
        </div>
        <div id="display">{activeKey}</div>
        </>
      );
    };