import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import MUIDataTable from "mui-datatables";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function Purchases(props) {
  const { classes } = props;
  const columns = ["Purchase Date", "Total", "Status", "Estimated Arival", "Location"];

  const data = [
    ["11/12/2019", "120.00", "2123", "Unpaid", "Aram Koukia"],
    ["11/12/2019", "150.00", "2344", "Draft", "Test"],
    ["11/12/2019", "10.00", "2344", "On Hold", ""],
    ["11/12/2019", "150.00", "234", "Completed", ""],
  ];

  const options = {
    filterType: 'checkbox',
  };

  return (
    <div>
      <Button color="primary">New Order</Button>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Purchases List</h4>
            </CardHeader>
            <CardBody>
              <MUIDataTable
                // title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Purchases);
