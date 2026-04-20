import { generateKeyPairSigner, createSolanaRpc, devnet, address } from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
// Generate a brand new keypair
// const wallet = await generateKeyPairSigner();

// console.log("Your new wallet address:", wallet.address);
// console.log(
//     "\nThis address is your public key.It’s safe to share."
// );
// console.log(
//     "The private key stays in memory.In a real app, you’d save it securely."
// );


const { value: balance } = await rpc.getBalance(address("26ZYuVsJA2kT6dD9qUQsv4GeLc9RGvZFXvq4jT1gQc2P")).send();
// const { value: balance } = await rpc.getBalance(wallet.address).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);    