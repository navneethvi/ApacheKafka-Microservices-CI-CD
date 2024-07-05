import kafka from "../config/kafkaClient.js";
import orderProducer from "./orderProducer.js";
import handleMessage from "./handleMessage.js";

const Consumer = kafka.consumer({
  groupId: "order-service",
});

const orderConsumer = async () => {
  console.log("Consumer Started");
  try {
    await Consumer.connect();
    console.log("Consumer connected!!!");
    await Consumer.subscribe({ topic: "order", fromBeginning: true });
    await Consumer.run({
      eachMessage: async ({ message }) => {
        const binaryData = message.value;
        const jsonString = binaryData.toString();
        const jsonData = JSON.parse(jsonString);
        const messageType = jsonData.type;

        const response = await handleMessage(jsonData.data, messageType);
        if (response) {
          await orderProducer(response, "product", "successOrdered");
        }
      },
    });
  } catch (error) {
    console.log("Error in Kafka Consumer : ", error.message);
  }
};

orderConsumer()

export default orderConsumer