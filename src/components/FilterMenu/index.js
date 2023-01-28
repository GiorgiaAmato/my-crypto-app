import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Button,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Typography,
} from "@material-ui/core";

export default function FilterMenu() {
  const [order, setOrder] = useState("market_cap_desc");
  const [category, setCategory] = useState("");
  const [itemPerPage, setItemPerPage] = useState(100);

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary 
            aria-controls="panel1c-content" 
            id="panel1c-header">
          <div>
            <Typography>Location</Typography>
          </div>

        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button variant="outlined" size="small">
            Reset filters
          </Button>
          <Button variant="contained" size="small" color="primary">
            Apply filters
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
