async function main() {
  // Name of the Tocken to be deployed
  const name = 'VAI Token';
  // Symbol of the Tocken to be deployed
  const symbol = 'VAI';
  
  
  const Token = await ethers.getContractFactory("Token");
 // Deploy the tocken with initial supply of 50 tockens 
  const token = await Token.deploy(name, symbol, "50000000000000000000");
  await token.deployed();
  console.log("Token deployed to:", token.address);
  console.log("owner: ", await token.owner());
  
  //Change the owner of the contract after deployment, if not needed removed the below code line
  const res = await token.transferOwnership("0x91524D7A3D1f1F8cB5C04431BecCB77e180852E3");
  console.log("transfer ownership: ", res);
  console.log("new owner: ", await token.owner());
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });