<a name="UserExtendedModel"></a>

## UserExtendedModel ⇐ <code>UserModel</code>
A model representing an extended data set for a Player.me User.

**Kind**: global class  
**Extends:** <code>UserModel</code>  

* [UserExtendedModel](#UserExtendedModel) ⇐ <code>UserModel</code>
    * [new UserExtendedModel([obj])](#new_UserExtendedModel_new)
    * [.shortDescription](#UserExtendedModel+shortDescription) ⇒ <code>string</code>
    * [.description](#UserExtendedModel+description) ⇒ <code>string</code>
    * [.descriptionHtml](#UserExtendedModel+descriptionHtml) ⇒ <code>string</code>
    * [.coverOriginal](#UserExtendedModel+coverOriginal) ⇒ <code>string</code>
    * [.coverOriginalFilename](#UserExtendedModel+coverOriginalFilename) ⇒ <code>string</code>
    * [.avatarOriginal](#UserExtendedModel+avatarOriginal) ⇒ <code>string</code>
    * [.avatarOriginalFilename](#UserExtendedModel+avatarOriginalFilename) ⇒ <code>string</code>
    * [.createdAt](#UserExtendedModel+createdAt) ⇒ <code>Date</code>
    * [.generatedBy](#UserExtendedModel+generatedBy) ⇒ <code>string</code>
    * [.isCurrentUser](#UserExtendedModel+isCurrentUser) ⇒ <code>boolean</code>
    * [.isFollowing](#UserExtendedModel+isFollowing) ⇒ <code>boolean</code>
    * [.isFollowed](#UserExtendedModel+isFollowed) ⇒ <code>boolean</code>
    * [.isFriend](#UserExtendedModel+isFriend) ⇒ <code>boolean</code>
    * [.isBlocked](#UserExtendedModel+isBlocked) ⇒ <code>boolean</code>
    * [.canMessage](#UserExtendedModel+canMessage) ⇒ <code>boolean</code>
    * [.isOnline](#UserExtendedModel+isOnline) ⇒ <code>boolean</code>
    * [.followingCount](#UserExtendedModel+followingCount) ⇒ <code>number</code>

<a name="new_UserExtendedModel_new"></a>

### new UserExtendedModel([obj])
Create a new extended User model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="UserExtendedModel+shortDescription"></a>

### userExtendedModel.shortDescription ⇒ <code>string</code>
The user's short bio.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+description"></a>

### userExtendedModel.description ⇒ <code>string</code>
The user's bio.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+descriptionHtml"></a>

### userExtendedModel.descriptionHtml ⇒ <code>string</code>
The user's bio in HTML.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+coverOriginal"></a>

### userExtendedModel.coverOriginal ⇒ <code>string</code>
The path to the original cover image.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+coverOriginalFilename"></a>

### userExtendedModel.coverOriginalFilename ⇒ <code>string</code>
The original cover image's filename.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+avatarOriginal"></a>

### userExtendedModel.avatarOriginal ⇒ <code>string</code>
The path to the original avatar.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+avatarOriginalFilename"></a>

### userExtendedModel.avatarOriginalFilename ⇒ <code>string</code>
The original avatar's filename.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+createdAt"></a>

### userExtendedModel.createdAt ⇒ <code>Date</code>
The date and time the user was created on.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+generatedBy"></a>

### userExtendedModel.generatedBy ⇒ <code>string</code>
TODO What is a user's generatedBy field?

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+isCurrentUser"></a>

### userExtendedModel.isCurrentUser ⇒ <code>boolean</code>
Whether this is the logged in user.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+isFollowing"></a>

### userExtendedModel.isFollowing ⇒ <code>boolean</code>
Whether this user is following the logged in user.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+isFollowed"></a>

### userExtendedModel.isFollowed ⇒ <code>boolean</code>
Whether the logged in user has followed this user.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+isFriend"></a>

### userExtendedModel.isFriend ⇒ <code>boolean</code>
Whether this and the logged in user are following each other.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+isBlocked"></a>

### userExtendedModel.isBlocked ⇒ <code>boolean</code>
Whether the logged in user has blocked this user.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+canMessage"></a>

### userExtendedModel.canMessage ⇒ <code>boolean</code>
Whether the logged in user can message this user.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+isOnline"></a>

### userExtendedModel.isOnline ⇒ <code>boolean</code>
Whether the user is logged in.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
<a name="UserExtendedModel+followingCount"></a>

### userExtendedModel.followingCount ⇒ <code>number</code>
The number of user's this user is following.

**Kind**: instance property of <code>[UserExtendedModel](#UserExtendedModel)</code>  
**Read only**: true  
