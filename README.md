<h2>How to run the app:</h2>

- You can view a deployed version of this app on https://giraphi.github.io/task/
- To run it locally: `npm run start`

<h2>Goals of this coding demo (2 hours):</h2>

- Setup a basic react app and deploy it to github pages.
- Show an overall understanding of how to develop a react frontend including styling with styled-components, icons, fonts and a basic theme.
- Show a basic understanding of an approach to record audio with MediaRecorder API.

<h2>Technology stack:</h2>

- React App created with `create-react-app` (because this makes it easy to setup a react app with minimal effort, as long as there are no special reasons that speak against it.)
- Code formatting with `prettier` (because I'm overall used to prettier style and it has proven to be very valueable in collaborative working)
- Styling with `styled-components` (because I wanted a CSS in JS framework as a modern styling approach)
- Deployment to github with `gh-pages` (because this makes it very easy to deploy an App within seconds and I thought it would be nice to have an actual live result)

<h2>What I would do next if I had more time:</h2>

- Check the MediaRecorder API approach in different browsers. According to https://caniuse.com/?search=mediaRecorder the approach is generally ok for all modern browsers
- Current approach doesn't seem to properly work in Safari. (because of the <audio> tag?)
- Setup the interaction with a (mocked/dummy) backend (axios)
- Style audio player
- Deal with the microphone access-request from a UX perspective. E.g. show "Please allow access" text while waiting for permission.
- Setup UI to allow the user to input their e-mail
