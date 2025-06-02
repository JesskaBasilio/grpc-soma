const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('calculator.proto');
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.Calculator;

const client = new calculatorPackage('localhost:50051', grpc.credentials.createInsecure());

client.Sum({ a: 5, b: 3 }, (err, response) => {
  if (err) return console.error(err);
  console.log("🔢 Resultado da soma:", response.result);
});
