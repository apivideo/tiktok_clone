<p align="center">
<a  href="https://github.com/muxinc/stream.new">
    <img src="https://github.com/apivideo/api.video-api-specification/blob/master/apivideo_banner.png?raw=true" alt="Api.video Logo" width="100%" >
</a>
</p>
<h1 align="center">Rebuilding TikTok with api.video, PWA, Next.js and Typescript 🎵</h1>
<div align="center">
    <a href="https://twitter.com/intent/follow?screen_name=api_video"><img src="https://img.shields.io/twitter/follow/api_video?style=social" alt="Twitter Badge"/></a>
    <a href="https://community.api.video"><img src="https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video" alt="Pull Requests Badge"/></a>
</div>
<br />

<p align="center">
An open-source example application that allows users to list and upload videos in the TikTok style using <a href="https://api.video" target="_blank" >api.video</a>
<br />
 <br />
<a href="https://api-video-tiktok-demo.vercel.app">View Demo</a>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#step-1-clone">Step 1. Clone</a></li>
        <li><a href="#step-2-get-api-key-by-creating-an-account">Step 2. Get API Key by creating an account</a></li>
        <li><a href="#step-3-get-your-token-for-delegated-uploads">Step 3. Get your token for delegated uploads</a></li>
        <li><a href="#step-4-set-up-environment-variables">Step 4. Set Up Environment Variables</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

### Api.video:

-   Get videos: [@api.video/nodejs-client](https://github.com/apivideo/api.video-nodejs-client) - api.video's Node.js is a lightweight client built in TypeScript that streamlines the coding process. Chunking files is handled for you, as is pagination and refreshing your tokens.
-   Display videos: [@api.video/react-player](https://github.com/apivideo/api.video-react-player) - A React component for playing api.video videos.
-   Upload videos: [@api.video/video-uploader](https://github.com/apivideo/api.video-typescript-uploader) - Typescript library to upload videos to api.video using delegated upload token (or usual access token) from the front-end.

### NextJS:

-   [`/pages/api`](pages/api) routes — a couple endpoints for making requests to the api.video API.
-   client-side cache library [swr](https://www.npmjs.com/package/swr).
-   Usage of [next-pwa](https://www.npmjs.com/package/next-pwa) to transform the Next.js app into a PWA.

<!-- GETTING STARTED -->

# Getting Started

## Step 1. Clone

First we need to clone the project

```bash
git@github.com:apivideo/tiktok_clone.git
cd tiktok_clone

# install deppedencies
npm install
# or
yarn install

# run the development server
npm run dev
# or
yarn dev

```

## Step 2. Get API Key by creating an account

All you need to set this up is a [api.video account](https://dashboard.api.video). You can sign up for free. You can use our services in sandbox environment but the videos you upload will last 24 hours.

Once you signed up, you will have a sandbox API Key available on the home page.

## Step 3. Get your token for delegated uploads

Go to the api.video's [dashboard](https://dashboard.api.video). Go to upload token section and then create a new one. In case of interrogations follow this [guide](https://docs.api.video/docs/create-and-manage-tokens-for-delegated-uploads).

## Step 4. Set Up Environment Variables

In order to see your videos by default, all you have to do is to use your API Key and an upload token. You need to create a environment variable at the root of the project.

```bash
touch .env.local
```

Then edit the file like `API_KEY` should be your `API_KEY` available on the dashboard and `NEXT_PUBLIC_UPLOAD_TOKEN` your upload token

```javascript
API_KEY = XXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_UPLOAD_TOKEN = XXXXXXXXXXXXXXXXXXXXXXXXXXX
```
