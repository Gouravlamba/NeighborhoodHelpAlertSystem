import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ServiceProviderLeftNav from './ServiceProviderLeftNav';
import Header from './Header';
import ServiceProviderProfile from './ServiceProviderProfile';
import Home from './Home';
import BookingView from './bookingsView';
import BookingRejection from './bookingrejection';
import ServiceProviderUpdateProfile from './ServiceProviderUpdateProfile';

class ServiceProviderMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      completed_booking: []
    };
  }

  componentDidMount() {
    let booking = [];
    let sp_booking = this.props.bookings.bookings.filter(
      (sp) => sp.ServiceProviders_Username === this.props.auth.user.username
    );

    if (sp_booking != null) {
      sp_booking.forEach((element) => {
        let customer = this.props.customers.customers.filter(
          (ele) => ele.Customer_Username === element.Customers_Username
        )[0];

        booking.push({
          Customers_Username: element.Customers_Username,
          DateTime: element.DateTime,
          ProblemDescription: element.ProblemDescription,
          TimeSlot: element.TimeSlot,
          mobileNo: customer.mobileNo,
          Address: customer.Address,
          Completed: element.Completed,
          Feedback: element.Feedback,
          Action: (
            <div>
              <i
                className="fa fa-trash-alt delete"
                onClick={() => {
                  if (window.confirm('Are u sure u want to delete ?'))
                    this.props.deletebooking(element._id);
                }}
              ></i>
            </div>
          )
        });
      });
    }

    let completedbookings = booking.filter((sp) => sp.Completed === true);
    let pendingbooking = booking.filter((sp) => sp.Completed === false);

    this.setState({
      bookings: pendingbooking,
      completed_booking: completedbookings
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="row w-100">
          <div className="mb-3 col-md-2">
            <ServiceProviderLeftNav />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route
                path="/ServiceProvider/Profile"
                element={
                  <ServiceProviderProfile
                    serviceProvider={
                      this.props.serviceProviders.serviceproviders.filter(
                        (sc) =>
                          sc.ServiceProvider_Username ===
                          this.props.auth.user.username
                      )[0]
                    }
                    isLoading={this.props.serviceProviders.isLoading}
                    feedbacks={this.props.feedbacks.feedbacks.filter(
                      (fb) =>
                        fb.ServiceProvider_Username ===
                        this.props.auth.user.username
                    )}
                  />
                }
              />
              <Route
                path="/ServiceProvider/UpdateProfile"
                element={
                  <ServiceProviderUpdateProfile
                    updateServiceProviderInfo={
                      this.props.updateServiceProviderInfo
                    }
                    serviceProvider={
                      this.props.serviceProviders.serviceproviders.filter(
                        (sc) =>
                          sc.ServiceProvider_Username ===
                          this.props.auth.user.username
                      )[0]
                    }
                  />
                }
              />
              <Route
                path="/ServiceProvider/BookingsCompleted"
                element={<BookingView bookings={this.state.completed_booking} />}
              />
              <Route
                path="/ServiceProvider/Bookings"
                element={<BookingRejection bookings={this.state.bookings} />}
              />

              {/* Redirect to home */}
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

export default ServiceProviderMainComponent;
