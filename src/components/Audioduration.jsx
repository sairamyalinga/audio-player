async function getAudioDuration(audioUrl) {
    return new Promise((resolve, reject) => {
      const audio = new Audio(audioUrl);
      audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        audio.remove(); 
        resolve(duration);
      });
      audio.addEventListener('error', reject);
    });
  }

export default getAudioDuration;  