import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet numquam asperiores, dolore! Animi, veritatis maiores. Vel magni dolorum, vitae eum ut culpa unde autem blanditiis voluptatibus tenetur deleniti suscipit officiis non molestias nam reiciendis. Corporis cupiditate non sapiente inventore, illum eum aperiam, veniam numquam adipisci nisi. Necessitatibus, sint aliquid iusto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
