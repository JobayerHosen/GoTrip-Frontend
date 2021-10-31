import { Col, Container, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";

const Dashboard = ({ children }) => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Container>
        <div className="admin text-start">
          <Row>
            <Col xs={12} md={12} lg={3}>
              <div className="admin-side">
                <h4 className="mb-1">{user.displayName ? user.displayName : "Anonymous"}</h4>
                <h6 className="mb-2">{user.email}</h6>
                <hr />
                <ul className="text-start">
                  <li className="border-bottom d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/myOrders"
                      activeStyle={{ color: "#ff3344" }}
                    >
                      <i className="bi bi-bag-check"></i> &nbsp; My Orders
                    </NavLink>
                  </li>
                  <li className="border-bottom d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/manageOrders"
                      activeStyle={{ color: "#ff3344" }}
                    >
                      <i className="bi bi-pencil-square"></i> &nbsp; Manage Orders
                    </NavLink>
                  </li>
                  <li className=" d-block py-2">
                    <NavLink
                      className="d-inline-block text-decoration-none   me-3"
                      to="/addEvent"
                      activeStyle={{ color: "#ff3344" }}
                    >
                      <i className="bi bi-plus-square"></i> &nbsp; Add Event
                    </NavLink>
                  </li>
                </ul>
                <hr />
                <Button onClick={logOut} variant="outline" className="rounded-pill btn-main p-2 px-3">
                  Log Out&nbsp;
                  <i className="bi bi-box-arrow-right"></i>
                </Button>
              </div>
            </Col>
            <Col xs={12} md={12} lg={9}>
              {children}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
