declare const abi: [
  {
    "type": "function",
    "name": "build",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "factoryEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "templateId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "coord",
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
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  }
]; export default abi;
