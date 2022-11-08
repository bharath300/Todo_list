import { useState, useEffect } from "react";
import "./details.css";
import { useParams } from "react-router-dom";

function Details(props) {
  const { Id } = useParams();
  console.log(Id);
  
  let { language } = props;
  const [data, setdata] = useState([]);
  useEffect(() => {
  
    const fetchData = async () => {
      const response = await fetch(
        "https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=" +
          Id +
          "&lang=" +
          language,
        {
          headers: { accept: "application/json" },
        }
      );
      const res = await response.json();
      setdata(res.Result.Resources.Resource);
      
    };
    fetchData();
  }, [Id, language]);

  return (
    <>
      <h1>MORE DETAILS</h1>
     
<br></br>
      {data.map((item) => (
        <div className="Cover">
          <h2>{item.Title}</h2>

          <img className="imgblock" src={item.ImageUrl} alt={item.Title} />
        </div>
      ))}

      {console.log(data)}
    </>
  );
}

export default Details;
