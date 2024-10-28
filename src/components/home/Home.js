import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Row, Col } from "react-bootstrap";
import "../../styles/home.scss";
import { useNavigate } from "react-router-dom";
import { navigateToModule } from "../../utils/navigateToModule.js";
import { moduleCategories } from "../../utils/moduleCategories.js";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabs from "../../customHooks/useTabs.js";
import { TabValueContext } from "../../contexts/TabValueContext.js";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const { tabValue, setTabValue } = useContext(TabValueContext);
  const navigate = useNavigate();
  const { a11yProps, CustomTabPanel } = useTabs();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    async function getUser() {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/get-user-profile`,
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

  // Categorize the user's modules
  const categorizedModules = user?.modules?.reduce((acc, module) => {
    const category = moduleCategories[module] || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(module);
    return acc;
  }, {});

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="Module Categories"
          >
            {/* Generate Tabs dynamically from categorizedModules */}
            {categorizedModules &&
              Object.keys(categorizedModules)
                .sort()
                .map((category, idx) => (
                  <Tab key={idx} label={category} {...a11yProps(idx)} />
                ))}
          </Tabs>
        </Box>

        {/* Generate Tab Panels dynamically from categorizedModules */}
        {categorizedModules &&
          Object.keys(categorizedModules)
            .sort()
            .map((category, idx) => (
              <CustomTabPanel value={tabValue} index={idx} key={idx}>
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
              </CustomTabPanel>
            ))}
      </Box>
    </>
  );
}

export default React.memo(Home);
