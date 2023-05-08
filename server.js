const chalk = require('chalk');
const app = require("./app");
const PORT = process.env.PORT || PORT;

// Server
app.listen(PORT, () => {
    console.log(chalk.green(`server is running on Port ${PORT}`))
})




