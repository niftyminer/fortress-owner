const { expect } = require("chai");
const { constants } = require("ethers");

describe("Gold contract", function () {
  let fortressOwnerContractFactory;
  let fortressOwnerContract;

  beforeEach(async function () {
    fortressOwnerContractFactory = await ethers.getContractFactory("FortressOwner");
    fortressOwnerContract = await fortressOwnerContractFactory.deploy();
    await fortressOwnerContract.deployed();
  });

  describe("Ownership", function () {
    it("finds fortresses", async function () {
  //    const balance = await fortressOwnerContract.balanceOf("0x1282f34438cB205D201DD357398b85E7729Dd3a2"); // nm
//      const balance = await fortressOwnerContract.balanceOf("0x5d1a657411f6975702d3f022990207d7ceb3d50b");
//      const balance = await fortressOwnerContract.balanceOf("0x7bef79f77c415cec176a8157438404e2188699a8"); // vp
     const balance = await fortressOwnerContract.balanceOf("0x0293359127408ef1bddbf78a4f25791e8f2b0a9a"); // c
//     const balance = await fortressOwnerContract.balanceOf("0x1118E66E9B9077714B2cC02F3A8fa667669C5D45"); // OG
//     const balance = await fortressOwnerContract.balanceOf("0xA051587FaF9ac66b28891468c5CC476383Fa0D3b"); // u
//     const balance = await fortressOwnerContract.balanceOf("0xed72c764f97d2625bed4569b3c82c2f6a2346c27"); // u2

      console.log(balance.toString())
      expect(balance.eq(constants.Zero)).to.be.true;
    });
  });
});
