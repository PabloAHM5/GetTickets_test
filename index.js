const User = require('./src/actors/user');
const SignIn = require('./src/tasks/signIn');
const GetTickets = require('./src/tasks/getTickets');
const ProcessTickets = require('./src/questions/processTickets');
const report = require('./src/utils/report');

const user = new User('Tester');

async function main() {
    try {
        const token = await user.attemptsTo(SignIn);
        const data = await GetTickets.performAs(user,token);
        //const data = await GetTickets.performAs(user,token,'CLOSED');
       // const data = await user.attemptsTo(GetTickets,token);
        const results = ProcessTickets.extract(data);
        //console.log(data.data.getTickets.rows);
        report(results);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();