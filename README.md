# The Wild Oasis

## Table of Contents

-   [Introduction](#introduction)
-   [Technologies Used](#technologies-used)
-   [Features](#features)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Environment Variables](#environment-variables)
    -   [Run Application](#run-applicaton)
    -   [Sample User Logins](#sample-user-logins)
-   [Data Modeling](#data-modeling)
-   [Folder Structure](#folder-structure)
-   [Deployment](#deployment)
-   [Acknowledgments](#acknowledgments)

## Introduction

The Wild Oasis is a beautiful internal hotel management application system. This
application is designed to manage hotel operations, including sales statistics,
cabin management, user management, booking management, and various customization
options. And so much more! See it in action at
[The Wild Oasis](https://the-wild-oasis-v3.netlify.app/).

## Technologies Used

-   **Frontend**:

    -   **[React]**: A very popular JavaScript library for building user
        interfaces.
    -   **[React Router]**: The standard routing for React SPAs.
    -   **[Styled Components]**: A very popular way of writing component-scoped
        CSS, right inside JavaScript.
    -   **[React Query]**: The best way of managing remote state, with features
        like caching, automatic re-fetching, pre-fetching offline support, etc.
        Alternatives are SWR and RTK query, but this is the most popular.
    -   **Context API**: One simple context with `useState` will be enough, No
        need Redux.
    -   **[React Hook Form]**: A library can simplify handling bigger forms.
    -   **Others**: [React Icons], [React hot toast], [Recharts], [date-fns]

-   **Backend**:
    -   Handle by **[Supabase]**: A service that allows developers to easily
        create a back-end with a Postgres database. It automatically creates a
        database and API so we can easily request and receive data from the
        server. Also comes with easy-to-use user authentication and file
        storage.

## Features

1. Authentication and Authorization

    - Users of the app are hotel employees.
    - New users can only be signed up inside the applications (to guarantee that
      only actual hotel employees can get accounts).
    - Users able to upload an avatar, and change their name and password

2. Cabins

    - The app has a table view with all cabins, showing the cabin photo, name,
      capacity, price, and current discount.
    - Users can update or delete a cabin and create new cabins (including
      uploading a photo)

3. Bookings

    - The app has a table view with all bookings, showing arrival and departure
      dates, status, and paid amount, as well as cabin and guest data.
    - The booking status can be "unconfirmed" (booked but not yet checked in),
      "checked in", or "checked out". The table is filterable by this important
      status.
    - Other booking data includes the number of guests, number of nights, guest
      observations, and whether they booked breakfast and breakfast price.

4. Check-In/Out

    - Users can delete, check-in, or check out a booking as the guest arrives
      (no editing necessary for now).
    - Bookings may not have been paid yet on guest arrival. Therefore, on
      check-in, users need to accept payment (outside the app), and then confirm
      that payment has been received (inside the app).
    - On check-in, the guest should have the ability to add breakfast for the
      entire stay if they haven’t already.

5. Guests

    - Guest data contain full name, email, national ID, nationality, and a
      country flag for easy identification.

6. Dashboard

    - The initial app screen should be a dashboard, to display important
      information for the last 7, 30, or 90 days:
        - A list of guests checking in and out on the current day. Users should
          be able to perform these tasks from here.
        - Statistics on recent bookings, sales, check-ins, and occupancy rate.
        - A chart showing all daily hotel sales, showing both "total" sales and
          "extras" sales (only breakfast at the moment).
        - A chart showing statistics on stay durations, as this is an important
          metric for the hotel

7. Settings

    - Users can define a few application-wide settings: breakfast price, minimum
      and maximum nights/booking, max guests/booking

8. Dark Mode

    - The app supports dark mode.

## Getting Started

### Installation

```bash
git clone https://github.com/korngsamnang/the-wild-oasis
```

### Environment Variables

Rename the .env.example file to .env and modify the following:

```bash
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-key
```

### Run Application

```bash
#install dependency
npm install

#run the app (development)
npm run dev

#run the app (production)
npm run build
```

### Sample User Logins

```bash
test@example.com
test12345
```

## Data Modeling

## Folder Structure

```
└── 📁the-wild-oasis
    └── 📁public
    └── 📁src
        └── 📁context
        └── 📁data
        └── 📁features
            └── 📁authentication
            └── 📁bookings
            └── 📁cabins
            └── 📁dashboard
            └── 📁settings
        └── 📁hooks
        └── 📁pages
        └── 📁services
        └── 📁styles
        └── 📁ui
        └── 📁utils
        └── App.jsx
        └── main.jsx
```

## Deployment

This project is deployed on [Netlify](https://app.netlify.com/), a popular and
user-friendly platform for deploying web applications, especially suited for
applications without complex backends.

## Acknowledgments

Special thanks to
[Jonas Schmedtmann](https://twitter.com/jonasschmedtman?lang=en).

[React]: https://react.dev/
[React Query]: https://tanstack.com/query/latest/
[Styled Components]: https://styled-components.com/
[React Router]: https://reactrouter.com/en/main
[React Hook Form]: https://react-hook-form.com/
[React Icons]: https://react-icons.github.io/react-icons/
[React hot toast]: https://react-hot-toast.com/
[Recharts]: https://recharts.org/en-US/
[date-fns]: https://date-fns.org/
[Supabase]: https://supabase.com/
