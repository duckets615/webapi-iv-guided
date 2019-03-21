const server = require('./api/server.js');
require('dotenv').config();
const port = process.env.PORT || 5000

server.listen(4000, () => {
  console.log(`\n*** Server rolling on port: ${port} ***\n`);
});
