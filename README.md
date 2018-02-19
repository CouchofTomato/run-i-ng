# Strava Run-i-ng
A Strava Activity Explorer

## Build Tools
* ReactJS
* Strava API
* Rails backend (? - May not be necessary)

## User Flow
* User login with Strava OmniAuth
* Download user's Strava profile
* Render activities along left-hand sidebar
* User activity timeline along top (separated by year then month)
* User clicks on activity:
  * Activity shows up with large map
  * List of stastics below map
  * Map and statistics update when user clicks on different activity.

## Requirements
* NPM

## Getting Started
1. Clone Repository
2. `cd` into `run-i-ng` directory
3. Run `npm install` to install dependancies
4. Start development server with `npm start`
  * A new webpage will open up automatically (`http://localhost:3000`)

## Building on (Features for later)
* Add different activity types (Running, Cycling, Hiking, etc.)
* Show maps of similar activities based on distance in same area
* Add marathon training plans
  * User selects what date running event is on
    * Future: List of upcoming events.
  * User selects which training plan they want to follow (I.E. Pfitzinger 80/20, Higdon Intermediate 2, etc.)
  * Calendar is generated with training plan for each day
  * Button to export to gCal, Outlook, etc.
  * Daily SMS or Email reminders sent to user

## Contributing

We follow the "fork-and-pull" Git workflow.

  1. **Fork** the repo on GitHub
  2. **Clone** the project to your own machine
  3. **Commit** changes to your own branch
  4. **Push** your work back up to your fork
  5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!