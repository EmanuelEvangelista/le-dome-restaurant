import { RestaurantContext } from '../../RestaurantContext/restaurantContext.jsx';
import { useContext } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const About = () => {
  const { team } = useContext(RestaurantContext);

  return (
    <>
      {/* Sección About */}
      <Container className="my-5 text-center">
        <h1 className="fw-bold mb-3" style={{ color: "#f4ce14", fontFamily: "Gorditas, sans-serif"}}>About Us</h1>
        <p className="text-muted fs-5" style={{ color: "#495e57", fontFamily: "Roboto Condensed, sans-serif" }}>
          Welcome to our restaurant app. We are dedicated to providing the best dining experience.
        </p>
      </Container>

      {/* Sección Team */}
      <Container className="my-5">
        <h1 className="fw-bold text-center mb-4" style={{ color: "#495e57", fontFamily: "Roboto Condensed, sans-serif" }}>Our Team</h1>

        <Row className="justify-content-center">
          {Array.isArray(team) ? (
            team.map(user => (
              <Col key={user.login.uuid} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                <Card className="text-center shadow-sm border-0 d-flex flex-column align-items-center">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image
                      src={user.picture.large}
                      roundedCircle
                      className="mb-3"
                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                    <Card.Title className="fw-bold text-center">
                      {user.name.first} {user.name.last}
                    </Card.Title>
                    <Card.Text className="text-muted text-center mb-1">
                      Age: {user.dob.age}
                    </Card.Text>
                    <Card.Text className="text-muted text-center">
                      {user.email}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">Loading team...</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default About;