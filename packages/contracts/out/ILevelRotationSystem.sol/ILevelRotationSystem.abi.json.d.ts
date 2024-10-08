declare const abi: [
  {
    "type": "function",
    "name": "setRotationSeasonPass",
    "inputs": [
      {
        "name": "levelId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "inRotation",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRotationStandard",
    "inputs": [
      {
        "name": "levelId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "inRotation",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
