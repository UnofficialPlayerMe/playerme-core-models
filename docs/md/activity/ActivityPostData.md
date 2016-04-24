## Classes

<dl>
<dt><a href="#ActivityPostData">ActivityPostData</a></dt>
<dd><p>The main content of a Post</p>
</dd>
<dt><a href="#ActivityPostMetaData">ActivityPostMetaData</a></dt>
<dd><p>Metadata associated with a Post</p>
</dd>
</dl>

<a name="ActivityPostData"></a>

## ActivityPostData
The main content of a Post

**Kind**: global class  

* [ActivityPostData](#ActivityPostData)
    * [new ActivityPostData([obj])](#new_ActivityPostData_new)
    * [.post](#ActivityPostData+post) ⇒ <code>string</code>
    * [.postRaw](#ActivityPostData+postRaw) ⇒ <code>string</code>
    * [.meta](#ActivityPostData+meta) ⇒ <code>[Array.&lt;ActivityPostMetaData&gt;](#ActivityPostMetaData)</code>
    * [.game](#ActivityPostData+game) ⇒ <code>GameModel</code> &#124; <code>null</code>
    * [.gameCheckInType](#ActivityPostData+gameCheckInType) ⇒ <code>string</code> &#124; <code>null</code>
    * [.isPlayingGame()](#ActivityPostData+isPlayingGame) ⇒ <code>boolean</code>

<a name="new_ActivityPostData_new"></a>

### new ActivityPostData([obj])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>object</code> | <code></code> | Part of a player response object to initialise this instance with. |

<a name="ActivityPostData+post"></a>

### activityPostData.post ⇒ <code>string</code>
The post's formatted text

**Kind**: instance property of <code>[ActivityPostData](#ActivityPostData)</code>  
**Read only**: true  
<a name="ActivityPostData+postRaw"></a>

### activityPostData.postRaw ⇒ <code>string</code>
The post's un-formatted text

**Kind**: instance property of <code>[ActivityPostData](#ActivityPostData)</code>  
**Read only**: true  
<a name="ActivityPostData+meta"></a>

### activityPostData.meta ⇒ <code>[Array.&lt;ActivityPostMetaData&gt;](#ActivityPostMetaData)</code>
The post's related content

**Kind**: instance property of <code>[ActivityPostData](#ActivityPostData)</code>  
**Read only**: true  
<a name="ActivityPostData+game"></a>

### activityPostData.game ⇒ <code>GameModel</code> &#124; <code>null</code>
The game that has been checked in, if any

**Kind**: instance property of <code>[ActivityPostData](#ActivityPostData)</code>  
**Read only**: true  
<a name="ActivityPostData+gameCheckInType"></a>

### activityPostData.gameCheckInType ⇒ <code>string</code> &#124; <code>null</code>
The type of check-in for the game, if any (e.g. "playing")
TODO Find other types

**Kind**: instance property of <code>[ActivityPostData](#ActivityPostData)</code>  
**Read only**: true  
<a name="ActivityPostData+isPlayingGame"></a>

### activityPostData.isPlayingGame() ⇒ <code>boolean</code>
If the post says the author is playing a game

**Kind**: instance method of <code>[ActivityPostData](#ActivityPostData)</code>  
<a name="ActivityPostMetaData"></a>

## ActivityPostMetaData
Metadata associated with a Post

**Kind**: global class  

* [ActivityPostMetaData](#ActivityPostMetaData)
    * [new ActivityPostMetaData([obj])](#new_ActivityPostMetaData_new)
    * [.content](#ActivityPostMetaData+content) ⇒ <code>string</code>
    * [.title](#ActivityPostMetaData+title) ⇒ <code>string</code> &#124; <code>null</code>
    * [.description](#ActivityPostMetaData+description) ⇒ <code>string</code> &#124; <code>null</code>
    * [.provider](#ActivityPostMetaData+provider) ⇒ <code>string</code>
    * [.isInternal](#ActivityPostMetaData+isInternal) ⇒ <code>boolean</code>
    * [.images](#ActivityPostMetaData+images) ⇒ <code>Array.&lt;string&gt;</code>
    * [.url](#ActivityPostMetaData+url) ⇒ <code>string</code>
    * [.thumbnail](#ActivityPostMetaData+thumbnail) ⇒ <code>string</code> &#124; <code>null</code>

<a name="new_ActivityPostMetaData_new"></a>

### new ActivityPostMetaData([obj])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>object</code> | <code></code> | Part of a player response object to initialise this instance with. |

<a name="ActivityPostMetaData+content"></a>

### activityPostMetaData.content ⇒ <code>string</code>
The meta's content type (i.e. "Photo")

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
<a name="ActivityPostMetaData+title"></a>

### activityPostMetaData.title ⇒ <code>string</code> &#124; <code>null</code>
The title of the metadata, if applicable

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
<a name="ActivityPostMetaData+description"></a>

### activityPostMetaData.description ⇒ <code>string</code> &#124; <code>null</code>
The description for the metadata, if applicable

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
<a name="ActivityPostMetaData+provider"></a>

### activityPostMetaData.provider ⇒ <code>string</code>
The provider for the metadata (e.g. "Player")

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
<a name="ActivityPostMetaData+isInternal"></a>

### activityPostMetaData.isInternal ⇒ <code>boolean</code>
TODO What is this?

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
<a name="ActivityPostMetaData+images"></a>

### activityPostMetaData.images ⇒ <code>Array.&lt;string&gt;</code>
A list of image URLs

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
<a name="ActivityPostMetaData+url"></a>

### activityPostMetaData.url ⇒ <code>string</code>
The link to the metadata

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
<a name="ActivityPostMetaData+thumbnail"></a>

### activityPostMetaData.thumbnail ⇒ <code>string</code> &#124; <code>null</code>
URL of the metadata's thumbnail

**Kind**: instance property of <code>[ActivityPostMetaData](#ActivityPostMetaData)</code>  
**Read only**: true  
