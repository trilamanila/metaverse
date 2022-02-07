const withImages = require('next-images')

module.exports = withImages({
  images: {
    disableStaticImages: false,
    domains: ['avatars.dicebear.com'],
  },
})
