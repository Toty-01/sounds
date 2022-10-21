import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";

import kick from "../assets/sounds/GC1.mp3"
import clair from "../assets/sounds/clair1.mp3"
import hat from "../assets/sounds/hi-hat1.mp3"
import tom from "../assets/sounds/tom2.mp3"

export default function useSounds() {
const mySampler = useRef(null);

const [isKickPlayed, isKickPlayedChange] = useState(false);
const [isClairPlayed, isClairPlayedChange] = useState(false);
const [isHatPlayed, isHatPlayedChange] = useState(false);
const [isTomPlayed, isTomPlayedChange] = useState(false);

useEffect(() => {
const sampler = new Tone.Sampler({
		"C4": hat,
		"D#4": clair,
		"F#4": tom,
		"A4": kick,
}).toDestination();
Tone.loaded().then(() => {
	mySampler.current = sampler;
})
}, []);

  function soundPlay(note){
    mySampler.current.triggerAttackRelease([note], 4);
  }

  function handleKeyDown({key}) {
    switch (key) {
      case "ArrowUp":
        isHatPlayedChange(true);
        window.setTimeout(() => isHatPlayedChange(false), 200);
        soundPlay("C4");
      break;
      case "ArrowRight":
        isClairPlayedChange(true);
        window.setTimeout(() => isClairPlayedChange(false), 200);
        soundPlay("D#4");
      break;
      case "ArrowLeft":
        isTomPlayedChange(true);
        window.setTimeout(() => isTomPlayedChange(false), 200);
        soundPlay("F#4");
      break;
      case "ArrowDown":
        isKickPlayedChange(true);
        window.setTimeout(() => isKickPlayedChange(false), 200);
        soundPlay("A4");
      break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, []);

function handleSampleChange(note, file) {
  let fileURL = URL.createObjectURL(file);
  let buffer = new Tone.Buffer(fileURL);
  mySampler.current.add(note, buffer, () =>
    alert("Sample succesfully changed")
    );
}

const buttonsList = [
  {
    soundPlay : ()=> soundPlay("C4"),
      isPlayed: isHatPlayed,
      id: "hat",
      handleSampleChange : (e) => handleSampleChange("C4", e.target.files[0]),
  }, 
  {
    soundPlay : ()=> soundPlay("D#4"),
    isPlayed: isClairPlayed,
    handleSampleChange : (e) => handleSampleChange("D#4", e.target.files[0]),
    id: "clair",
  }, 
  {
    soundPlay : ()=> soundPlay("F#4"),
    isPlayed: isTomPlayed,
    handleSampleChange : (e) => handleSampleChange("F#4", e.target.files[0]),
    id: "tom",
  }, 
  {
    soundPlay : ()=> soundPlay("A4"),
    isPlayed: isKickPlayed,
    handleSampleChange : (e) => handleSampleChange("A4", e.target.files[0]),
    id: "cick",
  },
];

return {buttonsList};
}