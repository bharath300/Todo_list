import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./content.css";
function Content(props) {
  let { language } = props;
  const [responsedata, setResponse] = useState([]);
  const navigate = useNavigate();

  function Goto(item) {
    const [responsedata, setResponse] = useState([]);
    navigate(`/details/${item.Id}`);
    // console.log(item.Id)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=" +
          language,
        {
          headers: { accept: "application/json" },
        }
      );
      const res = await response.json();
      setResponse(res.Result.Items.Item);
      // console.log(res.Result.Items.Item)
    };
    fetchData();
  }, [language]);
  return (
    <>
      
      <div className="container">
        {responsedata.map((item, index) => (
          <div className="holder">
            {index + 1}.{item.Title}
            <div class="btncover">
              <Button variant="contained" onClick={() => Goto(item)}>
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Content;
