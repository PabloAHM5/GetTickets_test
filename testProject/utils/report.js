const fs = require('fs');

function report(results) {
    const output = `
  State Counts: ${JSON.stringify(results.stateCounts, null, 2)}
  Channel Counts: ${JSON.stringify(results.channelCounts, null, 2)}
  Category Counts: ${JSON.stringify(results.categoryCounts, null, 2)}
  `;

    console.log(output);

    fs.writeFileSync('report.txt', output);
}

module.exports = report;
