import ga from "./src/utils/ga";
import "./src/styles/reset.css"
import "./src/styles/global.css"
import "./src/styles/spoqa-han-sans.css"



export const onRouteUpdate = (state, page, pages) => {
  if (process.env.NODE_ENV === 'production') {
    ga.pageView(state.location.pathname);
  }
};
