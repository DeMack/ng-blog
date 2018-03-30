import { InMemoryDbService } from 'angular-in-memory-web-api';

const UUID = require('uuid/v4');
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const blogs = [
      { id: UUID(), title: 'TestPost', body: 'Test body', date: new Date(), tags: ['testTag1', 'testTag2'] },
      { id: UUID(), title: 'TestPost2', body: 'Test body 2', date: new Date(), tags: ['testTag1', 'testTag3'] }
    ];
    return blogs;
  }

}
