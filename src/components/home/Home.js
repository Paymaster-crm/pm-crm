import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Row, Col } from "react-bootstrap";
import "../../styles/home.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { navigateToModule } from "../../utils/navigateToModule.js";
import { moduleCategories } from "../../utils/moduleCategories.js";
// import ChangePasswordModal from "../../modals/ChangePasswordModal.js";

function Home() {
  const { user } = useContext(UserContext);
  // const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();
  console.log(data);
  const navigate = useNavigate();

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios(
          `${process.env.REACT_APP_API_STRING}/get-user/${user.username}`
        );
        setData(res.data);
        // setOpenModal(res.data.is_first_login);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    getUser();
  }, [user]);

  const categorizedModules = data?.modules?.reduce((acc, module) => {
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
      {/* {openModal && (
        <ChangePasswordModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      )} */}
    </>
  );
}

export default React.memo(Home);
