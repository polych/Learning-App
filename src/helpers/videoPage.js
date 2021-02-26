export const seconds = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = (sec % 60).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const fiterSubtitles = (arr, videoTime) => {
  const filteredArr = arr.filter((el) => videoTime >= Number(el.time.start));
  const subtitles = filteredArr.map((el) => ({
    ...el,
    time: { ...el.time, start: seconds(el.time.start) },
  }));
  return [...subtitles].reverse();
};
