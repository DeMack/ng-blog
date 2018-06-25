import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const blogs = [
      // { id: 'id1', title: 'TestPost', fileName: 'Test body', date: '01032017', tags: ['testTag1', 'testTag2'] },
      // { id: 'id2', title: 'TestPost2', fileName: 'Test body 2', date: new Date(), tags: ['testTag1', 'testTag3'] },
      {
        id: '3eca08fd-b874-4054-a1ef-a7f62720332c',
        title: 'The Story so Far',
        date: '04022018',
        project: 'ng-blog',
        tools: [ 'Nokia 6', 'Android 8.0', 'Termux', 'vim', 'Nodejs', 'npm', 'yarn', 'Angular5', 'TypeScript' ],
        tags: [ 'android', 'vim', 'angular', 'fe', 'front end', 'termux', 'node', 'nodejs', 'npm', 'yarn', 'typescript' ],
        bibliography: [
          'https://medium.freecodecamp.org/building-a-node-js-application-on-android-part-1-termux-vim-and-node-js-dfa90c28958f',
          'https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85',
          'http://blog.88mph.io/2017/11/08/equipping-vim-for-typescript-a-newcomers-guide/',
          'https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim',
          'https://github.com/DeMack/dotfiles/blob/master/.vimrc',
          'https://developer.telerik.com/featured/quick-angular-2-hosting-angular-cli-github-pages/',
          'https://blog.cloudboost.io/angular-jest-wallabyjs-why-it-is-the-ideal-combination-and-how-to-configure-b4cbe2eff4b3'
        ],
        fileName: `assets/blogs/story-so-far.md`
      }
    ];
    return { blogs };
  }
}
