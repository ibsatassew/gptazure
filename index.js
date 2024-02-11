import { Configuration, OpenAIAPi } from "openai";
const configuration = new Configuration({
  organization: "org-b4yoXRRajWPgFQUXwLyT6ey0",
  apiKey: "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",
});

const openai = new OpenAIAPi(configuration);

const completion = await openai.createCompletion({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "Hello world" }],
});

console.log(completion.data.choices[0].message);
