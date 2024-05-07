const Hapi = require('@hapi/hapi');
const routes = require('./routes');

/**
 * Initiate Hapi Server
 * @returns {Promise<Hapi.Server>}
 */
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();

  // Development
  // console.log(`Server berjalan pada ${server.info.uri}`);

  return server;
};

init();
