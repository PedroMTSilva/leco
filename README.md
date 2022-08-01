<br />

<p align="center">

<h1 align="center">Leandro Correia Portfolio ✨</h1>

<p align="center">

This project take me one week to develop while learning for the first time Reactjs and Tailwind. Site URL:

<a href="https://leandroc0rreia.com">leandroc0rreia.com</a>
</p>

<br />

[![Site preview](/public/portfolio-image.png)](https://leandroc0rreia.com)
<br />


## Tech Stack 🛠️

Dependencies defined in package.json:

| [Reactjs](https://reactjs.org/)

| [Tailwind](https://tailwindcss.com/) + [Flowbite](https://flowbite.com/) + [Headlessui](https://headlessui.com/)

| [GitHub API](https://docs.github.com/rest/repos/repos)

| [Emailjs](https://www.emailjs.com)

## Structure ⚓

- Navigation bar
- Home
- Social media
- About
	- Image
	- Simple text about me
	- Table with Technical and Soft Skill
	- Button to download my resume
- Projects
	- Recent projects (using GitHub API)
	- Detailed projects 
- Contact (using Emailjs)
- Footer
- Copyrights - open source

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository
Mark star ⭐ if you like the project.

## Inspiration 💡

This project takes inspiration on developers portfolio website.
Thanks a lot [Hashir Shoaeb](https://hashirshoaeb.com/) and contributors who help on [home](https://github.com/hashirshoaeb/home) project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC and configure [React + Tailwind](https://tailwindcss.com/docs/guides/create-react-app). You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:

2. Clone the forked repo from your account using:

```bash

git clone https://github.com/<your-username>/leco.git

```

3. Open in editor and edit [src/info/config.js](./src/info/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/info/resume.pdf](./src/info/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

6. Change URL in [package.json](./package.json) file:

```json

"homepage": "https://<your-website-name>/"

```

Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

```bash

npm install

npm start

```

8. To deploy website, run:

```bash

npm run build

npm run deploy

```

9. Congrats your site is up and running. To see it live, visit:

```https

"https://<your-website-name>/

```

10. To change the thumbnail image:

- Navigate to the "public" folder.

- There you will see "social-image.png".

- Delete it.

- Take a screenshot of your version and rename it "social-image.png" and place it there.


## Contributing 🙋

This project is in development. Means that feel free to help and give suggestions. Feel free to fork, use and maintain your own version.

## License ⚖️

Distributed under the `GPL-3.0` License. See [LICENSE](LICENSE.md) for more information.
