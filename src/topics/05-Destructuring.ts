interface Details {
  author: string;
  year: number;
}

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

const details1: Details = {
  author: "Ulises GC",
  year: 2010,
};

const audioPlayer1: AudioPlayer = {
  audioVolume: 0,
  songDuration: 0,
  song: "Mess Around",
  details: details1,
};

// Destructuración
const {
  audioVolume: volume,
  songDuration: duration,
  song: name,
  details: deta,
} = audioPlayer1;
console.log(`audioVolume: ${volume}`);
console.log(`songDuration: ${duration}`);
console.log(`Song: ${name}`);
console.log(`details: ${deta}`);

// Destructuring Arrays
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

const [, , trunks]: string[] = dbz;

console.log(trunks);

export {};

export {};
