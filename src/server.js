const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const loadBalancerRoutes = require('./routes/loadBalancerRoutes');
const logRequest = require('./middlewares/logger');

const app = express();
const port = 3000;

app.use(express.json());
app.use(logRequest);

app.use('/', apiRoutes);
app.use('/', loadBalancerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
