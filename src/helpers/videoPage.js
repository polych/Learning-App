export const seconds = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = (sec % 60).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const fiterSubtitles = (arr, videoTime) => {
  const filteredArr = arr.filter((el) => videoTime >= +el.start);
  const subtitles = filteredArr.map((el) => ({
    ...el,
    start: seconds(el.start),
  }));
  return [...subtitles].reverse();
};
export const captionText = (arr, videoTime) => {
  const a = arr.filter((el) => videoTime >= +el.start);
  if (a.length > 0) {
    return a[a.length - 1].text;
  }
};
