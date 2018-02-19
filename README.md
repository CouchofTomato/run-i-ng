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
