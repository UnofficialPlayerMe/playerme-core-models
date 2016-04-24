## Classes

<dl>
<dt><a href="#GameExtendedModel">GameExtendedModel</a></dt>
<dd><p>A model representing an extended Player.me Game.</p>
</dd>
<dt><a href="#GamePlatform">GamePlatform</a></dt>
<dd></dd>
<dt><a href="#GameCompany">GameCompany</a></dt>
<dd></dd>
</dl>

<a name="GameExtendedModel"></a>

## GameExtendedModel
A model representing an extended Player.me Game.

**Kind**: global class  

* [GameExtendedModel](#GameExtendedModel)
    * [new GameExtendedModel([obj])](#new_GameExtendedModel_new)
    * [.description](#GameExtendedModel+description) ⇒ <code>string</code>
    * [.displaySource](#GameExtendedModel+displaySource) ⇒ <code>boolean</code>
    * [.releasedAt](#GameExtendedModel+releasedAt) ⇒ <code>Date</code> &#124; <code>null</code>
    * [.steamId](#GameExtendedModel+steamId) ⇒ <code>number</code>
    * [.xbox360Id](#GameExtendedModel+xbox360Id) ⇒ <code>number</code>
    * [.xboxoneId](#GameExtendedModel+xboxoneId) ⇒ <code>number</code>
    * [.createdAt](#GameExtendedModel+createdAt) ⇒ <code>Date</code>
    * [.updatedAt](#GameExtendedModel+updatedAt) ⇒ <code>Date</code>
    * [.deletedAt](#GameExtendedModel+deletedAt) ⇒ <code>Date</code> &#124; <code>null</code>
    * [.coverBy](#GameExtendedModel+coverBy) ⇒ <code>number</code>
    * [.alias](#GameExtendedModel+alias) ⇒ <code>null</code>
    * [.website](#GameExtendedModel+website) ⇒ <code>string</code>
    * [.facebook](#GameExtendedModel+facebook) ⇒ <code>string</code>
    * [.twitter](#GameExtendedModel+twitter) ⇒ <code>string</code>
    * [.gplus](#GameExtendedModel+gplus) ⇒ <code>string</code>
    * [.steam](#GameExtendedModel+steam) ⇒ <code>string</code>
    * [.twitch](#GameExtendedModel+twitch) ⇒ <code>string</code>
    * [.youtube](#GameExtendedModel+youtube) ⇒ <code>string</code>
    * [.buyLink](#GameExtendedModel+buyLink) ⇒ <code>string</code>
    * [.kickstarter](#GameExtendedModel+kickstarter) ⇒ <code>string</code>
    * [.platforms](#GameExtendedModel+platforms) ⇒ <code>[Array.&lt;GamePlatform&gt;](#GamePlatform)</code>
    * [.favouritesCount](#GameExtendedModel+favouritesCount) ⇒ <code>number</code>
    * [.developers](#GameExtendedModel+developers) ⇒ <code>[Array.&lt;GameCompany&gt;](#GameCompany)</code>
    * [.publishers](#GameExtendedModel+publishers) ⇒ <code>[Array.&lt;GameCompany&gt;](#GameCompany)</code>

<a name="new_GameExtendedModel_new"></a>

### new GameExtendedModel([obj])
Create a new Activity model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="GameExtendedModel+description"></a>

### gameExtendedModel.description ⇒ <code>string</code>
A description of the game.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+displaySource"></a>

### gameExtendedModel.displaySource ⇒ <code>boolean</code>
TODO What's this?

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+releasedAt"></a>

### gameExtendedModel.releasedAt ⇒ <code>Date</code> &#124; <code>null</code>
The date the game was released.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+steamId"></a>

### gameExtendedModel.steamId ⇒ <code>number</code>
The game's steam ID.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+xbox360Id"></a>

### gameExtendedModel.xbox360Id ⇒ <code>number</code>
The game's XBox 360 ID.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+xboxoneId"></a>

### gameExtendedModel.xboxoneId ⇒ <code>number</code>
The game's XBox One ID.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+createdAt"></a>

### gameExtendedModel.createdAt ⇒ <code>Date</code>
The date the game's entry was created.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+updatedAt"></a>

### gameExtendedModel.updatedAt ⇒ <code>Date</code>
The date the game's entry was last updated.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+deletedAt"></a>

### gameExtendedModel.deletedAt ⇒ <code>Date</code> &#124; <code>null</code>
The date the game's entry was deleted.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+coverBy"></a>

### gameExtendedModel.coverBy ⇒ <code>number</code>
The ID of the user that added the cover.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+alias"></a>

### gameExtendedModel.alias ⇒ <code>null</code>
TODO What is this?

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+website"></a>

### gameExtendedModel.website ⇒ <code>string</code>
A link to the game's website

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+facebook"></a>

### gameExtendedModel.facebook ⇒ <code>string</code>
A link to the game's Facebook page

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+twitter"></a>

### gameExtendedModel.twitter ⇒ <code>string</code>
A link to the game's Twitter account

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+gplus"></a>

### gameExtendedModel.gplus ⇒ <code>string</code>
A link to the game's Google+ page

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+steam"></a>

### gameExtendedModel.steam ⇒ <code>string</code>
A link to the game's steam page

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+twitch"></a>

### gameExtendedModel.twitch ⇒ <code>string</code>
A link to the game's Twitch page

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+youtube"></a>

### gameExtendedModel.youtube ⇒ <code>string</code>
A link to the game's YouTube account

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+buyLink"></a>

### gameExtendedModel.buyLink ⇒ <code>string</code>
A link to the game's shop

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+kickstarter"></a>

### gameExtendedModel.kickstarter ⇒ <code>string</code>
A link to the game's Kickstarter campaign

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+platforms"></a>

### gameExtendedModel.platforms ⇒ <code>[Array.&lt;GamePlatform&gt;](#GamePlatform)</code>
A list of the game's platforms

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+favouritesCount"></a>

### gameExtendedModel.favouritesCount ⇒ <code>number</code>
The number of times the game has been favourited.

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+developers"></a>

### gameExtendedModel.developers ⇒ <code>[Array.&lt;GameCompany&gt;](#GameCompany)</code>
A list of the companies that developed the game

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GameExtendedModel+publishers"></a>

### gameExtendedModel.publishers ⇒ <code>[Array.&lt;GameCompany&gt;](#GameCompany)</code>
A list of the companies that published the game

**Kind**: instance property of <code>[GameExtendedModel](#GameExtendedModel)</code>  
**Read only**: true  
<a name="GamePlatform"></a>

## GamePlatform
**Kind**: global class  

* [GamePlatform](#GamePlatform)
    * [new GamePlatform([obj])](#new_GamePlatform_new)
    * [.id](#GamePlatform+id) ⇒ <code>number</code>
    * [.name](#GamePlatform+name) ⇒ <code>string</code>
    * [.order](#GamePlatform+order) ⇒ <code>string</code>
    * [.slug](#GamePlatform+slug) ⇒ <code>string</code>
    * [.slug](#GamePlatform+slug) ⇒ <code>string</code> &#124; <code>null</code>

<a name="new_GamePlatform_new"></a>

### new GamePlatform([obj])
Create a new Activity model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="GamePlatform+id"></a>

### gamePlatform.id ⇒ <code>number</code>
The platform's ID

**Kind**: instance property of <code>[GamePlatform](#GamePlatform)</code>  
**Read only**: true  
<a name="GamePlatform+name"></a>

### gamePlatform.name ⇒ <code>string</code>
The platform's name

**Kind**: instance property of <code>[GamePlatform](#GamePlatform)</code>  
**Read only**: true  
<a name="GamePlatform+order"></a>

### gamePlatform.order ⇒ <code>string</code>
TODO What is this?

**Kind**: instance property of <code>[GamePlatform](#GamePlatform)</code>  
**Read only**: true  
<a name="GamePlatform+slug"></a>

### gamePlatform.slug ⇒ <code>string</code>
The platform URL-friendly name

**Kind**: instance property of <code>[GamePlatform](#GamePlatform)</code>  
**Read only**: true  
<a name="GamePlatform+slug"></a>

### gamePlatform.slug ⇒ <code>string</code> &#124; <code>null</code>
TODO What is this for?

**Kind**: instance property of <code>[GamePlatform](#GamePlatform)</code>  
**Read only**: true  
<a name="GameCompany"></a>

## GameCompany
**Kind**: global class  

* [GameCompany](#GameCompany)
    * [new GameCompany([obj])](#new_GameCompany_new)
    * [.id](#GameCompany+id) ⇒ <code>number</code>
    * [.userId](#GameCompany+userId) ⇒ <code>number</code>
    * [.name](#GameCompany+name) ⇒ <code>string</code>
    * [.homepage](#GameCompany+homepage) ⇒ <code>string</code>
    * [.homepage](#GameCompany+homepage) ⇒ <code>string</code>
    * [.slug](#GameCompany+slug) ⇒ <code>string</code>
    * [.createdAt](#GameCompany+createdAt) ⇒ <code>Date</code>
    * [.updatedAt](#GameCompany+updatedAt) ⇒ <code>Date</code>
    * [.deletedAt](#GameCompany+deletedAt) ⇒ <code>Date</code> &#124; <code>null</code>

<a name="new_GameCompany_new"></a>

### new GameCompany([obj])
Create a new Activity model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="GameCompany+id"></a>

### gameCompany.id ⇒ <code>number</code>
The company's ID

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+userId"></a>

### gameCompany.userId ⇒ <code>number</code>
The ID of the company's user

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+name"></a>

### gameCompany.name ⇒ <code>string</code>
The company's name

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+homepage"></a>

### gameCompany.homepage ⇒ <code>string</code>
A description of the company

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+homepage"></a>

### gameCompany.homepage ⇒ <code>string</code>
The company's homepage

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+slug"></a>

### gameCompany.slug ⇒ <code>string</code>
The URL friendly name of the company

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+createdAt"></a>

### gameCompany.createdAt ⇒ <code>Date</code>
The date the game entry was created

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+updatedAt"></a>

### gameCompany.updatedAt ⇒ <code>Date</code>
The date the game entry was updated

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
<a name="GameCompany+deletedAt"></a>

### gameCompany.deletedAt ⇒ <code>Date</code> &#124; <code>null</code>
The date the game was deleted

**Kind**: instance property of <code>[GameCompany](#GameCompany)</code>  
**Read only**: true  
