import React, { useState } from "react";
import {Image, Video, Transformation} from 'cloudinary-react';
import "./Account.css";
import { EditIcon, MyOrder, ProfilePic } from "../CloudImages/CloudImages";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="contain-body">
            <div className="user-profile">
              <div className="account-container">
                <div className="profile-header">
                <Image cloudName="degnky4ab" publicId={ProfilePic.profilepic}>
   <Transformation crop="scale" width="100" angle="0" className="profile-pic" />
 </Image>
                  <button className="upload-btn">📷</button>
                </div>
                <div className="form-group1">
                  <label>Full Name</label>
                  <div className="infull">
                    <input type="text" placeholder="Enter Full Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+234813456793" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Roland5678@gmail.com" />
                  </div>
                </div>
                <button className="save-btn">Save</button>
              </div>

              <div className="account-container2">
                <h3>Change Password</h3>
                <div className="form-group1">
                  <label>Old Password</label>
                  <input type="password" placeholder="Enter old password" />
                </div>
                <div className="form-group1">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="form-group1">
                  <label>Re-enter New Password</label>
                  <input type="password" placeholder="Re-enter new password" />
                </div>
                <button className="save-btn">Save</button>
              </div>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="tab-content">
            <h2>My Orders</h2>
            <div className="orders-list">
              {["Returned", "Pending", "Received", "Pending", "Received"].map(
                (status, index) => (
                  <div className="order-item" key={index}>
                           <Image cloudName="degnky4ab" publicId={MyOrder.myorder1}>
   <Transformation crop="scale" width="200" angle="0" className="profile-pic" />
 </Image>
                    <div>
                      <h4>John Dey Tractor</h4>
                      <p>Qty: 1</p>
                      <p className={`status ${status.toLowerCase()}`}>
                        {status}
                      </p>
                      <p>20/10/2024 - 1/11/2024</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        );
      case "address":
        return (
          <div className="tab-content">
            <div className="address-section">
              <button className="add-btn">+ Add New Address</button>
              <div className="address-card">
                <div className="hadin">
                  <h4>Address Book </h4>
                  <div className="edit-icon">
                  <Image cloudName="degnky4ab" publicId={EditIcon.editicon}>
   <Transformation crop="scale" width="100" angle="0" className="profile-pic2" />
 </Image>
                  </div>
                </div>
                <h4>Default Shipping Address</h4>
                <p>
                  KM 14 Lagos Badagry Expressway, Badagry Lagos Nigeria.
                  08134786532
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="account-page">
      <div className="tabs">
        <a
          href="#"
          className={`tab-link ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          User Profile
        </a>
        <a
          href="#"
          className={`tab-link ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          My Orders
        </a>
        <a
          href="#"
          className={`tab-link ${activeTab === "address" ? "active" : ""}`}
          onClick={() => setActiveTab("address")}
        >
          Address Book
        </a>
      </div>
      {renderContent()}
    </div>
  );
};

export default Account;
