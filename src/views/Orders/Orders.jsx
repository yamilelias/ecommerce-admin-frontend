import React from "react";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import MUIDataTable from "mui-datatables";
import OrderService from "../../services/OrderService";
import Location from "../../stores/Location";

let orderService = new OrderService();

export default class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = { orders: [] };
  }

  componentDidMount() {
    this.ordersList();
  }

  ordersList() {
    const columns = ["locationName", "orderDate", "subTotal", "total", "status", "poNumber", "paidAmount", "createdByUserId"];
    const locationId = Location.getStoreLocation();
    orderService.getOrdersByLocation(locationId)
      .then(results => {
        return results.map(row => {
          return columns.map(column => {
            return row[column] || "";
          });
        });
      })
      .then(data => this.setState({ orders: data }));
  }

  render() {
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

    const columns = ["Location", "Order Date", "Sub Total", "Total", "Status", "PO Number", "Paid Amount", "Created By"];

    const options = {
      // filterType: "checkbox",
    };

    const { orders } = this.state;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={styles.cardTitleWhite}>Orders List</h4>
              </CardHeader>
              <CardBody>
                <MUIDataTable
                  data={orders}
                  columns={columns}
                  // options={options}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

// export default withStyles(styles)(Customers);
