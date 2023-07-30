# Gamezop assessment

## Introduction

This README file provides insights into the development process, decision-making journey, and instructions on how to run the Next.js app locally. The app utilizes server components to fetch data, implements a sidebar layout for the user interface, and employs local storage for storing favorites.

## Getting Started

First, install the dependencies:

```bash
yarn install
# or
npm install
```

Then, run the development server:

```bash
yarn dev
# or
npm run dev


```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development & Decision making Process

1. Next.js with Server Components: I chose Next.js with server components to leverage its built-in server-side rendering capabilities. This helps in optimizing the app's performance and provides better SEO.
2. Sidebar Layout: The decision to use a sidebar layout was based on the app's requirement for easy navigation and better user experience. A sidebar allows users to access various sections of the app with minimal effort.
3. Local Storage for Favorites: I opted for local storage to store user favorites as it provides a seamless user experience. Local storage enables users to access their favorite items even after closing and reopening the app.
4. UI - To be really honest there are a lot of improvements that can be done in the UI, I wanted to do something completely different from the original gamezop site so it included a lot of trial and errors to find out what might work best. I actually wanted to add Framer motion but I'm kinda running out of time right now, but personally I'd like to improve it more later.
5. PWA - Used next-pwa to turn our website into a PWA
6. The game card lol - Actually I started working on this project on the weekend as I'd been busy with more assignments/challenges/work over the week and then I realized that our API didn't provide us with any image. For now I just went with a random pink color instead of an image, please assume that it's an image😂.
7. Suspense - I know it was mentioned in the mail to use Suspense, but it didn't make much sense as we're already using server components. I tried the app router way for creating instant loading states that's already built with suspense as mentioned in the docs [here](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states), but turns out it was still throwing the loading state when the data is already cached, kind of felt odd to use the application in that case so I just removed it from all the pages. But I need to look into this more as to why it would throw the loading state even with the cached data.
8. Responsiveness - Used TailwindCSS as my style library, it follows a mobile first approach for responsiveness which makes things easier to work with.

## Conclusion

This app demonstrates the use of server components, sidebar layout, and local storage to create an efficient and user-friendly web application. By following the provided local setup guide, you can run the app on your machine and explore its features.
This project helped me to be familiar with the new concepts in Next13 so it has been a great learning experience as well. Let me know if you have any doubts or encounter any issues.
Thank you!
