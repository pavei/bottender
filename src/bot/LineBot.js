/* @flow */

import { type SessionStore } from '../session/SessionStore';

import Bot from './Bot';
import LineConnector from './LineConnector';

export default class LineBot extends Bot {
  constructor({
    accessToken,
    channelSecret,
    sessionStore,
    origin,
    sync,
    mapDestinationToAccessToken,
    shouldBatch,
    sendMethod,
  }: {
    accessToken: string,
    channelSecret: string,
    sessionStore: SessionStore,
    sync?: boolean,
    mapDestinationToAccessToken?: (destination: string) => Promise<string>,
    shouldBatch: ?boolean,
    sendMethod: ?string,
    origin?: string,
  }) {
    const connector = new LineConnector({
      accessToken,
      channelSecret,
      mapDestinationToAccessToken,
      shouldBatch,
      sendMethod,
      origin,
    });
    super({ connector, sessionStore, sync });
  }
}
