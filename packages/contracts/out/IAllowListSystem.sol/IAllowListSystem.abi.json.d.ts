declare const abi: [
  {
    "type": "function",
    "name": "isAllowed",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setMembers",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "accounts",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
