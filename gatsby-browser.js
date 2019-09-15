import ReactGA from 'react-ga';
import "./src/styles/reset.css"
import "./src/styles/global.css"
import "./src/styles/spoqa-han-sans.css"


ReactGA.initialize('UA-148032267-1');

export const onRouteUpdate = (state, page, pages) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(state.location.pathname);
  }
};
