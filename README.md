# Online Bookstore - Frontend

## Overview

This project is the frontend application for the Online Bookstore.

It consumes the Spring Boot backend APIs and provides a user interface for:

* Login
* Viewing Books
* Adding Books to Cart
* Updating Cart
* Removing Items
* Checkout

## Technology Stack

* React
* React Router
* Axios
* Vite

## Prerequisites

* Node.js 18+
* npm

## Clone Repository

```bash
git clone https://github.com/abhishekg1981992/bookstore-ui.git
cd bookstore-ui
```

## Install Dependencies

```bash
npm install
```

## Start Application

```bash
npm run dev
```

Application URL:

http://localhost:5173

## Backend Requirement

The backend application must be running before starting the frontend.

Backend URL:

http://localhost:8080

Backend Repository:

https://github.com/abhishekg1981992/online-bookstore.git

## Application Flow

1. Register a user using the backend API.
2. Login using the frontend.
3. Browse available books.
4. Add books to cart.
5. Manage cart items.
6. Checkout and create an order.

## Features Implemented

* User Login
* JWT Token Storage
* Book Catalog Display
* Shopping Cart Management
* Checkout Flow
* Order Confirmation

## Notes

The frontend expects the backend service to be running on:

http://localhost:8080

If the backend URL changes, update:

```text
src/services/api.js
```
