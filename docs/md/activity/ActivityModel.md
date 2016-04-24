<a name="ActivityModel"></a>

## ActivityModel
A model representing a Player.me Activity.

**Kind**: global class  

* [ActivityModel](#ActivityModel)
    * [new ActivityModel([obj])](#new_ActivityModel_new)
    * [.id](#ActivityModel+id) ⇒ <code>number</code>
    * [.resourceId](#ActivityModel+resourceId) ⇒ <code>number</code>
    * [.type](#ActivityModel+type) ⇒ <code>string</code>
    * [.user](#ActivityModel+user) ⇒ <code>UserModel</code>
    * [.source](#ActivityModel+source) ⇒ <code>string</code>
    * [.sourceUrl](#ActivityModel+sourceUrl) ⇒ <code>string</code>
    * [.url](#ActivityModel+url) ⇒ <code>string</code>
    * [.fullUrl](#ActivityModel+fullUrl) ⇒ <code>string</code>
    * [.publishedAt](#ActivityModel+publishedAt) ⇒ <code>Date</code>
    * [.createdAt](#ActivityModel+createdAt) ⇒ <code>Date</code>
    * [.updatedAt](#ActivityModel+updatedAt) ⇒ <code>Date</code>
    * [.editedAt](#ActivityModel+editedAt) ⇒ <code>Date</code> &#124; <code>null</code>
    * [.isSubscribed](#ActivityModel+isSubscribed) ⇒ <code>boolean</code>
    * [.showEdit](#ActivityModel+showEdit) ⇒ <code>boolean</code>
    * [.showDelete](#ActivityModel+showDelete) ⇒ <code>boolean</code>
    * [.userIsHidden](#ActivityModel+userIsHidden) ⇒ <code>boolean</code>
    * [.userIsBlocked](#ActivityModel+userIsBlocked) ⇒ <code>boolean</code>
    * [.userIsFollowed](#ActivityModel+userIsFollowed) ⇒ <code>boolean</code>
    * [.isOwnActivity](#ActivityModel+isOwnActivity) ⇒ <code>boolean</code>
    * [.hasLiked](#ActivityModel+hasLiked) ⇒ <code>boolean</code>
    * [.likesCount](#ActivityModel+likesCount) ⇒ <code>number</code>
    * [.hasPinned](#ActivityModel+hasPinned) ⇒ <code>boolean</code>
    * [.pinsCount](#ActivityModel+pinsCount) ⇒ <code>number</code>
    * [.hasShared](#ActivityModel+hasShared) ⇒ <code>boolean</code>
    * [.shareCount](#ActivityModel+shareCount) ⇒ <code>number</code>
    * [.commentsCount](#ActivityModel+commentsCount) ⇒ <code>number</code>
    * [.comments](#ActivityModel+comments) ⇒ <code>Array.&lt;CommentModel&gt;</code>
    * [.post](#ActivityModel+post) ⇒ <code>ActivityPostData</code> &#124; <code>null</code>
    * [.video](#ActivityModel+video) ⇒ <code>ActivityVideoData</code> &#124; <code>null</code>
    * [.isVideo()](#ActivityModel+isVideo) ⇒ <code>boolean</code>
    * [.isPost()](#ActivityModel+isPost) ⇒ <code>boolean</code>
    * [.isFromYoutube()](#ActivityModel+isFromYoutube) ⇒ <code>boolean</code>
    * [.isFromTwitch()](#ActivityModel+isFromTwitch) ⇒ <code>boolean</code>
    * [.isFromPlayer()](#ActivityModel+isFromPlayer) ⇒ <code>boolean</code>
    * [.hasAllComments()](#ActivityModel+hasAllComments) ⇒ <code>boolean</code>
    * [._getCommentIndex(commentId)](#ActivityModel+_getCommentIndex) ⇒ <code>number</code> ℗
    * [.addComment(comment)](#ActivityModel+addComment)
    * [.updateComment(comment)](#ActivityModel+updateComment) ⇒ <code>boolean</code>
    * [.removeComment(commentId)](#ActivityModel+removeComment) ⇒ <code>boolean</code>
    * [.addCommentsToStart(comments)](#ActivityModel+addCommentsToStart)

<a name="new_ActivityModel_new"></a>

### new ActivityModel([obj])
Create a new Activity model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="ActivityModel+id"></a>

### activityModel.id ⇒ <code>number</code>
The activity's ID number.

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+resourceId"></a>

### activityModel.resourceId ⇒ <code>number</code>
TODO What is this?

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+type"></a>

### activityModel.type ⇒ <code>string</code>
The type of activity (i.e. "Video" or "Post")

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+user"></a>

### activityModel.user ⇒ <code>UserModel</code>
The user that posted this Activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+source"></a>

### activityModel.source ⇒ <code>string</code>
Where the Activity came from (i.e. "youtube", "twitch" or "player")

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+sourceUrl"></a>

### activityModel.sourceUrl ⇒ <code>string</code>
The URL where this activity originated

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+url"></a>

### activityModel.url ⇒ <code>string</code>
The partial URL where this activity is located on player

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+fullUrl"></a>

### activityModel.fullUrl ⇒ <code>string</code>
The full URL where this activity is located on player

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+publishedAt"></a>

### activityModel.publishedAt ⇒ <code>Date</code>
The date this activity was published

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+createdAt"></a>

### activityModel.createdAt ⇒ <code>Date</code>
The date this activity row was created

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+updatedAt"></a>

### activityModel.updatedAt ⇒ <code>Date</code>
The date this activity row was updated

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+editedAt"></a>

### activityModel.editedAt ⇒ <code>Date</code> &#124; <code>null</code>
The date this activity was edited, or null if never

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+isSubscribed"></a>

### activityModel.isSubscribed ⇒ <code>boolean</code>
If the current user has subscribed to this activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+showEdit"></a>

### activityModel.showEdit ⇒ <code>boolean</code>
If the user can edit this activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+showDelete"></a>

### activityModel.showDelete ⇒ <code>boolean</code>
If the user can delete this activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+userIsHidden"></a>

### activityModel.userIsHidden ⇒ <code>boolean</code>
If the user has hidden the author

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+userIsBlocked"></a>

### activityModel.userIsBlocked ⇒ <code>boolean</code>
If the user has blocked the author

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+userIsFollowed"></a>

### activityModel.userIsFollowed ⇒ <code>boolean</code>
If the user is following the author

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+isOwnActivity"></a>

### activityModel.isOwnActivity ⇒ <code>boolean</code>
If the user is the author

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+hasLiked"></a>

### activityModel.hasLiked ⇒ <code>boolean</code>
If the user has liked this activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+likesCount"></a>

### activityModel.likesCount ⇒ <code>number</code>
The number of likes this activity has received

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+hasPinned"></a>

### activityModel.hasPinned ⇒ <code>boolean</code>
If the user has pinned this activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+pinsCount"></a>

### activityModel.pinsCount ⇒ <code>number</code>
The number of pins this activity has received

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+hasShared"></a>

### activityModel.hasShared ⇒ <code>boolean</code>
If the user has shared this activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+shareCount"></a>

### activityModel.shareCount ⇒ <code>number</code>
The number of shares this activity has received

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+commentsCount"></a>

### activityModel.commentsCount ⇒ <code>number</code>
The total number of comments on this activity

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+comments"></a>

### activityModel.comments ⇒ <code>Array.&lt;CommentModel&gt;</code>
An array of comments the client has loaded

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+post"></a>

### activityModel.post ⇒ <code>ActivityPostData</code> &#124; <code>null</code>
Data about the post, if this Activity is the right type

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+video"></a>

### activityModel.video ⇒ <code>ActivityVideoData</code> &#124; <code>null</code>
Data about the video, if this Activity is the right type

**Kind**: instance property of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+isVideo"></a>

### activityModel.isVideo() ⇒ <code>boolean</code>
True if this Activity's type is a Video

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
<a name="ActivityModel+isPost"></a>

### activityModel.isPost() ⇒ <code>boolean</code>
True if this Activity's type is a Post

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
<a name="ActivityModel+isFromYoutube"></a>

### activityModel.isFromYoutube() ⇒ <code>boolean</code>
True if this Activity's source is YouTube

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
<a name="ActivityModel+isFromTwitch"></a>

### activityModel.isFromTwitch() ⇒ <code>boolean</code>
True if this Activity's source is Twitch

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
<a name="ActivityModel+isFromPlayer"></a>

### activityModel.isFromPlayer() ⇒ <code>boolean</code>
True if this Activity's source is Player.me

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
<a name="ActivityModel+hasAllComments"></a>

### activityModel.hasAllComments() ⇒ <code>boolean</code>
If the client has loaded all this activity's comments

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
**Read only**: true  
<a name="ActivityModel+_getCommentIndex"></a>

### activityModel._getCommentIndex(commentId) ⇒ <code>number</code> ℗
Get the comment's index by its ID

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
**Access:** private  

| Param |
| --- |
| commentId | 

<a name="ActivityModel+addComment"></a>

### activityModel.addComment(comment)
Add a comment to this activity

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  

| Param | Type |
| --- | --- |
| comment | <code>CommentModel</code> | 

<a name="ActivityModel+updateComment"></a>

### activityModel.updateComment(comment) ⇒ <code>boolean</code>
Override this activity's copy of a comment

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
**Returns**: <code>boolean</code> - If there was an original to replace  

| Param | Type |
| --- | --- |
| comment | <code>CommentModel</code> | 

<a name="ActivityModel+removeComment"></a>

### activityModel.removeComment(commentId) ⇒ <code>boolean</code>
Remove the comment

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  
**Returns**: <code>boolean</code> - If there was a comment to remove  

| Param | Type |
| --- | --- |
| commentId | <code>number</code> | 

<a name="ActivityModel+addCommentsToStart"></a>

### activityModel.addCommentsToStart(comments)
Add comments to the start of the list, such as earlier comments.

**Kind**: instance method of <code>[ActivityModel](#ActivityModel)</code>  

| Param | Type |
| --- | --- |
| comments | <code>Array.&lt;CommentModel&gt;</code> | 

