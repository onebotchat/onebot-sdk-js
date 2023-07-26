import { ConversationUpdatedEvent, MessageReceivedEvent, OneBotEventType } from '../src/events';
import { buildClient } from './client';

describe('events', () => {
  jest.setTimeout(3600000);
  const client = buildClient();

  it('listen events', async () => {
    const onMessageReceived = (evt: MessageReceivedEvent) => {
      console.log('received message event: ', evt);
    };

    const onConversationUpdated = (evt: ConversationUpdatedEvent) => {
      console.log('conversation updated event: ', evt);
    };

    client.on(OneBotEventType.MESSAGE_RECEIVED, onMessageReceived);
    client.on(OneBotEventType.CONVERSATION_UPDATED, onConversationUpdated);

    await client.getAccountList({ provider: 'wechat' });
  });
});
