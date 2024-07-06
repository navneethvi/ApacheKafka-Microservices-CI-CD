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
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const binaryData = message.value;
          const jsonString = binaryData.toString();
          const jsonData = JSON.parse(jsonString);
          const messageType = jsonData.type;

          console.log(`Received message of type: ${messageType}`);

          if (!jsonData.data) {
            throw new Error("Received message has no data");
          }

          const response = await handleMessage(jsonData.data, messageType);
          if (response) {
            console.log("Processing message:", response);
            await orderProducer(response, "product", "successOrdered");
          }
        } catch (error) {
          console.error("Error processing message:", error.message);
        }
      },
    });

    console.log("Consumer is running and listening to messages...");
  } catch (error) {
    console.error("Error in Kafka Consumer:", error.message);
  }


  process.on('SIGINT', async () => {
    try {
      console.log("Disconnecting consumer...");
      await Consumer.disconnect();
      console.log("Consumer disconnected");
    } catch (error) {
      console.error("Error during consumer disconnection:", error.message);
    } finally {
      process.exit(0);
    }
  });
};


orderConsumer();

export default orderConsumer;
