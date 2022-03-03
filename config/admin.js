module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fcb95ab271754002e3e95ef23a5b7f17'),
  },
});
