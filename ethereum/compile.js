const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

// Delete entire 'build' folder
const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

// Read SC from 'contracts' folder
const crowdfundingPath = path.resolve(__dirname, 'contracts', 'Crowdfunding.sol')

// Read source code
const source = fs.readFileSync(crowdfundingPath, 'utf8')

// Compile both contracts with solidity compiler
const output = solc.compile(source, 1).contracts

// Re-create build folder
fs.ensureDirSync(buildPath)

// console.log(output)
// Write output to the 'build' directory contract.replace(':', '')
for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    )
}


