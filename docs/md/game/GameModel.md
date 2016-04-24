<a name="GameModel"></a>

## GameModel
A model representing a Player.me Game.

**Kind**: global class  

* [GameModel](#GameModel)
    * [new GameModel([obj])](#new_GameModel_new)
    * [.id](#GameModel+id) ⇒ <code>number</code>
    * [.title](#GameModel+title) ⇒ <code>string</code>
    * [.shortDescription](#GameModel+shortDescription) ⇒ <code>string</code>
    * [.cover](#GameModel+cover) ⇒ <code>string</code> &#124; <code>null</code>
    * [.coverOriginal](#GameModel+coverOriginal) ⇒ <code>string</code> &#124; <code>null</code>
    * [.coverOriginalFilename](#GameModel+coverOriginalFilename) ⇒ <code>string</code> &#124; <code>null</code>
    * [.boxCached](#GameModel+boxCached) ⇒ <code>string</code> &#124; <code>null</code>
    * [.boxOriginal](#GameModel+boxOriginal) ⇒ <code>string</code> &#124; <code>null</code>
    * [.boxOriginalFilename](#GameModel+boxOriginalFilename) ⇒ <code>string</code> &#124; <code>null</code>
    * [.slug](#GameModel+slug) ⇒ <code>string</code>
    * [.url](#GameModel+url) ⇒ <code>string</code>
    * [.likesCount](#GameModel+likesCount) ⇒ <code>number</code>
    * [.hasLiked](#GameModel+hasLiked) ⇒ <code>boolean</code>

<a name="new_GameModel_new"></a>

### new GameModel([obj])
Create a new Activity model.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [obj] | <code>Object</code> | <code></code> | A player response object to initialise this model with. |

<a name="GameModel+id"></a>

### gameModel.id ⇒ <code>number</code>
The game's ID number.

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+title"></a>

### gameModel.title ⇒ <code>string</code>
The game's title.

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+shortDescription"></a>

### gameModel.shortDescription ⇒ <code>string</code>
A short description of the game.

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+cover"></a>

### gameModel.cover ⇒ <code>string</code> &#124; <code>null</code>
The URL to the game's cover

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+coverOriginal"></a>

### gameModel.coverOriginal ⇒ <code>string</code> &#124; <code>null</code>
The original upload of the game's cover

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+coverOriginalFilename"></a>

### gameModel.coverOriginalFilename ⇒ <code>string</code> &#124; <code>null</code>
The original filename of the game's cover

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+boxCached"></a>

### gameModel.boxCached ⇒ <code>string</code> &#124; <code>null</code>
The URL to game's box

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+boxOriginal"></a>

### gameModel.boxOriginal ⇒ <code>string</code> &#124; <code>null</code>
The original upload of the game's box

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+boxOriginalFilename"></a>

### gameModel.boxOriginalFilename ⇒ <code>string</code> &#124; <code>null</code>
The original filename of the game's box

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+slug"></a>

### gameModel.slug ⇒ <code>string</code>
The URL friendly slug for the game

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+url"></a>

### gameModel.url ⇒ <code>string</code>
The link to the game's page on player

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+likesCount"></a>

### gameModel.likesCount ⇒ <code>number</code>
The number of likes the game has received

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
<a name="GameModel+hasLiked"></a>

### gameModel.hasLiked ⇒ <code>boolean</code>
If the player has liked the game

**Kind**: instance property of <code>[GameModel](#GameModel)</code>  
**Read only**: true  
