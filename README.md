<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** krallnyx, the-good-neighbor, krallplisken@hotmail.com, arnaud-jeanroch
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/krallnyx/the-good-neighbor">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">The Good Neighbor</h3>

  <p align="center">
    The Good Neighbor is a free Aid platform for any neighborhood
    <br />
    <a href="https://github.com/krallnyx/the-good-neighborAPI"><strong>This is the FrontEnd only, the BackEnd is in this repo, in Rails</strong></a>
    <br />
    <a href="https://github.com/krallnyx/the-good-neighbor"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/krallnyx/the-good-neighbor">View Demo</a>
    ·
    <a href="https://github.com/krallnyx/the-good-neighbor/issues">Report Bug</a>
    ·
    <a href="https://github.com/krallnyx/the-good-neighbor/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

# Project Brief:

Technology can be used in many ways, but it's best used to help people. This can be at the global level, or it can be used to make a difference right outside your door! For example, you may have seen people sleeping in the streets, a single mother struggling to carry a new piece of furniture up the stairs, or someone whose car broke down, so now they can't get to work for a month.

There are so many opportunities to help people; why not build a platform to facilitate exchanged acts of kindness?

In this project, you'll build an aid platform that connects people in need to willing volunteers in your (or any) community.

The project will give you an opportunity to work technically with roles and social connections, as well as with privacy requirements. You will also be sure that your website looks great on mobile devices and tablets.

The behavioral specifications for this project are hefty! Take your time to read through the requirements multiple times and to reflect longer on anything that doesn't make sense at first glance.

## **Functionality**

**Accounts**

A user must be able to sign up. They can create an account with their first name, last name, email address, and an upload button to submit a copy of a government-approved ID (approved formats: .jpg, .png, .pdf).

You do not need to worry about validating that an ID is government-issued or not. You only need to make sure that there is an upload functionality when creating an account and that it accepts the correct file formats.

**Volunteering to help**

Once signed in, all users see a map (via the Google Maps API with the map geolocalized reasonably to the user's current location) with markers on it indicating people in need of community help.

The markers should be colored differently for two different kinds of needs: one-time tasks (i.e., to help carry a piece of heavy furniture) or for a material need (i.e., a homeless woman on your street who needs a blanket for winter).

The map should be movable and should refresh its results, geolocalized to the new location, if dragged to show a new area.

Think about how on Airbnb, Yelp, or Google Maps will show you different results if you move the search area around. If you need examples, feel free to visit these sites.

Upon clicking a marker, information about the help request appears somewhere on the webpage (you choose where). For each help request, there should be a brief description (300 characters max), a type of request (one-time tasks or material needs, as mentioned above), a location (shown on the displayed map), and a status (fulfilled or unfulfilled, although only unfulfilled requests should be shown on the map). There should also be a button displayed somewhere on the webpage allowing users to volunteer to fulfill the selected need.

Upon clicking the button to fulfill the need, the volunteer is sent into a message flow where they can send a message to the requester directly on the platform. The requester and the volunteer can communicate this way to organize fulfillment of the need.

Once 5 separate users have clicked on the fulfillment button and sent messages to the requester, the need is no longer displayed on the site. This prevents people from putting up requests that last forever to which hundreds of people reply!

What if 1 of the 5 users doesn't actually fulfill the help request, though? If, within 24 hours, the request still hasn't been marked as fulfilled, the requester can republish it. However, if either party marks the request as fulfilled (a status associated with the request that either the requester or volunteer can modify), it cannot be republished.

**Submitting a request**

There should also be a button visible on the website allowing users to submit a request for help. You already saw the elements of a request above: there should be a brief description (300 characters max), a type of request (one-time tasks or material needs, as mentioned above), and a location (as a set of latitude and longitude coordinates). There is also a status of fulfilled or unfulfilled associated with the request, although by default, it is unfulfilled.

Each request has multiple parties associated with it: it should have one requester and one-or-more responders.

You can choose the exact terminology to use in your database tables and are not obligated to stick with "requester," for example.

**Counter**

There should be a counter for the number of unfulfilled help requests displayed on the homepage. This number should update every few seconds -- without reloading the page.

You'll often work on projects where you have a sense of how things should work and what you want. It's harder to see how it all pieces together though. Basic wireframing is an invaluable skill for developers, even if you have designers helping you out on a project. 

You can also diagram in UML to map out your data structures if necessary.

**Technicalities**

You'll begin by creating a website the way you're used to doing so at this point: by using Ruby on Rails to get yourself up and running quickly with a robust codebase. Your project must also use React for the front-end. You must also write tests for your code.

You must deploy your website live on the web. How you choose to do so is up to you.

**Mobile and tablets**

You should include style rules that take into account mobile and tablet views, consolidating content in a more pleasant way on these screen sizes.



## Built With

* React
* Google Maps API
* Redux



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/krallnyx/the-good-neighbor.git
```
2. Install NPM packages
```sh
npm install
```



<!-- USAGE EXAMPLES -->
## Usage

To launch the app
```sh
npm start
```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/krallnyx/the-good-neighbor/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. Feel free to do anything with it.



<!-- CONTACT -->
## Contact

Your Name - [@krallnyx](https://twitter.com/krallnyx) - krallplisken@hotmail.com

Project Link: [https://github.com/krallnyx/the-good-neighbor](https://github.com/krallnyx/the-good-neighbor)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* by default the site runs in HTTP (not in HTTPS) so the automatic geolocation is disabled





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/krallnyx/repo.svg?style=flat-square
[contributors-url]: https://github.com/krallnyx/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/krallnyx/repo.svg?style=flat-square
[forks-url]: https://github.com/krallnyx/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/krallnyx/repo.svg?style=flat-square
[stars-url]: https://github.com/krallnyx/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/krallnyx/repo.svg?style=flat-square
[issues-url]: https://github.com/krallnyx/repo/issues
[license-shield]: https://img.shields.io/github/license/krallnyx/repo.svg?style=flat-square
[license-url]: https://github.com/krallnyx/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/arnaud-jeanroch
[product-screenshot]: images/screenshot.png
