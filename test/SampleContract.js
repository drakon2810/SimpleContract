// test/SampleContract.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SampleContract", function () {
  let sampleContract;

  beforeEach(async function () {
    const SampleContract = await ethers.getContractFactory("SampleContract");
    sampleContract = await SampleContract.deploy();
  });

  it("Should set and get name correctly", async function () {
    const newName = "Alice";
    await sampleContract.setName(newName);
    expect(await sampleContract.getName()).to.equal(newName);
  });

  it("Should set and get age correctly", async function () {
    const newAge = 30;
    await sampleContract.setAge(newAge);
    expect(await sampleContract.getAge()).to.equal(newAge);
  });

  it("Should set amd get information correctly", async function() {
  const newAge = 30;
  const Name = "Bob";
  await sampleContract.setNameAge(Name,newAge);
  expect (await sampleContract.checkNameAge(Name)).to.equal(newAge);
  });
});
