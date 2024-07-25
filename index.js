const User = require('./testProject/actors/user');
const SignIn = require('./testProject/tasks/signIn');
const GetTickets = require('./testProject/tasks/getTickets');
const ProcessTickets = require('./testProject/questions/processTickets');
const report = require('./testProject/utils/report');

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