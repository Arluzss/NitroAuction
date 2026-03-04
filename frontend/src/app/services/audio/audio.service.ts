import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Isso garante que o serviço seja singleton
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;

  constructor() {}

  playAudio(url: string): void {
    if (!this.audio) {
      this.audio = new Audio(url);
      this.audio.loop = true;
      this.audio.volume = 0.4;
      this.audio.play();
    }
  }

  stopAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }

  pauseAudio(): void {
    this.audio?.pause();
  }

  resumeAudio(): void {
    this.audio?.play();
  }

  isPlaying(): boolean {
    return this.audio !== null && !this.audio.paused;
  }
}
