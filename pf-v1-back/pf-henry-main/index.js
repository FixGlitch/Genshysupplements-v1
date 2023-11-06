const dotenv = require('dotenv');
dotenv.config();
const server = require("./src/server");
const PORT = 3001;

server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
});

