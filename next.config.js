module.exports = {
  future: {
    // webpack5: true,
  },
  target: "serverless",

  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dhtq82bwv/image/upload/",
  },
};
