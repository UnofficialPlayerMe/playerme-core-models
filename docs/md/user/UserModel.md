<a name="UserModel"></a>

## UserModel
A model representing a Player.me User.

**Kind**: global class  

* [UserModel](#UserModel)
    * [new UserModel([obj])](#new_UserModel_new)
    * [.id](#UserModel+id) ⇒ <code>number</code>
    * [.username](#UserModel+username) ⇒ <code>string</code>
    * [.accountType](#UserModel+accountType) ⇒ <code>string</code>
    * [.slug](#UserModel+slug) ⇒ <code>string</code>
    * [.avatar](#UserModel+avatar) ⇒ <code>string</code>
    * [.cover](#UserModel+cover) ⇒ <code>string</code>
    * [.url](#UserModel+url) ⇒ <code>string</code>
    * [.followersCount](#UserModel+followersCount) ⇒ <code>number</code>
    * [.isFeatured](#UserModel+isFeatured) ⇒ <code>boolean</code>
    * [.isVerified](#UserModel+isVerified) ⇒ <code>boolean</code>
    * [.isPartner](#UserModel+isPartner) ⇒ <code>boolean</code>
    * [.isPrivate](#UserModel+isPrivate) ⇒ <code>boolean</code>
    * [.isUser()](#UserModel+isUser) ⇒ <code>boolean</code>
    * [.isGroup()](#UserModel+isGroup) ⇒ <code>boolean</code>

<a name="new_UserModel_new"></a>

### new UserModel([obj])
Create a new User model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="UserModel+id"></a>

### userModel.id ⇒ <code>number</code>
The user's ID.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+username"></a>

### userModel.username ⇒ <code>string</code>
The user's username.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+accountType"></a>

### userModel.accountType ⇒ <code>string</code>
The type of account.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+slug"></a>

### userModel.slug ⇒ <code>string</code>
The URL-friendly version of the user's name.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+avatar"></a>

### userModel.avatar ⇒ <code>string</code>
The URL of the user's avatar.
Player provides a default.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+cover"></a>

### userModel.cover ⇒ <code>string</code>
The URL to the user's profile cover image.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+url"></a>

### userModel.url ⇒ <code>string</code>
A relative URL to the user's profile

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+followersCount"></a>

### userModel.followersCount ⇒ <code>number</code>
The number of followers the user has.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+isFeatured"></a>

### userModel.isFeatured ⇒ <code>boolean</code>
Whether Player.me has listed this as a featured user.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+isVerified"></a>

### userModel.isVerified ⇒ <code>boolean</code>
Whether Player.me has verified this user.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+isPartner"></a>

### userModel.isPartner ⇒ <code>boolean</code>
Whether this is a Player.me staff member or partner.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+isPrivate"></a>

### userModel.isPrivate ⇒ <code>boolean</code>
Whether this is a private user.

**Kind**: instance property of <code>[UserModel](#UserModel)</code>  
**Read only**: true  
<a name="UserModel+isUser"></a>

### userModel.isUser() ⇒ <code>boolean</code>
Whether the account is for a normal user

**Kind**: instance method of <code>[UserModel](#UserModel)</code>  
<a name="UserModel+isGroup"></a>

### userModel.isGroup() ⇒ <code>boolean</code>
Whether the account is for a group

**Kind**: instance method of <code>[UserModel](#UserModel)</code>  
