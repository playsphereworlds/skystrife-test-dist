declare const abi: [
  {
    "type": "function",
    "name": "fight",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "entity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "target",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "move",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "entity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "path",
        "type": "tuple[]",
        "internalType": "struct PositionData[]",
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
  },
  {
    "type": "function",
    "name": "moveAndAttack",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "entity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "path",
        "type": "tuple[]",
        "internalType": "struct PositionData[]",
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
      },
      {
        "name": "target",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
