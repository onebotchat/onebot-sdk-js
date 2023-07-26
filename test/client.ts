import OneBotClient, { LogLevel } from '../src/index';

const buildClient = (): OneBotClient => {
  const client = new OneBotClient(process.env.ONEBOT_ACCESS_TOKEN as string, {
    baseUrl: process.env.ONEBOT_BASE_URL,
    subscribeKey: process.env.ONEBOT_SUBSCRIBE_KEY,
    logLevel: LogLevel.WARN,
  });
  return client;
};

export { buildClient };
