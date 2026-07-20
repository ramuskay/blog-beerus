---
title: Creating my own blog!
categories:
- Blog
tags:
- gatsby
- jamstack
- blog
# https://www.reshot.com/free-svg-icons/item/sharing-C6F57JEL49/
thumbnail: thumbnail.svg
---

I was looking for a good solution to set up my own blog. At first I naturally thought about classic CMSs such as:
- Wordpress
- Drupal
- Grav, etc.

But I also wanted something simple and easy to use since the content is just blogging (no particular complexity). A CMS like WordPress requires a database which I'd like to avoid as much as possible since my site only hosts static pages. Avoiding PHP is also a bonus 🙂 (always a source of security vulnerabilities among other things).

That's when I discovered JAMStack (JavaScript, APIs, and (HTML) Markup). It builds the site ahead of time and serves it on a CDN (or any host), making it a site composed of static pages! This perfectly matches my needs, and on top of that it comes with some cool features:
- No database needed
- Much smaller attack surface, security +++
- Better SEO
- Integrates really well into a CI/CD pipeline or any automation process (🤤)
- Apparently much faster than a traditional CMS (since they're static pages I can believe it)

More info here: https://jamstack.org/

The thing is, JAMStack doesn't come with any default technology — it's up to the developer to choose how to implement it. I was looking into which JAMStack generator to pick; there are several on the market:
- Next.js
- Jekyll
- Gatsby

And I came across this [blog](https://calvin.me/now-powered-by-gatsby) post explaining why and how he moved from Jekyll to Gatsby — his use case matches mine perfectly (and I love the design of his blog!)

I therefore chose the following setup:
- Writing code locally in VS Code (I have the markdown preview plugins, etc.)
- I push once finished to one of my GitHub projects
- The push triggers a GitHub Actions build (workflow in the project) that hosts my blog on GitHub Pages

![](./gh-gatsby.png)

Several advantages:
- My blog is centralized and versioned (an older version of this post described the old way of hosting via GatsbyCloud hehe)
- Users can collaborate on articles by submitting a PR (in practice a simple edit of the post on GitHub)
- I had considered hosting it on my home infrastructure but since everything is already public there's no problem having it hosted by a third party
- Everything goes through a single host --> Github

And a few disadvantages:
- I rely on this third party for building and serving my blog (free version: 25 builds/day)
- Not the easiest to use (though in this case I forked [calvin](https://github.com/calvinbui/calvin.me)'s project)