import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const blogs = [
      { id: 'id1', title: 'TestPost', body: 'Test body', date: new Date(), tags: ['testTag1', 'testTag2'] },
      { id: 'id2', title: 'TestPost2', body: 'Test body 2', date: new Date(), tags: ['testTag1', 'testTag3'] }
    ];
    return blogs;
  }

}
