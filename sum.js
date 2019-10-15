let args = process.argv;
args = args.slice(2, 4);

args = Number(args[0]) + Number(args[1]);
console.log(args);