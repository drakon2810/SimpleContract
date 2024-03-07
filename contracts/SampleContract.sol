// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract SampleContract {
    string private name;
    uint256 private age;
    uint256 private date;

    mapping(bytes32 => uint) public information;

    function setName(string memory newName) public {
        name = newName;
    } 
    
    function getName() public view returns(string memory) {
        return name;
    }

    function setAge(uint newAge) public {
        age = newAge;
    }  

    function getAge() public view returns(uint) {
        return age;
    }
    
    function setNameAge(string memory inName, uint inAge) public {
        bytes32 keyHash = keccak256(abi.encodePacked(inName));
        information[keyHash] = inAge;
    }
    function checkNameAge(string memory inName) public view returns(uint256) {
        bytes32 keyHash = keccak256(abi.encodePacked(inName));
        return information[keyHash];
    }
}