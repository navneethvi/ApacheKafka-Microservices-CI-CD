import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "order",
  brokers: ["demo-kafka:9092"],
});

export default kafka;
