declare const abi: [
  {
    "type": "function",
    "name": "spawnTemplate",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "prototypeId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "ownerId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "position",
        "type": "tuple",
        "internalType": "struct PositionData",
        "components": [
          {
            "name": "x",
            "type": "int32",
            "internalType": "int32"
          },
          {
            "name": "y",
            "type": "int32",
            "internalType": "int32"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
