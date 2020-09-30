const router = require('express').Router();

const routes = ['users', 'session', 'dashboard', 'states', 'cities', 'cardrooms'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}


module.exports = router;
