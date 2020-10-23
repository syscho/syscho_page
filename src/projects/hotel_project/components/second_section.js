import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";
export default class Secondsection extends Component {
  render() {
    const datos = this.props.data;
    console.log(datos);
    const sum = datos.map((doc) => {
      return doc.content;
    });
    console.log(sum);
    return (
      <Container>
        <Row>
          {datos.map((dato) => (
            <Col md="4" key={dato.id}>
              <Card className="card-plain card-blog">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img rounded img-raised"
                      style={{height:'300px', width:'350px'}}
                      src={dato.image}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <h6 className="category text-info">
                    <div>{dato.subtitle}</div>
                  </h6>
                  <CardTitle tag="h4">
                    <div>{dato.title}</div>
                  </CardTitle>
                  <div className="card-description">
                    <p>{dato.content}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
