import "./header.css";
import { Button } from "@mui/material";
import { useState } from "react";
function Header(props) {
  let { setlang } = props;
  const [langflag, setlangflag] = useState(true);
  function Change() {
    setlangflag(!langflag);
  }

  if (langflag === true) {
    setlang("en");
  } else {
    setlang("es");
  }
  return (
    <>
      <div className="head">
        <Button variant="contained"  onClick={Change}> Switch lang
        </Button>
        
        
      </div>
    </>
  );
}

export default Header;
