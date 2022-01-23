module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd9ee5599a555d6c0f06bc03a5656f68'),
  },
});
