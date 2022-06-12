<h2>How to run the app:</h2>
- You can view a deployed version of this app on https://giraphi.github.io/task/
- To run it locally: `npm run start`

<h2>Goals of this coding demo (2 hours):</h2>
- Setup a basic react app and deploy it to github pages.
- Show an overall understanding of how to develop a react frontend including styling with styled-components, icons, fonts and a basic theme.
- Show a basic understanding of an approach to record audio with MediaRecorder API.

<h2>Technology stack:</h2>
- React App created with `create-react-app`
- Code formatting with `prettier`
- Styling with `styled-components`
- Deployment to githup with `gh-pages`

<h2>What I would do next if I had more time:</h2>
- Check the MediaRecorder API approach in different browsers. It doesn't seem to work in safari currently. (According to https://caniuse.com/?search=mediaRecorder the approach is generally ok for all modern browsers)
- Style audio player
- Deal with the microphone access-request from a UX perspective. E.g. show "Please allow access" text while waiting for permission.
- Setup UI to allow the user to input their e-mail
- Setup the interaction with a (mocked/dummy) backend
- Use axios to send/receive
