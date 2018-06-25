## Intro
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

The first problem I ran into was trying to run `yarn install` on a project created anywhere outside the
`home` directory created by Termux. To grossly oversimplify, Android file permissions prevent a user from creating
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

The answer: `vim`. I know someone who swears by it, and does all of their development work in it. I’m a nerd, and
I always love to learn a new tool, so I thought, “Yeah, I’ll give it a shot. If it really is as bad as I
remember, I’ll try something else.” I feel that two things have really made me successful in that endeavor:
[this](https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85)
blog and my own curiosity.

Two major things to take away from that blog:
* Run through the `vimtutor` every day for a few days (if not the whole week it recommends)
* How to configure vim (which is really just a link to another blog that tells you how to set up a `.vimrc` file)

I will admit, I didn’t actually follow the whole plan. I’d be on step two right now if I had, but I learn much more by use,
than spending only half an hour a day with a tutor. Also, after using vim for a week or so I’d recommend
going back and doing the tutor again. I definitely picked up a couple more things when I did.

Vim has actually proven to be a great development environment. It definitely took some getting used to, but after I got a
good `.vimrc` set up, it felt as natural as Sublime or VSC. The only phone specific problems I’ve had were related to
YouCompleteMe. YCM is an amazing tool that I have on my laptop’s configuration, but wouldn’t work on my phone
as there’s a compiled portion that I just couldn’t get to compile on my phone. After trying to compile a
few different ways, I decided that code completion, while definitely useful, wasn’t required, so I just moved
on instead of spending more time to actually figure out why it wasn’t working.

I followed a couple blogs to set up vim for `TypeScript` ([here](http://blog.88mph.io/2017/11/08/equipping-vim-for-typescript-a-newcomers-guide/) and 
[here](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim)).
My own `.vimrc` can be found [here](https://github.com/DeMack/dotfiles/blob/master/.vimrc).

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
me.
