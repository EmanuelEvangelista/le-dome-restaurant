import { RestaurantContext } from '../../RestaurantContext/restaurantContext.jsx';
import { useContext } from "react";

const About = () => {
  const { team } = useContext(RestaurantContext);

  return (
    <>
      <div className="container my-4">
        <h1>About Us</h1>
        <p>Welcome to our restaurant app. We are dedicated to providing the best dining experience.</p>
      </div>

      <div className="container">
        <h1>Our team</h1>
        <div className="row">
          {Array.isArray(team) ? (
            team.map(user => (
              <div key={user.login.uuid} className="col-md-6 mb-4">
                <div className="card text-center">
                  <img
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="card-img-top rounded-circle img-fluid mx-auto mt-3"
                    style={{ width: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {user.name.first} {user.name.last}
                    </h5>
                    <p className="card-text">Age: {user.dob.age}</p>
                    <p className="card-text">{user.email}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando equipo...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
