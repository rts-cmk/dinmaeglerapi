module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
      upload_presest: env("CLOUDINARY_UPLOADPRESET"),
    },
    breakpoints: {
      thumbnail: 500,
    },
  },
  // ...
});
