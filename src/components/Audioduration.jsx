async function getAudioDuration(audioUrl) {
    const duration = await new Promise((resolve, reject) => {
      const audio = new Audio(audioUrl);
      audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        audio.remove(); 
        resolve(duration);
      });
      audio.addEventListener('error', reject);
    })
    console.log(duration)
    return duration;
  }

export default getAudioDuration;  