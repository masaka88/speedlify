module.exports = {
  name: "nicovideo", // optional, falls back to object key
  description: "nicovideo(PC)",
  options: {
    frequency: 3, // (in minutes)
    freshChrome: "site",
    emulatedFormFactor: "desktop",
  },
  urls: ["https://www.nicovideo.jp/", "https://www.nicovideo.jp/watch/sm9"],
};
