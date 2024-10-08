declare const abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_world",
        "type": "address",
        "internalType": "contract IBaseWorld"
      },
      {
        "name": "_systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "log",
    "inputs": [
      {
        "name": "eventSignature",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "topic1",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "topic2",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "topic3",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "eventData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "log",
    "inputs": [
      {
        "name": "eventSignature",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "topic1",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "topic2",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "eventData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "log",
    "inputs": [
      {
        "name": "eventSignature",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "eventData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "log",
    "inputs": [
      {
        "name": "eventSignature",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "topic1",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "eventData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "systemId",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "world",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IBaseWorld"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "error",
    "name": "Puppet_AccessDenied",
    "inputs": [
      {
        "name": "caller",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
]; export default abi;
