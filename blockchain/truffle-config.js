module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        //7545
        network_id: "5777" // Match any network id
      },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/build/',
    compilers: {
      solc: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
}
