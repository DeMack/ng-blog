import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const blogs = [
      //region general
      {
        id: '92b1b781-83fa-42cb-8af7-d46b710a6b25',
        title: 'Inner Manager',
        date: '06/25/2017',
        project: 'general',
        body: `# My Inner Bureaucrat
I have a lot of ideas. I mean, a ton of ideas. I have more ideas in my head than I could possibly ever have time to complete, and I'm sure I'm not alone in that. Any of those ideas could be huge 
(OK, if I'm being honest, maybe not _any_). Because of this awe-inspiring plethora of wonderful ideas running around my head like gazelles in an African savannah I have a problem. What do I work on?
I'll admit too many ideas isn't a bad problem to have, but it is a problem. Any one of them would be exciting to work on, made the more so because they are my ideas. There are so many hours in a day,
so I can only work on so much at a time. 

I could actually start all of them, and work on each little by little, but as any Kanaban adherent will tell you, the quickest way to deliver value is limiting work in progress. This is especially 
true for a one man army. That being said, I actually have two buffers open in vim as I write this... To answer this I've started calling on my inner bureaucrat. In cartoons you could often see a 
little angel and a devil on a character's shoulders; well, for me on one side I have a bureaucrat and the other a slacker. To be honest, the slacker is definitely the driver far more often, but
I've started seeing a very real need for the bureaucrat. He keeps me organized...sort of...and has helped me understand I can't do everything all at once, so he's the one that's directing my focus
and the one who tries to listen to my justifications for what project I want to work on when, and ultimately the one that tells when I've totally missed the mark on an idea to bring me back on track.

Side note, this post absolutely had his approval.
`,
        tags: [ 'rant', 'advice', 'practice', 'productivity' ],
      },
      //endregion
      //region ng-blog
      {
        id: '3eca08fd-b874-4054-a1ef-a7f62720332c',
        title: 'The Story so Far',
        date: '04022018',
        project: 'ng-blog',
        body: `## Intro
I have a ton of ideas. It’s gotten to the point that my wife just rolls
her eyes whenever I tell her I had a new one. Granted,
it’s usually because most of my ideas are absolutely insane (side note, I should totally start a separate
list here that’s just all the absolutely horrendous ideas that I have), but a lot of times it can also be
because she knows odds are that I will never follow through; I have a ton of unfinished projects split between
five separate laptops, some of which actually were really good ideas.

I think the largest problem I encounter is time.

Whenever I’m working on a project, that project holds about 85% of my attention,
but I can’t just sit down and break out a laptop in the middle of the DMV. For years now I’ve been trying
to imagine a whole rig that I could set up and bring with me wherever I went. Eventually I do still dream
of an AR workspace, but for now I decided to just try on my phone. Though I’d had the thought before, I never
really considered my phone to be a productive environment because half the screen real estate is taken up
by the keyboard (I’ve since realized I never actually look at more than about 3 lines at a time anyway; if
I need to shift my attention to another line, subconsciously my first action is to scroll).

Recently, more just to see if I could than anything else, I decided to just go for it. Some of the problems I’ve run into
were because I don’t want to root my phone. If I just gave myself root access, I wouldn’t have to set up
my workspace quite the way I have, but I wanted to keep this as simple as possible, so that the next time
I switch phones, I can basically just lift what I have out, and drop it into the new one.

## Phone Meet Termux
I already wanted to start this blog, so I thought it would be the perfect guinea pig. That meant I had a couple
of requirements right from the start. I wanted to use Angular 5 to get to know it, so that meant I needed
Nodejs and npm, and that meant I needed a terminal. I found
[this](https://medium.freecodecamp.org/building-a-node-js-application-on-android-part-1-termux-vim-and-node-js-dfa90c28958f)
post that walked me through getting the Android terminal Termux set up and then, using the same, Node and npm.

That was simple enough. Just install an app, and use it’s package manager to grab the latest version of Node and npm. Then
it got a little difficult. I will admit to not understanding the inner workings of Android at all before
starting this process (and I still don’t for the most part), but I have now learned a bit about its internal
structure and why/how it emulates certain paths. Learning that was what made me want to break the not-rooting
rule, but it also solidified one of the largest arguments I have for not doing so: security. Android is locked
down for _mostly_ good reasons, and if I can work within those constraints, that’s what I want to do.

The first problem I ran into was trying to run \`yarn install\` on a project created anywhere outside the
\`home\` directory created by Termux. To grossly oversimplify, Android file permissions prevent a user from creating
symlinks outside that directory from inside Termux without root access. OK, that’s annoying but I can work
with that. I can at least bootstrap an Angular app and run it from within that directory.

## The "IDE"
Next on my list: an IDE. Several searches and reviews all pointed me to the same app; I won’t put it directly,
but even a cursory Google search should make it fairly obvious. I had two problems with it:
* I wasn’t able to navigate to the folder where I had just bootstrapped my app (and now that I think about it, even if I had
been able to since it was a directory that belonged to Termux, I wouldn’t have been able to access it anyway)
* Its constant begging for money was a huge turnoff (I already know how to code, I’m not going to pay so you can give me some
crappy “course”, and say congrats, you’re officially a developer).

I tried several other “IDE” apps, but they all had the same problems. That led me to a very serious question: What now? I’ve
never developed outside an IDE. Even the work I’ve done in Sublime or Visual Studio Code had so many plugins,
I pretty much turned them into IDE’s.

The answer: \`vim\`. I know someone who swears by it, and does all of their development work in it. I’m a nerd, and
I always love to learn a new tool, so I thought, “Yeah, I’ll give it a shot. If it really is as bad as I
remember, I’ll try something else.” I feel that two things have really made me successful in that endeavor:
[this](https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85)
blog and my own curiosity.

Two major things to take away from that blog:
* Run through the \`vimtutor\` every day for a few days (if not the whole week it recommends)
* How to configure vim (which is really just a link to another blog that tells you how to set up a \`.vimrc\` file)

I will admit, I didn’t actually follow the whole plan. I’d be on step two right now if I had, but I learn much more by use,
than spending only half an hour a day with a tutor. Also, after using vim for a week or so I’d recommend
going back and doing the tutor again. I definitely picked up a couple more things when I did.

Vim has actually proven to be a great development environment. It definitely took some getting used to, but after I got a
good \`.vimrc\` set up, it felt as natural as Sublime or VSC. The only phone specific problems I’ve had were related to
YouCompleteMe. YCM is an amazing tool that I have on my laptop’s configuration, but wouldn’t work on my phone
as there’s a compiled portion that I just couldn’t get to compile on my phone. After trying to compile a
few different ways, I decided that code completion, while definitely useful, wasn’t required, so I just moved
on instead of spending more time to actually figure out why it wasn’t working.

I followed a couple blogs to set up vim for \`TypeScript\` ([here](http://blog.88mph.io/2017/11/08/equipping-vim-for-typescript-a-newcomers-guide/) and
[here](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim)).
My own \`.vimrc\` can be found [here](https://github.com/DeMack/dotfiles/blob/master/.vimrc).

## Tests
So, I have my environment set up. I have a git repo (obviously…) to be able to switch from my laptop to my phone on occasion,
but the idea is to force myself do the majority of the development on my phone. The only times I’ve used
my laptop have been when it was just already out. (As a side note, I also set up my github pages site following
[this](https://developer.telerik.com/featured/quick-angular-2-hosting-angular-cli-github-pages/) blog.)

And that was it. I was off. I started building my core classes and services, and then got all excited decided to test. And that
was where I hit a brick wall that took me a few days to fix (It honestly probably took me far longer
than it should have to find the fix, but I had literally 0 experience or knowledge with JavaScript testing
frameworks). The problem was how Karma tries to pull up a browser when it runs tests. Again, given how Android
works, Termux could not run the Chrome app.

The first suggestion I found was PhantomJS, which sounded like the perfect solution. It wasn’t. PhantomJS doesn’t have a
prebuilt AMD64 binary, so I would have had to compile it from source. If I were working primarily on a laptop
I probably would have done exactly that and moved on, but it was going to require I find several other packages
and all in all I think their instructions say it takes about 3 gigs of space. I do not have that luxury on
my phone, so that solution fell through.

Searching for an alternative brought me across [this](https://blog.cloudboost.io/angular-jest-wallabyjs-why-it-is-the-ideal-combination-and-how-to-configure-b4cbe2eff4b3)
blog. It suggests and instructs how to set up Jest as the main testing framework, and it was
exactly what I needed. With my tests set up and running on my phone I was once again able to move forward.

And that’s where I am now. I’ll keep updating this project with all the interesting lessons I learn and see where it takes
me.`,
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
        ]
      },
      {
        id: '111d243d-285b-4d2d-af41-f93583337892',
        title: 'Markdown Fight',
        date: '06/27/2018',
        project: 'ng-blog',
        body: `## Adding Markdown
I have markdown support, though getting here was way more trouble than I expected. In order to provide support for 
markdown I decided to use [this](https://github.com/jfcere/ngx-markdown) library. The documentation is great, and it provides
a ton of great features, so it should be super simple, right? Definitely not.

## Inevitable Headaches
No matter what feature I'm working on, I always seem to run into completely random nonsensical problems; this time was no exception. 
My grand design was to have a nice organized project and db. In the db I just wanted to store a string value with the path to a 
corresponding \`.md\` file which would be stored in the \`assets\` folder, thus keeping the in memory \`JSON\` db to a nice, manageable,  and 
readable size.

Didn't happen.

At first I thought maybe I just the path wrong. This was honestly a fear that I never quite shook, so in every subsequent step while
trying to fix this it was combined with trying every version of the file path I could think of. It never worked.

## A Hint of Success
After failing to find a path that led to the proper file, I decided maybe that wasn't it (but, again, I was never really convinced 
of that). Then I thought maybe it was the component I was trying to work, so to test that I just hard-coded the text into the body
of my blog component. That worked! But that success was a small joy; a blog site isn't much use if there's only one hard-coded blog.
So, armed with the confidence that the component was actually working, I dug in again

## Freaking Assets
It was then that I realized that even though my blog entry was actually in the \`assets\` folder, it wasn't actually getting bundled
when I used \`ng serve\`. After reading in a few places, I thought maybe the problem had something to do with that command, so I tried
to build and publish to see what it looked like live. That worked about as well as a "piano player in a marching band" (- Larry the
Cable Guy). 

I then tried to bring in an image file to see if there was something wrong with the way I had my assets configured in my \`angular.json\`.
The random internet image worked perfectly well to my extreme frustration. After spending way too long trying to rename things and 
move things, even trying some other random library, and do anything and everything I could think of to find some way to get the markdown
file to bundle, I have come to a conclusion: the Angular CLI only bundles something in the assets folder if it is explicitly used 
from the start. Since I was trying to load the markdown file dynamically, the CLI - probably in some kind of attempt to keep the
bundles down to a manageable size - was not grabbing my file.

## Solution
That conclusion could very well be wrong, and, if it is, I hope to find that out, but wrong or not, I never could get my markdown file
into my assets folder. That meant that I had to pull the bodies of the markdown files into the in memory database - exactly what I
set out to avoid in the first place. Luckily I didn't try and change it because of any functional necessity, so I was able to fall
back on that. I am now still typing up my blogs in separate \`.md\` files (which you can see if you check out the repo), and then
copying the files into the db. Not exactly an ideal solution, but it works.

`,
        tools: [ 'WebStorm', 'MacBook', 'ngx-markdown' ],
        tags: [ 'blog', 'angular', 'markdown', 'fe', 'front end' ],
        bibliography: [
          `https://github.com/jfcere/ngx-markdown`
        ]
      },
      //endregion
      //region blockchain
      {
        id: '4d5c3efc-454b-4bd3-b1db-f7d23680f4df',
        title: 'First Link',
        date: '06/24/2018',
        project: 'blockchain',
        body: `## Why Blockchain?
I feel like that's the first question that always has to be asked at the start of any project. Whether it's a personal project or professional, there's always one task master that must be heard:
Time. That usually translates to money in professional projects, but the question is always the same: Why is this worth my/our time? If you've somehow stumbled on this and have decided to read it,
I'm assuming you know - at least implicitly - your own answers to this question, but I want to go through mine.

### **Just cool**
For me this is still a new bit of technology, and I love new toys.
### **Interesting**
I'm always on the lookout for new things to learn. I love learning languages and frameworks, and this is a chance for me to learn a whole new technology, and I can't pass that up.
### **Potential**
This is really the most important, and how I have justified the project to my inner tech lead. Having only a high-level understanding of the technology and  without understanding the limitations of 
the technology, I have a few ideas for potential applications. As I learn more, I wholeheartedly expect for some of those ideas to drop off as less important or too complicated, but I'm starting with 
bright, hopeful eyes.

## Toolset
When starting a new project a (at least initial) toolset needs to be defined. I've decided that I want tho use this project to learn a little more about .NET Core, so that's what I've gone with.
I've used C# on a few projects, but this will be my first deep dive into the new platform.

## So Far
I've decided to follow [this](https://www.c-sharpcorner.com/article/blockchain-basics-building-a-blockchain-in-net-core/) tutorial in order to build a chain from scratch. So far I have built the 
first post and set up a few tests. The blog post doesn't really go through how to test, so I've set up test following the instructions in the GitHub docs found 
[here](https://github.com/dotnet/docs/blob/master/docs/core/testing/unit-testing-with-dotnet-test.md). 

So far I haven't struggled with too much, though at present all I have is a super simple console app that creates a chain and adds a few to it. The repo for it right now is private, but once I have 
a working model, I intend to put it out in the wild.
`,
        tools: [ '.NET Core', 'MacBook', 'High Sierra' ],
        tags: [ 'net', 'core', 'vsc', 'backend', 'blockchain' ],
        bibliography: [
          'https://www.c-sharpcorner.com/article/blockchain-basics-building-a-blockchain-in-net-core/',
          'https://github.com/dotnet/docs/blob/master/docs/core/testing/unit-testing-with-dotnet-test.md',
        ]
      }
      //endregion
    ];
    return { blogs };
  }
}
