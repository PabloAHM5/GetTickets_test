# GetTickets Project

This project is designed to consume GraphQL services using Axios in Node.js. It implements the Screenplay design pattern and follows the specified tasks to consume, process and report ticket results.

## Requirements

- Node.js (v14 o superior)
- npm (v6 o superior)

## Installation

1. Clone this repository:

git clone https://github.com/PabloAHM5/GetTickets_test

2. Install the dependencies:
3. 
npm install

## Project Structure
#### index.js: Main entry point of the project. It orchestrates the main flow of the program.
#### actors/user.js: Defines the actor that will perform the tasks.
#### tasks/signIn.js: Performs the authentication task and obtains the token.
#### tasks/getTickets.js: Performs the task of obtaining the tickets using the obtained token.
#### questions/processTickets.js: Processes and filters the ticket response.
#### utils/report.js: Generates the report of the results.

## Usage
To run the project, simply run:

node index.js


