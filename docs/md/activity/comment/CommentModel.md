<a name="CommentModel"></a>

## CommentModel
A model representing a Player.me Comment.

**Kind**: global class  

* [CommentModel](#CommentModel)
    * [new CommentModel([obj])](#new_CommentModel_new)
    * [.id](#CommentModel+id) ⇒ <code>number</code>
    * [.userId](#CommentModel+userId) ⇒ <code>number</code>
    * [.activity_user_id](#CommentModel+activity_user_id) ⇒ <code>number</code>
    * [.activityId](#CommentModel+activityId) ⇒ <code>number</code>
    * [.post](#CommentModel+post) ⇒ <code>string</code>
    * [.postRaw](#CommentModel+postRaw) ⇒ <code>string</code>
    * [.metas](#CommentModel+metas) ⇒ <code>Array</code>
    * [.createdAt](#CommentModel+createdAt) ⇒ <code>Date</code>
    * [.updatedAt](#CommentModel+updatedAt) ⇒ <code>Date</code>
    * [.editedAt](#CommentModel+editedAt) ⇒ <code>Date</code>
    * [.deletedAt](#CommentModel+deletedAt) ⇒ <code>Date</code>
    * [.userIsBlocked](#CommentModel+userIsBlocked) ⇒ <code>boolean</code>
    * [.user](#CommentModel+user) ⇒ <code>UserModel</code>
    * [.hasLiked](#CommentModel+hasLiked) ⇒ <code>boolean</code>
    * [.url](#CommentModel+url) ⇒ <code>string</code>
    * [.showDelete](#CommentModel+showDelete) ⇒ <code>boolean</code>
    * [.showEdit](#CommentModel+showEdit) ⇒ <code>boolean</code>
    * [.isOwnComment](#CommentModel+isOwnComment) ⇒ <code>boolean</code>
    * [.likesCount](#CommentModel+likesCount) ⇒ <code>number</code>
    * [.like(bool)](#CommentModel+like)

<a name="new_CommentModel_new"></a>

### new CommentModel([obj])
Create a new Comment model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="CommentModel+id"></a>

### commentModel.id ⇒ <code>number</code>
The comment's ID number.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+userId"></a>

### commentModel.userId ⇒ <code>number</code>
The ID of the user that posted the comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+activity_user_id"></a>

### commentModel.activity_user_id ⇒ <code>number</code>
The ID of the original poster.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+activityId"></a>

### commentModel.activityId ⇒ <code>number</code>
The ID of the activity this comment is on.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+post"></a>

### commentModel.post ⇒ <code>string</code>
The display text for the comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+postRaw"></a>

### commentModel.postRaw ⇒ <code>string</code>
The entered text for the comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+metas"></a>

### commentModel.metas ⇒ <code>Array</code>
Metadata associated with this comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+createdAt"></a>

### commentModel.createdAt ⇒ <code>Date</code>
The date and time the comment was created on.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+updatedAt"></a>

### commentModel.updatedAt ⇒ <code>Date</code>
The date and time the comment was last updated on.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+editedAt"></a>

### commentModel.editedAt ⇒ <code>Date</code>
The date and time the comment was last edited by the user on (or null).

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+deletedAt"></a>

### commentModel.deletedAt ⇒ <code>Date</code>
The date and time the comment was soft deleted on (or null).

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+userIsBlocked"></a>

### commentModel.userIsBlocked ⇒ <code>boolean</code>
If the current user has blocked the user that wrote this comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+user"></a>

### commentModel.user ⇒ <code>UserModel</code>
The user that posted the comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+hasLiked"></a>

### commentModel.hasLiked ⇒ <code>boolean</code>
Whether the logged in user has liked this comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+url"></a>

### commentModel.url ⇒ <code>string</code>
The full URL to this post on the main player.me site.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+showDelete"></a>

### commentModel.showDelete ⇒ <code>boolean</code>
Whether the logged in user is able to delete this comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+showEdit"></a>

### commentModel.showEdit ⇒ <code>boolean</code>
Whether the logged in user is able to edit this comment.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+isOwnComment"></a>

### commentModel.isOwnComment ⇒ <code>boolean</code>
Whether this comment belongs to the logged in user.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+likesCount"></a>

### commentModel.likesCount ⇒ <code>number</code>
The number of likes this comment has.

**Kind**: instance property of <code>[CommentModel](#CommentModel)</code>  
**Read only**: true  
<a name="CommentModel+like"></a>

### commentModel.like(bool)
Like the comment and update likesCount.

**Kind**: instance method of <code>[CommentModel](#CommentModel)</code>  

| Param | Default |
| --- | --- |
| bool | <code>true</code> | 

