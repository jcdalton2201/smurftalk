---
tags: post
title: Testing Accessibility Before you Deploy with GitHub Actions.
layout: main_layout.11ty.js
---
# Testing Accessibility Before you Deploy with GitHub Actions

## How to write tests for your Jekyll website

![Jekyll website](/images/0_OZn8c9b4ojbxM62S.jfif)

After taking a break from front-end development for a few months, 
I found an issue that needs to be solved. If you have read my other story about 
testing, you will know it is something I think about a lot in my work.

Writing Web Components it is straightforward to create your tests that 
run before you deploy your code. I was asked how to write accessibility 
testing for your Jekyll website before you deploy your site. Luckily 
we can use GitHub Actions to execute your tests and pause the build if you fail.

![Github code](/images/0_eWrOvcfz8AlI_i42.jfif)

## GitHub Actions
<hr>

What are GitHub Actions? From the GitHub site

```
GitHub Actions makes it easy to automate all your software
 workflows, now with world-class CI/CD. Build, test, and deploy your
 code right from GitHub. Make code reviews, branch management, and 
 issue triaging work the way you want.
```
GitHub Actions is your CI/CD. Actions use YAML files to define the steps for your CI/CD pipeline. 
In our YAML file, we will define our pipeline. The steps we want to do are

* Down load code
* Change the permissions of our download code to 777
* NPM install
* Build a Jekyll website
* Run our tests.
* Continue with our CI/CD

I have created a GitHub repo to show how this will work. The steps in the YAML file blank.yml in the directory .github/workflows/blank.yml.

```yaml
steps:
# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
- uses: actions/checkout@v2
- name: update permissions
run: |
cd ..
sudo chmod -R 777 .
# NPM installs
- name: NPM installs
run: npm install
# start up a jekyll server
- name: Build the stack
run: docker-compose up -d
# Test and show the container running
- name: Show running containers
run: docker ps -a
#Sleep for 30s to give Jekyll a chance to spin up
- name: Sleep for 30 seconds
uses: jakejarvis/wait-action@master
with:
time: '30s'
#start the tests
- name: Test is site
run: npm run test
```

The first line is our checkout of the Jekyll website. 
The next step is to update the permission of our checkout directory. 
We have to change the permission because our version of Jekyll will 
update the directory when it builds it. NPM install is the next step. 
At this point, everything should be straight forward to you. The next 
step is where things get interesting.

## Docker
<hr>

![Docker](/images/0_3K6VjExmEgtd4zGo.jfif)

GitHub Actions runs inside a Docker container. The Docker container that 
they are using has Docker install on it. It allows us to run a separate 
Docker container inside of GitHub. We need to be able to do this to run 
our own Jekyll server while we run our tests.

I created a Docker image with the Jekyll server started at launch. I would 
recommend building your Jekyll image, but here is the one that I have made 
jcdalton2201/jekyll-ci-cd. We can now start up our container with the 
docker-compose command in the YAML file with the -d attribute to run in
 the background. We could do this for a simple web server also if we needed too.

## Puppetter
<hr>

![puppetter](/images/0_OGfIknZj6SDrkgqA.jfif)

The last step is to run our tests. I use Jasmine, Puppeteer, and Axe-Core 
to do my testing. If you look at my GitHub repo, you will find my tests 
in the spec directory. If you have used Puppeteer in the past, these 
tests are elementary. You create your Puppeteer page and go to your 
web site in the container.

```javascript
await page.goto('http://localhost:4000/',
  {
    waitUntil: 'networkidle0'
  }
);
```

The networkidle0 will wait until the page has stopped loading.
I then run Axe with the following line.

```javascript
const results = await new AxePuppeteer(page).include('body').analyze();
expect(axeUtils.isValid(results)).toBeTruthy();
```

We have now just run Axe at the body for accessibility testing.

We can now take our static web site and test it for accessibility 
before deploying to an environment. I hope this example will help 
teams add accessibility to their testing and do it before it hit
any environment.