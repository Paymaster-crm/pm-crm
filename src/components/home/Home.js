import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Row, Col } from "react-bootstrap";
import "../../styles/home.scss";
import { useNavigate } from "react-router-dom";
import { navigateToModule } from "../../utils/navigateToModule.js";
import { moduleCategories } from "../../utils/moduleCategories.js";
import axios from "axios";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/get-user-profile/${user.username}`,
        {
          withCredentials: true,
        }
      );

      if (res.data.username) {
        setUser(res.data);
      } else {
        setUser(null);
        navigate("/");
      }
    }

    getUser();
    // eslint-disable-next-line
  }, []);

  const categorizedModules = user.modules?.reduce((acc, module) => {
    const category = moduleCategories[module] || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(module);
    return acc;
  }, {});

  return (
    <>
      <div>
        {categorizedModules &&
          Object.keys(categorizedModules)
            .sort()
            .map((category, idx) => (
              <div key={idx}>
                <br />
                <h6 style={{ marginBottom: 0, color: "#5B5E5F" }}>
                  <strong>{category}</strong>
                </h6>
                <hr style={{ margin: "5px 0" }} />
                <Row>
                  {categorizedModules[category].sort().map((module, id) => (
                    <Col xs={12} md={4} lg={2} key={id} className="module-col">
                      <div
                        className="module-col-inner"
                        onClick={() => navigateToModule(module, navigate)}
                      >
                        <p>{module}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
      </div>
    </>
  );
}

export default React.memo(Home);
