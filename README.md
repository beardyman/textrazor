
# Textrazor-sdk
This is an **unofficial** wrapper for textrazor's REST API.  For a full reference to TextRazor's REST API, check out their documentation: https://www.textrazor.com/docs/rest

## Install
```bash
npm i --save textrazor-sdk

```

## Additional Docs
View function docs [here](https://github.com/beardyman/textrazor/tree/master/docs).

## Basic Usage
All functions return `bluebird` promises.

```js
textrazor.parser.parse('A total solar eclipse will take place on Aug. 21, 2017. ' +
  'It will be visible for the first time in the contiguous U.S. in nearly four decades, ' +
  'the last time being on Feb. 26, 1979. The 2017 eclipse will be the first with a path of ' +
  'totality crossing the country\'s Pacific coast and Atlantic coast since 1918. The maximum duration ' +
  'of totality will be around 2 minutes and 41.6 seconds.')
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Example response
Response from the "Usage" section above with most entities removed for conciseness. 
```json
{
  "response": {
    "language": "eng",
    "languageIsReliable": true,
    "entities": [
      {
        "id": 0,
        "matchingTokens": [
          56,
          57
        ],
        "entityId": "West Coast of the United States",
        "freebaseTypes": [
          "/location/location",
          "/organization/organization_scope",
          "/location/region"
        ],
        "confidenceScore": 1.156,
        "wikiLink": "http://en.wikipedia.org/wiki/West_Coast_of_the_United_States",
        "matchedText": "Pacific coast",
        "freebaseId": "/m/017l04",
        "relevanceScore": 0.1484,
        "entityEnglishId": "West Coast of the United States",
        "startingPos": 261,
        "endingPos": 274,
        "wikidataId": "Q12606"
      },
      {
        "id": 14,
        "type": [
          "Place"
        ],
        "matchingTokens": [
          56
        ],
        "entityId": "Pacific Ocean",
        "freebaseTypes": [
          "/geography/geographical_feature",
          "/film/film_location",
          "/book/book_subject",
          "/meteorology/cyclone_affected_area",
          "/people/place_of_interment",
          "/geography/body_of_water",
          "/location/location"
        ],
        "confidenceScore": 2.317,
        "wikiLink": "http://en.wikipedia.org/wiki/Pacific_Ocean",
        "matchedText": "Pacific",
        "freebaseId": "/m/05rgl",
        "relevanceScore": 0.1799,
        "entityEnglishId": "Pacific Ocean",
        "startingPos": 261,
        "endingPos": 268,
        "wikidataId": "Q98"
      }
    ]
  },
  "time": 0.04501,
  "ok": true
}
```
