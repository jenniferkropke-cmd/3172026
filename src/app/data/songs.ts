export interface Song {
  id: string;
  title: string;
  theme: string;
  genre: string;
  duration: string; // Full version duration
  audioFile: string; // Path to the preview file in /public
}

export const songs: Song[] = [
  {
    id: "here-i-am-until",
    title: "Here I Am Until",
    theme: "The emotional impact of growing up in a dysfunctional home where pain is hidden behind forced normalcy",
    genre: "alternative rock",
    duration: "3:22",
    audioFile: "/audio/here-i-am-until-preview.mp3"
  },
  {
    id: "in-8-counts",
    title: "In 8 Counts",
    theme: "Using dance as a lifeline to survive trauma and reclaim control, identity, and strength",
    genre: "alternative pop",
    duration: "3:39",
    audioFile: "/audio/in-8-counts-preview.mp3"
  },
  {
    id: "my-shame",
    title: "My Shame",
    theme: "Struggling to break free from a toxic relationship where love, pain, and emotional dependency are deeply intertwined",
    genre: "emo rock",
    duration: "2:54",
    audioFile: "/audio/my-shame-preview.mp3"
  },
  {
    id: "fall-apart",
    title: "Fall Apart",
    theme: "Relapsing into emotional pain after encountering someone who once broke you, and realizing the healing was never complete",
    genre: "jazz blues",
    duration: "3:21",
    audioFile: "/audio/fall-apart-preview.mp3"
  },
  {
    id: "lets-restart",
    title: "Let's Restart",
    theme: "Being unable to let go of a toxic love despite knowing it causes pain, caught in a cycle of heartbreak and emotional relapse",
    genre: "hard rock",
    duration: "2:34",
    audioFile: "/audio/lets-restart-preview.mp3"
  },
  {
    id: "bleed-in-stereo",
    title: "Bleed In Stereo",
    theme: "Losing yourself in an all-consuming love that turns destructive, and ultimately reclaiming strength through emotional collapse",
    genre: "emo rock",
    duration: "3:49",
    audioFile: "/audio/bleed-in-stereo-preview.mp3"
  },
  {
    id: "ignorant",
    title: "Ignorant",
    theme: "Calling out emotional immaturity and toxic behavior in relationships, and reclaiming self-worth through clarity and boundaries",
    genre: "pop rock",
    duration: "3:07",
    audioFile: "/audio/ignorant-preview.mp3"
  },
  {
    id: "still-here",
    title: "Still Here",
    theme: "Surviving sexual assault and reclaiming identity through quiet resilience and continued existence",
    genre: "alternative rock",
    duration: "4:46",
    audioFile: "/audio/still-here-preview.mp3"
  },
  {
    id: "sirius",
    title: "Sirius",
    theme: "Escaping into an all-consuming love that creates a sense of wonder, only to collapse into isolation and repeat the cycle",
    genre: "pop rock ballad",
    duration: "2:52",
    audioFile: "/audio/sirius-preview.mp3"
  },
  {
    id: "fire-and-glitter",
    title: "Fire and Glitter",
    theme: "Navigating a complex mother-daughter relationship shaped by love, pain, and ultimately finding understanding and forgiveness",
    genre: "indie rock power ballad",
    duration: "3:42",
    audioFile: "/audio/fire-and-glitter-preview.mp3"
  },
  {
    id: "i-am",
    title: "I Am",
    theme: "Embracing identity as a complex balance of contradictions, reclaiming power through self-acceptance and personal truth",
    genre: "piano ballad",
    duration: "4:47",
    audioFile: "/audio/i-am-preview.mp3"
  },
  {
    id: "16-candles",
    title: "16 Candles",
    theme: "A mother grappling with regret, accountability, and unconditional love after losing connection with her child",
    genre: "rock ballad",
    duration: "5:27",
    audioFile: "/audio/16-candles-preview.mp3"
  },
  {
    id: "madelyn",
    title: "Madelyn",
    theme: "Breaking generational cycles through intentional motherhood, choosing presence, healing, and emotional safety",
    genre: "punk rock ballad",
    duration: "3:02",
    audioFile: "/audio/madelyn-preview.mp3"
  },
  {
    id: "and-stayed",
    title: "And Stayed",
    theme: "Witnessing and supporting another survivor's healing while breaking cycles of trauma together through connection and understanding",
    genre: "alternative rock",
    duration: "4:09",
    audioFile: "/audio/and-stayed-preview.mp3"
  },
  {
    id: "how-the-cycle-breaking",
    title: "How The Cycle Breaking",
    theme: "Breaking generational cycles through intentional, imperfect love built on presence, healing, and daily choice",
    genre: "piano ballad",
    duration: "3:52",
    audioFile: "/audio/how-the-cycle-breaking-preview.mp3"
  },
  {
    id: "the-endless-possibility",
    title: "The Endless Possibility",
    theme: "Discovering that true power comes not from escaping pain, but from surviving, rebuilding, and choosing to rise anyway",
    genre: "pop/edm anthem",
    duration: "4:41",
    audioFile: "/audio/the-endless-possibility-preview.mp3"
  }
];

// Helper function to get a song by ID
export function getSongById(id: string): Song | undefined {
  return songs.find(song => song.id === id);
}

// Helper function to get all songs
export function getAllSongs(): Song[] {
  return songs;
}
