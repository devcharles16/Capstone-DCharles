CREATE DATABASE vehicledatabase;

-- users

CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id) 
);

-- requests

CREATE TABLE requests(
    request_id SERIAL,
    user_id UUID,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (request_id),       
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)

-- fake user data
INSERT INTO users (user_name, user_email, user_password) values ('kush', 'kush@gmail.com', 'kushy');

-- fake requests data
INSERT INTO requests (user_id, description) values ('43d21df8-e27d-439d-bbc3-6d755db6d00d', 'clean room');
 