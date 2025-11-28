exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, message: 'Ping from Netlify functions bundle', time: new Date().toISOString() }),
  };
};
