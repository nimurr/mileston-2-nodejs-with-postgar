const os = require("os");

console.log("System info ");
console.log('-'.repeat(50))

console.log("Platform Details :")
console.log("Platform :", os.platform());
console.log("Architecture :", os.arch());
console.log("Type :", os.type())
console.log("OS Release :", os.release())
console.log('Host Name :', os.hostname())



console.log("\nCPU info :")
console.log('-'.repeat(50))

const cpus = os.cpus();
console.log("CPU Model :- ", cpus[0].model)
console.log("Number of Cores :- ", cpus.length)
console.log("CPU Speed :- ", cpus[0].speed, "MHz")

const totalMem = os.totalmem() / (1024 ** 3); // Convert to GB
const freeMem = os.freemem() / (1024 ** 3); // Convert to GB

console.log("\nMemory info :")
console.log('-'.repeat(50))
console.log(`Total Memory : ${totalMem.toFixed(2)} GB`);
console.log(`Free Memory : ${freeMem.toFixed(2)} GB`);
console.log(`Used Memory : ${(totalMem - freeMem).toFixed(2)} GB`);
console.log(`Memory Usage : ${((totalMem - freeMem) / totalMem * 100).toFixed(2)} %`);

console.log("\nNetwork Interfaces :")
console.log('-'.repeat(50))
const networkInterfaces = os.networkInterfaces();
for (const interfaceName in networkInterfaces) {
    const networkInterface = networkInterfaces[interfaceName];
    for (const address of networkInterface) {
        console.log(`Interface: ${interfaceName}`);
        console.log(`Address: ${address.address}`);
        console.log(`Family: ${address.family}`);
        console.log(`Internal: ${address.internal}`);
        console.log('-'.repeat(50))
    }
}