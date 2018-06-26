## Adding Markdown
I have markdown support, though getting here was way more trouble than I expected. In order to provide support for 
markdown I decided to use [this](https://github.com/jfcere/ngx-markdown) library. The documentation is great, and it provides
a ton of great features, so it should be super simple, right? Definitely not.

## Inevitable Headaches
No matter what feature I'm working on, I always seem to run into completely random nonsensical problems; this time was no exception. 
My grand design was to have a nice organized project and db. In the db I just wanted to store a string value with the path to a 
corresponding `.md` file which would be stored in the `assets` folder, thus keeping the in memory `JSON` db to a nice, manageable,  and 
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
It was then that I realized that even though my blog entry was actually in the `assets` folder, it wasn't actually getting bundled
when I used `ng serve`. After reading in a few places, I thought maybe the problem had something to do with that command, so I tried
to build and publish to see what it looked like live. That worked about as well as a "piano player in a marching band" (- Larry the
Cable Guy). 

I then tried to bring in an image file to see if there was something wrong with the way I had my assets configured in my `angular.json`.
The random internet image worked perfectly well to my extreme frustration. After spending way too long trying to rename things and 
move things, even trying some other random library, and do anything and everything I could think of to find some way to get the markdown
file to bundle, I have come to a conclusion: the Angular CLI only bundles something in the assets folder if it is explicitly used 
from the start. Since I was trying to load the markdown file dynamically, the CLI - probably in some kind of attempt to keep the
bundles down to a manageable size - was not grabbing my file.

## Solution
That conclusion could very well be wrong, and, if it is, I hope to find that out, but wrong or not, I never could get my markdown file
into my assets folder. That meant that I had to pull the bodies of the markdown files into the in memory database - exactly what I
set out to avoid in the first place. Luckily I didn't try and change it because of any functional necessity, so I was able to fall
back on that. I am now still typing up my blogs in separate `.md` files (which you can see if you check out the repo), and then
copying the files into the db. Not exactly an ideal solution, but it works.

