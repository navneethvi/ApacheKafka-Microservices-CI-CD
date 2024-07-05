import kafka from "../config/kafkaClient.js";

const Producer = kafka.producer();

const orderProducer = async (data, topic, type) => {
  try {
    if (!data) {
      throw new Error("Invalid Data!!!");
    }
    await Producer.connect(console.log("Connected to Produce"));

    const messagePayload = {
      type: type,
      data: data,
    };

    console.log("messagePayload in Producer : ", messagePayload.data);

    const result = await Producer.send({
      topic: topic,
      messages: [{ value: JSON.stringify(messagePayload) }],
    });

    console.log("result from producer : ", result);

    if (result && result[0] && result[0]?.error) {
      throw new Error("Message Production Failed !!!");
    }
  } catch (error) {
    console.log("Error in order Producer : ", error.message);
  } finally {
    await Producer.disconnect();
  }
};

export default orderProducer