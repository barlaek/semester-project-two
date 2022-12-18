# semester-project-two

Auction site

This project is an incomplete version of an auction website as it lacks styling.

However, the site is fully functional.

## use

On the website a user may view listings, search and filter through the listings, and view individual listings.

To use the site, a user may register an account. To register the user must use a valid email address.

Valid email addresses includes @noroff.no and @stud.noroff.no.

Example: example@noroff.no

The user may login with email and password the user has registered.

As a registered user, the user is granted 1000 credits at registration. The user may use these credits to bid on listings.

Provide the number of credits in the input field and press bid to place bid.

The user may create his/her own listing as well. Provide the required data, title and deadline, and add optional data if wished.

Any media requires a URL string to a valid address.

Under the profile tab, the user may update his/her avatar and listings and may view his/her credits.

The user may log out using the logout button in the NAV. This removes the profile object from localStorage and redirects the user to index.html.

## build

To continue building on this application, create a fork and clone the repository.

Open the repository in an IDE and open the terminal.

To build you need a package manager. This repository uses NPM.

Install dependencies.

Run command: npm i

To install all the dependencies.

This project uses Vite to bundle and build the distribution folder.

Make sure export default server at vite.config.js is active to run development.

Run command: npm run dev

To build, make sure defineConfig at vite.config.js is active.

Run command: npm run vite-build

to build the distribution.

## Testing badges

[![Automated Unit Testing](https://github.com/barlaek/semester-project-two/actions/workflows/unit-test.yml/badge.svg)](https://github.com/barlaek/semester-project-two/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/barlaek/semester-project-two/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/barlaek/semester-project-two/actions/workflows/e2e-test.yml)
