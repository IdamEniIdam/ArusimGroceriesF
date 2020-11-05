import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerAgent } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Footer from '../layout/Footer.js'

import arusimLogo from '../../images/arusimlogo.png';


class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      state: '',
      city: '',
      localGovernment: '',
      nin: '',
      designations: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newAgent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      state: this.state.state,
      city: this.state.city,
      localGovernment: this.state.localGovernment,
      nin: this.state.nin,
      designations: this.state.designations
    };

    this.props.registerAgent(newAgent, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
           
        <Jumbotron fluid>
          <Container>
           
         <div  style={{}}>
              <center>
                <img style={{height: '100px'}} src={arusimLogo} alt="pic" />
              </center>
            </div>
        
         
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Vendor Request Form</h1>
            <Col md={{ span: 4, offset: 4 }}>
              <Row >
                <div >
                  <form noValidate onSubmit={this.onSubmit} style={{ textAlign: 'center' }}>
                    <TextFieldGroup
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      value={this.state.firstName}
                      onChange={this.onChange}
                      error={errors.firstName}
                    />
                    <br />

                    <TextFieldGroup
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.onChange}
                      error={errors.lastName}
                    />
                    <br />

                    <TextFieldGroup
                      name="email"
                      placeholder="email"
                      type="text"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <br />
                    <TextFieldGroup
                      placeholder="Mobile number"
                      type="text"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.onChange}
                      error={errors.phoneNumber}
                    />
                    <br />
                    <TextFieldGroup
                      placeholder="NIN"
                      type="text"
                      name="nin"
                      value={this.state.nin}
                      onChange={this.onChange}
                      error={errors.nin}
                    />
                    <br />
                    <TextFieldGroup
                      placeholder="State"
                      type="text"
                      name="state"
                      value={this.state.state}
                      onChange={this.onChange}
                      error={errors.state}
                    />
                    <br />
                    <TextFieldGroup
                      placeholder="City"
                      type="text"
                      name="city"
                      value={this.state.city}
                      onChange={this.onChange}
                      error={errors.city}
                    />
                    <br />
                    <TextFieldGroup
                      placeholder="Local Government"
                      type="text"
                      name="localGovernment"
                      value={this.state.localGovernment}
                      onChange={this.onChange}
                      error={errors.localGovernment}
                    />
                    <br />
                    <TextFieldGroup
                      placeholder="Designations"
                      type="text"
                      name="designations"
                      value={this.state.designations}
                      onChange={this.onChange}
                      error={errors.designations}
                    />
                    <br />
                    <input type="submit" value="SEND" />
                  </form>
                </div>
              </Row>
            </Col>

          </Container>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

Agent.propTypes = {
  registerAgent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerAgent })(withRouter(Agent));
