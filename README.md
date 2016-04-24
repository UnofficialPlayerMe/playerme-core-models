# upa-models
A module containing models that represent objects in the [Player v1 API](http://docs.playerme.apiary.io/).

Written in ES6

# API Model Completion

## [General](http://docs.playerme.apiary.io/#reference/general)
* OAuth - **Not checked**
* Regular Login - **Not checked**
* Pre-login - **Not checked**

## [Auth related](http://docs.playerme.apiary.io/#reference/auth-related)
* Register - **Not checked**
* Forgot Password - **Not checked**
* Reset Password - **Not checked**
* Get Invite Link - **Not checked**

## [Users](http://docs.playerme.apiary.io/#reference/users)
* Users Collection - **UserExtendedModel[]**
* User Entity - **UserExtendedModel**
* Online users - **No model**
* Change user's attributes - **No model**

## [User's Avatars](http://docs.playerme.apiary.io/#reference/user's-avatars)
* Avatars Collection - **To Do**
```[{
  "id":                 35411,
  "user_id":            10027,
  "filename":{
    "original":             "\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/avatar\/a9\/1f\/54\/3b0c44b54e39014fc2a5c63549388c89.jpg",
    "cached":               "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/a9\/1f\/54\/3b0c44b54e39014fc2a5c63549388c89.jpg",
    "original_filename":    "3b0c44b54e39014fc2a5c63549388c89.jpg"
  },
  "is_active":          false,
  "created_at":         "2015-04-08T08:38:30+0000",
  "updated_at":         "2015-04-20T08:54:22+0000",
  "deleted_at":         null
}]```
* Avatar Entity - **To Do**
```{
  "id":                 29891,
  "user_id":            10027,
  "filename":{
    "original":             "\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/avatar\/55\/46\/9e\/3365d9e4b771e888ff11a710854dd0f3.jpg",
    "cached":               "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/55\/46\/9e\/3365d9e4b771e888ff11a710854dd0f3.jpg",
    "original_filename":    "3365d9e4b771e888ff11a710854dd0f3.jpg"
  },
  "is_active":          true,
  "created_at":         "2015-01-05T02:04:58+0000",
  "updated_at":         "2016-03-18T00:04:42+0000",
  "deleted_at":         null
}```

## [User's Covers](http://docs.playerme.apiary.io/#reference/user's-covers)
* Covers Collection - **To Do**
```[{
  "id":                 137154,
  "user_id":            10027,
  "filename":{
    "original":             "\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/cover\/1f\/77\/4f\/c369c7555d7455418ed0373f2ae41a76.jpg",
    "cached":               "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/1f\/77\/4f\/c369c7555d7455418ed0373f2ae41a76.jpg",
    "original_filename":    "c369c7555d7455418ed0373f2ae41a76.jpg"
  },
  "is_active":          false,
  "created_at":         "2016-03-28T01:02:27+0000",
  "updated_at":         "2016-03-28T01:03:22+0000",
  "deleted_at":         null
},{
  "id":                 114605,
  "user_id":            10027,
  "filename":{
    "original":             "\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/cover\/b9\/69\/bf\/15f6bb04a782e2e8be9fce7bfd72035c.jpg",
    "cached":               "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/b9\/69\/bf\/15f6bb04a782e2e8be9fce7bfd72035c.jpg",
    "original_filename":    "15f6bb04a782e2e8be9fce7bfd72035c.jpg"
  },
  "is_active":          false,
  "created_at":         "2015-10-27T10:36:40+0000",
  "updated_at":         "2016-03-28T01:03:22+0000",
  "deleted_at":         null
}]```
* Cover Entity - **To Do**
```{
  "id":                 35002,
  "user_id":            10027,
  "filename":{
    "original":             "\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/cover\/60\/c5\/bd\/690d82af98a8067fa5467b171f1fc7d7.jpg",
    "cached":               "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/60\/c5\/bd\/690d82af98a8067fa5467b171f1fc7d7.jpg",
    "original_filename":    "690d82af98a8067fa5467b171f1fc7d7.jpg"
  },
  "is_active":          true,
  "created_at":         "2015-04-21T19:03:28+0000",
  "updated_at":         "2016-03-28T01:03:22+0000",
  "deleted_at":         null
}```

## [User's Groups](http://docs.playerme.apiary.io/#reference/user's-groups)
* Groups Collection - **UserExtendedModel[]**

## [User's Activities](http://docs.playerme.apiary.io/#reference/user's-activities)
* Activities Collections - **ActivityModel[]**

## [User's Social Profiles](http://docs.playerme.apiary.io/#reference/user's-social-profiles)
* Profiles Collection - **To Do**
```{
  "profiles": [{
    "id":                   10,
    "user_id":              4,
    "profile_type_version": 1,
    "profile_type_id":      "",
    "created_at":           "2013-12-17T17:06:04+0000",
    "updated_at":           "2016-04-18T11:41:55+0000",
    "profile_type":         "gplus",
    "url":                  "https:\/\/plus.google.com\/114332970865619977053",
    "is_visible":           true
  },{
    "id":                   166130,
    "user_id":              4,
    "profile_type_version": 1,
    "profile_type_id":      null,
    "created_at":           "2014-11-22T17:11:12+0000",
    "updated_at":           "2015-03-21T19:40:36+0000",
    "profile_type":         "psn",
    "url":                  "seanyfee",
    "is_visible":           true
  }]
}```

## [User's Videos](http://docs.playerme.apiary.io/#reference/user's-videos)
* Videos Collection - **To Do**
```[{
  "url":        "https:\/\/www.youtube.com\/watch?v=jwx8eFgEU2M",
  "id":         1137393,
  "thumbnail":  "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/video\/c9\/7a\/d0\/4ae13f50a22b1cd4a63ae14327d1ab12.jpg",
  "source":     "youtube",
  "duration":   "00:00",
  "title":      "Player.me Launch Competition Draw",
  "showAuthor": false,
  "showDelete": false
},{
  "url":        "https:\/\/www.youtube.com\/watch?v=YiuSnK40nyU",
  "id":         736035,
  "thumbnail":  "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/video\/89\/b8\/3c\/cf5be1d41912a0ad9c8eb933cd733952.jpg",
  "source":     "youtube",
  "duration":   "00:00",
  "title":      "2014 - A Year in Gaming in 3 mins",
  "showAuthor": false,
  "showDelete": false
}]```
* ~~Video Entity~~

## [User's Notifications](http://docs.playerme.apiary.io/#reference/user's-notifications)
* Notifications Collection - **To Do**
```[{
  "key":            "c3736725",
  "type":           "like_comment",
  "set":            "like_comment:c3736725",
  "id":             23583405,
  "ids":            [23583405],
  "user":{
    "id":               18148,
    "username":         "MZQayyum",
    "account_type":     "user",
    "slug":             "mzqayyum",
    "avatar":           "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/e2\/61\/ed\/308c0d6bdad2e757e09a9bcf7afa0593.jpg",
    "cover":            "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/01\/09\/33\/2379801d51d399ebe62db861c895b1c9.jpg",
    "url":              "\/mzqayyum",
    "followers_count":  383,
    "is_featured":      false,
    "is_verified":      false,
    "is_partner":       false,
    "is_private":       false
  },
  "url":            "\/feed\/4302492?comment=3736725&clear_notification=like_comment%3Ac3736725",
  "created_at":     "2016-04-24T14:49:24+0000",
  "names":          "MZQayyum",
  "text":           "liked your comment: \"If you where able to...\".",
  "unread":         true
},{
  "key":            "c4301562",
  "type":           "reply_comment",
  "set":            "reply_comment:c4301562",
  "id":             23581764,
  "ids":            [23581764,23581740,23581638,23581587,23579646,23579631,23579610],
  "user":{
    "id":               28701,
    "username":         "Pl4smic",
    "account_type":     "user",
    "slug":             "pl4smic",
    "avatar":           "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/25\/ca\/29\/72e1b0e0915a2fb5cf7d2f883dd0416c.jpg",
    "cover":            "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/b3\/57\/d5\/1a732a773cc5181072c4d33d0daec4f9.jpg",
    "url":              "\/pl4smic",
    "followers_count":  846,
    "is_featured":      false,
    "is_verified":      false,
    "is_partner":       false,
    "is_private":       false
  },
  "url":            "\/feed\/4301562?comment=3736488&clear_notification=reply_comment%3Ac4301562",
  "created_at":     "2016-04-24T11:39:05+0000",
  "names":          "Pl4smic, MgBacon and 2 other players",
  "text":           "have posted a comment in a conversation you are in.",
  "unread":         false
}]```

## [User's Photos](http://docs.playerme.apiary.io/#reference/user's-photos)
* Photos Collection - **To Do**
```[{
  "id":             18464,
  "user_id":        10027,
  "description":    "Mauricio Abril http:\/\/conceptartworld.com\/?p=12373",
  "created_at":     "2015-04-24T08:17:40+0000",
  "original":       "\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/photo\/32\/e6\/20\/34edf4755a4b3a7689c6e73e4e206e7a.jpg",
  "resized":        "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/photo\/32\/e6\/20\/34edf4755a4b3a7689c6e73e4e206e7a.jpg",
  "thumbnail":      "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/photo\/32\/e6\/20\/34edf4755a4b3a7689c6e73e4e206e7a-216x121.jpg",
  "showDelete":     true,
  "showAuthor":     false
},{
  "id":             18389,
  "user_id":        10027,
  "description":    "From FFXIV\nhttp:\/\/na.finalfantasyxiv.com\/lodestone\/character\/2280782\/",
  "created_at":     "2015-04-23T08:28:19+0000",
  "original":       "\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/photo\/cd\/fc\/b4\/5db8f52dba03d7021ef1dd7c586fb958.jpg",
  "resized":        "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/photo\/cd\/fc\/b4\/5db8f52dba03d7021ef1dd7c586fb958.jpg",
  "thumbnail":      "\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/photo\/cd\/fc\/b4\/5db8f52dba03d7021ef1dd7c586fb958-216x121.jpg",
  "showDelete":     true,
  "showAuthor":     false
}]```
* ~~Photos Entity**~~

## [Groups](http://docs.playerme.apiary.io/#reference/groups)
* Groups Collection - **UserExtendedModel[]**

## [Group's Members](http://docs.playerme.apiary.io/#reference/group's-members)
* Members Collection - **UserExtendedModel[]**
* ~~Members Entity~~

## [Follow](http://docs.playerme.apiary.io/#reference/follow)
* Followers - **UserModel[]**
* Following - **UserModel[]**
* ~~Following Entity~~

## [Games](http://docs.playerme.apiary.io/#reference/games)
* Games Collection - **GameModel[]**
* Game Entity - **GameModel**
* ~~Game Attributes~~~~
* Game Videos - **To Do**
```[{
  "id":                 26391,
  "user_id":            46771,
  "game_id":            "705",
  "is_approved":        true,
  "approved_by":        "4",
  "key":                "VahXg1r7Pic",
  "title":              "Battlefield 2-Max Graphics[2014]",
  "description":        "This is a gameplay with all the graphics set to maximum",
  "duration":           "00:00",
  "source":             "youtube",
  "url":                "https:\/\/www.youtube.com\/watch?v=VahXg1r7Pic",
  "published_at":       "2014-06-08T12:05:09+0000",
  "created_at":         "2016-01-22T16:03:46+0000",
  "updated_at":         "2016-01-25T05:49:07+0000",
  "deleted_at":         null,
  "deleted_by":         null,
  "thumbnails": {
    "host":                 "\/\/d1zqrvc06emslq.cloudfront.net",
    "cached":               "\/media\/cache\/gamevideo\/71\/16\/de\/b802f145e057985908fc6bdbcaab1b19.jpg",
    "original":             "\/media\/originals\/gamevideo\/71\/16\/de\/b802f145e057985908fc6bdbcaab1b19.jpg"
  },
  "user": {
    "id":                   46771,
    "account_type":         "user",
    "is_private":           false,
    "username":             "KingShoter007",
    "slug":                 "kingshoter007",
    "short_description":    "Gamer and youtuber. Love making videos.",
    "description":          "",
    "description_html":     "",
    "cover": {
      "original":               "\/\/something.jpg",
      "cached":                 "\/\/something.jpg",
      "original_filename":      "4a95ced8c3a67b841babf6350aed53db.jpg"
    },
    "avatar": {
      "original":               "\/\/something.jpg",
      "cached":                 "\/\/something.jpg",
      "original_filename":      "4b9da96348a4aa1b5a822f3b9972870b.jpg"
    },
    "created_at":           "2015-05-27T06:24:37+0000",
    "is_verified":          false,
    "is_partner":           false,
    "url":                  "\/kingshoter007",
    "followers_count":      11,
    "following_count":      5
  },
  "thumbnail":          "\/\/something.jpg",
  "showAuthor":         true,
  "showDelete":         false
}]```
* Game Videos Entity - **One of above**
* Game Images - **To Do**
```[{
  "id":                 13182,
  "user_id":            161520,
  "game_id":            "978",
  "is_approved":        true,
  "approved_by":        "4",
  "title":              "Off-Hand Tricks",
  "description":        "Easy way to move animals using the off hand",
  "filename": {
    "original":             "\/\/something.jpg",
    "cached":               "\/\/something.jpg",
    "original_filename":    "something.jpg"
  },
  "created_at":         "2016-04-20T16:28:36+0000",
  "updated_at":         "2016-04-21T10:32:12+0000",
  "deleted_at":         null,
  "deleted_by":         null,
  "showDelete":         false,
  "showAuthor":         true,
  "user": {
    "id":                   161520,
    "account_type":         "user",
    "is_private":           false,
    "username":             "MottBot",
    "slug":                 "mottbot",
    "short_description":    "",
    "description":          "",
    "description_html":     "",
    "cover": {
      "original":               "\/\/something.jpg",
      "cached":                 "\/\/something.jpg",
      "original_filename":      "something.jpg"
    },
    "avatar": {
      "original":               "\/\/something.jpg",
      "cached":                 "\/\/something.jpg",
      "original_filename":      "something.jpg"
    },
    "created_at":           "2016-03-03T03:08:50+0000",
    "is_verified":          false,
    "is_partner":           false,
    "url":                  "\/mottbot",
    "followers_count":      6,
    "following_count":      10
  }
},{
  "id":                 12666,
  "user_id":            131749,
  "game_id":            "978",
  "is_approved":        true,
  "approved_by":        "4",
  "title":              "The first step's a doozie.",
  "description":        "Watch your st..... oh he fell. ",
  "filename": {
    "original":             "\/\/something.jpg",
    "cached":               "\/\/something.jpg",
    "original_filename":    "something.jpg"
  },
  "created_at":         "2016-03-24T02:18:51+0000",
  "updated_at":         "2016-03-28T06:34:05+0000",
  "deleted_at":         null,
  "deleted_by":         null,
  "showDelete":         false,
  "showAuthor":         true,
  "user": {
    "id":                   131749,
    "account_type":         "user",
    "is_private":           false,
    "username":             "TheRealPudgyBuns",
    "slug":                 "therealpudgybuns",
    "short_description":    "I'm 25 years old, I live in Hilo, Hawaii and we're going to have fun.",
    "description":          "",
    "description_html":     "",
    "cover": {
      "original":               "\/\/something.jpg",
      "cached":                 "\/\/something.jpg",
      "original_filename":      "something.jpg"
    },
    "avatar": {
      "original":               "\/\/something.jpg",
      "cached":                 "\/\/something.jpg",
      "original_filename":      "something.jpg"
    },
    "created_at":           "2015-08-18T17:32:38+0000",
    "is_verified":          false,
    "is_partner":           false,
    "url":                  "\/therealpudgybuns",
    "followers_count":      5,
    "following_count":      56
  }
}]```
* Game Activities - **ActivityModel[]**
* Game Tags - **To Do**
```[{  
  "id":             5,
  "user_id":        0,
  "name":           "Completed",
  "slug":           "completed",
  "description":    "",
  "is_system":      true,
  "created_at":     "2015-02-21T16:46:29+0000",
  "updated_at":     "2015-02-21T16:46:29+0000",
  "count":          151,
  "display":        true,
  "is_editable":    true,
  "is_tagged":      false,
  "url":            "\/g\/minecraft\/players\/completed\/1"
},{  
  "id":             11,
  "user_id":        0,
  "name":           "Contributor",
  "slug":           "contributor",
  "description":    "",
  "is_system":      true,
  "created_at":     "2016-03-11T05:05:06+0000",
  "updated_at":     "2016-03-11T05:05:06+0000",
  "count":          202,
  "display":        true,
  "is_editable":    false,
  "is_tagged":      false,
  "url":            "\/g\/minecraft\/players\/contributor\/1"
}]```
* Game Players - **UserExtendedModel[]** (e.g. https://player.me/api/v1/games/978/players/contributor)

## [Games Platforms](http://docs.playerme.apiary.io/#reference/games-platforms)
* Platforms - **To Do**
```[{
  "id":240,
  "name":"3DO",
  "short_name":"",
  "description":null,
  "order":"0",
  "created_at":"2015-05-28T04:48:44+0000",
  "updated_at":"2015-05-28T04:48:44+0000",
  "deleted_at":null,
  "slug":"3do",
  "display_name":"3DO"
},{
  "id":2,
  "name":"Amiga",
  "short_name":"",
  "description":null,
  "order":"60",
  "created_at":"2013-12-15T18:07:02+0000",
  "updated_at":"2013-12-15T18:07:02+0000",
  "deleted_at":null,
  "slug":"amiga",
  "display_name":"Amiga"
}]```

## [Feed](http://docs.playerme.apiary.io/#reference/feed)
* Post Collections - **ActivityModel[]**
* Post Entity - **ActivityModel**
* Comments Collection - **CommentModel[]**
* Comment Entity - **CommentModel**
* Activity Likes - **UserModel[]**
* Activity Pins - **UserModel[]**
* Activity Share - **UserModel[]**
* Comment Likes - **UserModel[]**
* Blocking a User - **Not checked**
* Hiding a User - **Not checked**
* Streams - **Not checked**
* Report a post/comment - **Not checked**

## [Messaging](http://docs.playerme.apiary.io/#reference/messaging)
* Message Groups Collection - **To Do**
```[{  
  "id":3021,
  "name":"maktouch",
  "is_group":false,
  "created_at":"2014-10-06T18:47:23+0000",
  "updated_at":"2014-10-06T18:47:23+0000",
  "order":0,
  "url":"https:\/\/player.me\/me\/messaging\/3021",
  "image":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/69\/0c\/57\/3b0621d1672638929336e054347b46b7.jpg",
  "private_with":1,
  "is_unread":false,
  "users":[{  
    "id":1,
    "username":"maktouch",
    "account_type":"user",
    "slug":"maktouch",
    "avatar":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/69\/0c\/57\/3b0621d1672638929336e054347b46b7.jpg",
    "cover":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/54\/4d\/3e\/a0eb0439d51808d90259ff228b4b30bb.jpg",
    "url":"\/maktouch",
    "followers_count":1409,
    "is_featured":false,
    "is_verified":false,
    "is_partner":false,
    "is_private":false
  },{  
    "id":10027,
    "username":"Zazz",
    "account_type":"user",
    "slug":"zazz",
    "avatar":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/55\/46\/9e\/3365d9e4b771e888ff11a710854dd0f3.jpg",
    "cover":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/60\/c5\/bd\/690d82af98a8067fa5467b171f1fc7d7.jpg",
    "url":"\/zazz",
    "followers_count":190,
    "is_featured":false,
    "is_verified":false,
    "is_partner":false,
    "is_private":false
  }],
  "lastMessage":{  
    "user_id":1,
    "post":"<p>Oh thanks man, I'll fix that in the morning <\/p>",
    "post_raw":"Oh thanks man, I'll fix that in the morning ",
    "post_filtered":"Oh thanks man, I'll fix that in the morning",
    "data":{  
      "key":"28286bb6ad901d9d7bee52d83db5325b"
    },
    "group_id":3021,
    "updated_at":"2016-04-24T17:13:27+0000",
    "created_at":"2016-04-24T17:13:27+0000",
    "id":4088352,
    "user":{  
      "id":1,
      "username":"maktouch",
      "account_type":"user",
      "slug":"maktouch",
      "avatar":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/69\/0c\/57\/3b0621d1672638929336e054347b46b7.jpg",
      "cover":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/54\/4d\/3e\/a0eb0439d51808d90259ff228b4b30bb.jpg",
      "url":"\/maktouch",
      "followers_count":1409,
      "is_featured":false,
      "is_verified":false,
      "is_partner":false,
      "is_private":false
    }
  }
}]```
* Message Groups Search - **To Do**
```[{  
  "id":3021,
  "name":"maktouch",
  "is_group":false,
  "created_at":"2014-10-06T18:47:23+0000",
  "updated_at":"2014-10-06T18:47:23+0000",
  "search_user_id":"1",
  "search_username":"maktouch",
  "url":"https:\/\/player.me\/me\/messaging\/3021",
  "image":"\/\/something.jpg",
  "private_with":1,
  "is_unread":false,
  "users":[{  
    "id":1,
    "username":"maktouch",
    "account_type":"user",
    "slug":"maktouch",
    "avatar":"\/\/something.jpg",
    "cover":"\/\/something.jpg",
    "url":"\/maktouch",
    "followers_count":1409,
    "is_featured":false,
    "is_verified":false,
    "is_partner":false,
    "is_private":false
  },{  
    "id":10027,
    "username":"Zazz",
    "account_type":"user",
    "slug":"zazz",
    "avatar":"\/\/something.jpg",
    "cover":"\/\/something.jpg",
    "url":"\/zazz",
    "followers_count":190,
    "is_featured":false,
    "is_verified":false,
    "is_partner":false,
    "is_private":false
  }],
  "lastMessage":{  
    "user_id":1,
    "post":"<p>Oh thanks man, I'll fix that in the morning <\/p>",
    "post_raw":"Oh thanks man, I'll fix that in the morning ",
    "post_filtered":"Oh thanks man, I'll fix that in the morning",
    "data":{  
      "key":"28286bb6ad901d9d7bee52d83db5325b"
    },
    "group_id":3021,
    "updated_at":"2016-04-24T17:13:27+0000",
    "created_at":"2016-04-24T17:13:27+0000",
    "id":4088352,
    "user":{  
      "id":1,
      "username":"maktouch",
      "account_type":"user",
      "slug":"maktouch",
      "avatar":"\/\/something.jpg",
      "cover":"\/\/something.jpg",
      "url":"\/maktouch",
      "followers_count":1409,
      "is_featured":false,
      "is_verified":false,
      "is_partner":false,
      "is_private":false
    }
  }
}]```
* Message Groups Entity - **Not Checked**
* Messages collection - **To Do**
```[{
  "id":4088352,
  "group_id":3021,
  "user_id":1,
  "post_filtered":"Oh thanks man, I'll fix that in the morning",
  "post_raw":"Oh thanks man, I'll fix that in the morning ",
  "post":"<p>Oh thanks man, I'll fix that in the morning <\/p>",
  "data":{  
    "key":"28286bb6ad901d9d7bee52d83db5325b"
  },
  "created_at":"2016-04-24T17:13:27+0000",
  "updated_at":"2016-04-24T17:13:27+0000",
  "deleted_at":null,
  "user":{  
    "id":1,
    "username":"maktouch",
    "account_type":"user",
    "slug":"maktouch",
    "avatar":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/69\/0c\/57\/3b0621d1672638929336e054347b46b7.jpg",
    "cover":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/54\/4d\/3e\/a0eb0439d51808d90259ff228b4b30bb.jpg",
    "url":"\/maktouch",
    "followers_count":1409,
    "is_featured":false,
    "is_verified":false,
    "is_partner":false,
    "is_private":false
  },
  "direction":"received"
},{  
  "id":4088298,
  "group_id":3021,
  "user_id":10027,
  "post_filtered":"Heya.",
  "post_raw":"Heya.",
  "post":"<p>Heya.<\/p>",
  "data":{  
    "key":"742747316"
  },
  "created_at":"2016-04-24T15:28:52+0000",
  "updated_at":"2016-04-24T15:28:52+0000",
  "deleted_at":null,
  "user":{  
    "id":10027,
    "username":"Zazz",
    "account_type":"user",
    "slug":"zazz",
    "avatar":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/avatar\/55\/46\/9e\/3365d9e4b771e888ff11a710854dd0f3.jpg",
    "cover":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/cache\/cover\/60\/c5\/bd\/690d82af98a8067fa5467b171f1fc7d7.jpg",
    "url":"\/zazz",
    "followers_count":190,
    "is_featured":false,
    "is_verified":false,
    "is_partner":false,
    "is_private":false
  },
  "direction":"sent"
}]```
* Messaging notifications - **Not checked**

## [Search and Browse](http://docs.playerme.apiary.io/#reference/search-and-browse)
* Global Search - **Not checked**
```[{  
  "id":10473,
  "username":"Battlechili1",
  "account_type":"user",
  "slug":"battlechili1",
  "avatar":"\/\/something.jpg",
  "cover":"\/\/something.jpg",
  "url":"\/battlechili1",
  "followers_count":87,
  "is_featured":false,
  "is_verified":false,
  "is_partner":false,
  "is_private":false,
  "browse_type":"user",
  "is_followed":false,
  "is_following":false,
  "can_message":true,
  "is_current_user":false,
  "short_description":"Yo!",
  "show_long":false,
  "latest_followers":[]
},{  
  "popular_score":57,
  "favourites_count":7,
  "description":null,
  "created_at":"2013-12-18T14:04:24+0000",
  "box":{  
    "original":"\/\/something.png",
    "cached":"\/\/something.jpg",
    "original_filename":"something.png"
  },
  "released_at":"2005-10-24",
  "title":"Battlefield 2: Modern Combat",
  "url":"\/g\/battlefield-2-modern-combat",
  "cover":{
    "original":"\/\/d1zqrvc06emslq.cloudfront.net\/media\/originals\/gamecover\/4e\/cf\/69\/",
    "cached":"\/\/d1zqrvc06emslq.cloudfront.net\/assets\/img\/cover_random1.jpg",
    "original_filename":null
  },
  "likes_count":57,
  "updated_at":"2016-04-03T00:10:55+0000",
  "alias":"BF2:MC",
  "id":711,
  "slug":"battlefield-2-modern-combat",
  "is_featured":false,
  "short_description":null,
  "browse_type":"game",
  "show_long":false,
  "is_liked":true,
  "tags":[
    "likes",
    "owned"
  ],
  "is_tagged":true
}]```

## [Game Library](http://docs.playerme.apiary.io/#reference/game-library)
* Game Tags Collection - **Not checked**
* Game Tags Entity - **Not checked**
* Game Tags' Game Collection - **Not checked**
* Game Tags' Game Entity - **Not checked**
* Current User tags for a specific game - **Not checked**

## [Social Connections](http://docs.playerme.apiary.io/#reference/social-connections)
* Facebook - **Not checked**

## [Misc.](http://docs.playerme.apiary.io/#reference/misc.)
* Support - **Not checked**

## [Realtime](http://docs.playerme.apiary.io/#reference/realtime)
* OAuth - **Not checked**
* Current User - **Not checked**
* Test - **Not checked**
* Rooms - **Not checked**
