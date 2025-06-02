const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('calculator.proto');
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.Calculator;

function sum(call, callback) {
  const result = call.request.a + call.request.b;
  callback(null, { result });
}

const server = new grpc.Server();
server.addService(calculatorPackage.service, { Sum: sum });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log("🟢 Servidor gRPC rodando em http://localhost:50051");
  server.start();
});