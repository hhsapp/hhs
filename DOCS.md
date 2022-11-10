# hhs v0.0.0



- [Doctor](#doctor)
	- [Create doctor](#create-doctor)
	- [Delete doctor](#delete-doctor)
	- [Login](#login)
	- [Post FCM ID](#post-fcm-id)
	- [Retrieve doctor](#retrieve-doctor)
	- [Retrieve doctors](#retrieve-doctors)
	- [Update doctor](#update-doctor)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Login](#login)
	- [Post FCM ID](#post-fcm-id)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update user](#update-user)
	


# Doctor

## Create doctor



	POST /doctors


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Doctor's name.</p>							|
| email			| 			|  <p>Doctor's email.</p>							|
| mobileNumber			| 			|  <p>Doctor's mobileNumber.</p>							|
| password			| 			|  <p>Doctor's password.</p>							|
| gender			| 			|  <p>Doctor's gender.</p>							|
| userType			| 			|  <p>Doctor's userType.</p>							|
| profilePicture			| 			|  <p>Doctor's profilePicture.</p>							|
| age			| 			|  <p>Doctor's age.</p>							|
| experience			| 			|  <p>Doctor's experience.</p>							|
| hospitalName			| 			|  <p>Doctor's hospitalName.</p>							|
| specalities			| 			|  <p>Doctor's specalities.</p>							|
| education			| 			|  <p>Doctor's education.</p>							|
| fcmId			| 			|  <p>Doctor's fcmId.</p>							|

## Delete doctor



	DELETE /doctors/:id


## Login



	POST /doctors/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| 			|  <p>Doctor's email.</p>							|
| password			| 			|  <p>Doctor's password.</p>							|

## Post FCM ID



	POST /doctors/fcm/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| fcmId			| 			|  <p>Doctor's fcmId.</p>							|

## Retrieve doctor



	GET /doctors/:id


## Retrieve doctors



	GET /doctors


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update doctor



	PUT /doctors/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Doctor's name.</p>							|
| email			| 			|  <p>Doctor's email.</p>							|
| mobileNumber			| 			|  <p>Doctor's mobileNumber.</p>							|
| password			| 			|  <p>Doctor's password.</p>							|
| gender			| 			|  <p>Doctor's gender.</p>							|
| userType			| 			|  <p>Doctor's userType.</p>							|
| profilePicture			| 			|  <p>Doctor's profilePicture.</p>							|
| age			| 			|  <p>Doctor's age.</p>							|
| experience			| 			|  <p>Doctor's experience.</p>							|
| hospitalName			| 			|  <p>Doctor's hospitalName.</p>							|
| specalities			| 			|  <p>Doctor's specalities.</p>							|
| education			| 			|  <p>Doctor's education.</p>							|
| fcmId			| 			|  <p>Doctor's fcmId.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>User's name.</p>							|
| email			| 			|  <p>User's email.</p>							|
| mobileNumber			| 			|  <p>User's mobileNumber.</p>							|
| age			| 			|  <p>User's age.</p>							|
| gender			| 			|  <p>User's gender.</p>							|
| password			| 			|  <p>User's password.</p>							|
| bloodGroup			| 			|  <p>User's bloodGroup.</p>							|
| height			| 			|  <p>User's height.</p>							|
| weight			| 			|  <p>User's weight.</p>							|
| userType			| 			|  <p>User's userType.</p>							|

## Delete user



	DELETE /users/:id


## Login



	POST /users/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| 			|  <p>User's email.</p>							|
| password			| 			|  <p>User's password.</p>							|

## Post FCM ID



	POST /users/fcm/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| fcmId			| 			|  <p>User's fcmId.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>User's name.</p>							|
| email			| 			|  <p>User's email.</p>							|
| mobileNumber			| 			|  <p>User's mobileNumber.</p>							|
| age			| 			|  <p>User's age.</p>							|
| gender			| 			|  <p>User's gender.</p>							|
| password			| 			|  <p>User's password.</p>							|
| bloodGroup			| 			|  <p>User's bloodGroup.</p>							|
| height			| 			|  <p>User's height.</p>							|
| weight			| 			|  <p>User's weight.</p>							|
| userType			| 			|  <p>User's userType.</p>							|


