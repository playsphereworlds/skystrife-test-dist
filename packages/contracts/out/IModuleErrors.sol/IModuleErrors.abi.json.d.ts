declare const abi: [
  {
    "type": "error",
    "name": "Module_AlreadyInstalled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Module_MissingDependency",
    "inputs": [
      {
        "name": "dependency",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "Module_NonRootInstallNotSupported",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Module_RootInstallNotSupported",
    "inputs": []
  }
]; export default abi;
