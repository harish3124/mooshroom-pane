const anchor = require("@project-serum/anchor");

const main = async () => {
  console.log("🚀 Starting test");

  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Contract;
  const tx = await program.rpc.start();

  console.log("📒 Transaction ID: ", tx);

}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
