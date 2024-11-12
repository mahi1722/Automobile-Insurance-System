CREATE DATABASE AIS_DB;

USE AIS_DB;

CREATE TABLE USER (
    user_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    dob DATE,
    aadhar_no VARCHAR(255) UNIQUE,
    pan_no VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE VEHICLE (
    vehicle_id VARCHAR(255) PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    registration_no VARCHAR(255) UNIQUE NOT NULL,
    year INT NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES USER(user_id)
);

CREATE TABLE POLICY (
    policy_id VARCHAR(255) PRIMARY KEY,
    policy_no VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL,
    base_premium DECIMAL(10, 2) NOT NULL,
    features TEXT,
    add_ons TEXT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE OFFICER (
    officer_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE PROPOSAL (
    proposal_id VARCHAR(255) PRIMARY KEY,
    submission_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    additional_docs TEXT,
    user_id VARCHAR(255),
    vehicle_id VARCHAR(255),
    policy_id VARCHAR(255),
    officer_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES USER(user_id),
    FOREIGN KEY (vehicle_id) REFERENCES VEHICLE(vehicle_id),
    FOREIGN KEY (policy_id) REFERENCES POLICY(policy_id),
    FOREIGN KEY (officer_id) REFERENCES OFFICER(officer_id)
);

-- Create the PAYMENT table
CREATE TABLE PAYMENT (
    payment_id VARCHAR(255) PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    proposal_id VARCHAR(255),
    FOREIGN KEY (proposal_id) REFERENCES PROPOSAL(proposal_id)
);
SHOW DATABASES;
Use AIS_DB;
show tables;
describe payment;