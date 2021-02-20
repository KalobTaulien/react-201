import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
          <h2>React 201 project:</h2>
              <p className="lead">
                You will be creating a movie browser that's API driven. There's a search function,
                movie detail view, about page, all built into a single page application / progressive web application.
              </p>
              <p className="lead">
                There are tasks I have purposely left out of this project for you to solve on your own. This is
                VERY similar to a take home assignment that a company will give you when you apply to work with
                them.
              </p>
              <p className="lead">
                Just a few bugs that have not been solved yet:
              </p>
              <ul className="lead">
                <li>There is no 404 page</li>
                <li>Sometimes a search result doesn't have an image</li>
                <li>There is no handler if there are no search results</li>
                <li>The search button in the navigation doesn't work</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
