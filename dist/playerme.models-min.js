var PlayerMe=PlayerMe||{};PlayerMe.models=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.GameExtendedModel=e.GameModel=e.ActivityModel=e.CommentModel=e.UserExtendedModel=e.UserModel=void 0;var r=n(1),u=i(r),s=n(2),o=i(s),a=n(3),l=i(a),c=n(5),h=i(c),_=n(9),d=i(_),f=n(10),g=i(f);e.UserModel=u["default"],e.UserExtendedModel=o["default"],e.CommentModel=l["default"],e.ActivityModel=h["default"],e.GameModel=d["default"],e.GameExtendedModel=g["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];n(this,t),this._id=e&&e.id||0,this._username=e&&e.username||"",this._accountType=e&&e.account_type||"",this._slug=e&&e.slug||"",this._avatar=e&&e.avatar||"",this._cover=e&&e.cover||"",this._url=e&&e.url||"",this._followersCount=e&&e.followers_count||0,this._isFeatured=e&&e.is_featured||!1,this._isVerified=e&&e.is_verified||!1,this._isPartner=e&&e.is_partner||!1,this._isPrivate=e&&e.is_private||!1}return i(t,[{key:"toString",value:function(){var t="[UserModel";return this._id&&(t+=" #"+this._id),this._slug&&(t+=' "'+this._slug+'"'),t+"]"}},{key:"isUser",value:function(){return"user"==this._accountType}},{key:"isGroup",value:function(){return"group"==this._accountType}},{key:"id",get:function(){return this._id}},{key:"username",get:function(){return this._username}},{key:"accountType",get:function(){return this._accountType}},{key:"slug",get:function(){return this._slug}},{key:"avatar",get:function(){return this._avatar}},{key:"cover",get:function(){return this._cover}},{key:"url",get:function(){return this._url}},{key:"followersCount",get:function(){return this._followersCount}},{key:"isFeatured",get:function(){return this._isFeatured}},{key:"isVerified",get:function(){return this._isVerified}},{key:"isPartner",get:function(){return this._isPartner}},{key:"isPrivate",get:function(){return this._isPrivate}}]),t}();e["default"]=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(1),l=i(a),c=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,e);var n=function(t){return t?new Date(t):null},i=u(this,Object.getPrototypeOf(e).call(this,t)),s=t&&t.cover||null,o=t&&t.avatar||null;return i._shortDescription=t&&t.short_description||"",i._description=t&&t.description||"",i._descriptionHtml=t&&t.descriptionHtml||"",i._coverOriginal=s&&s.original||"",i._coverCached=s&&s.cached||"",i._coverOriginalFilename=s&&s.original_filename||"",i._avatarOriginal=o&&o.original||"",i._avatarCached=o&&o.cached||"",i._avatarOriginalFilename=o&&o.original_filename||"",i._createdAt=t&&n(t.created_at)||"",i._generatedBy=t&&t.generated_by||null,i._isCurrentUser=t&&t.is_current_user||!1,i._isFollowing=t&&t.is_following||!1,i._isFollowed=t&&t.is_followed||!1,i._isFriend=t&&t.is_friend||!1,i._isBlocked=t&&t.is_blocked||!1,i._canMessage=t&&t.can_message||!1,i._isOnline=t&&t.is_online||!1,i._followingCount=t&&t.following_count||0,i._isConfirmedGroupMember=t&&t.is_confirmed_group_member||!1,i._canConfirmMembership=t&&t.can_confirm_membership||!1,i._canRemoveMembership=t&&t.can_remove_membership||!1,s&&(i._cover=s.cached),o&&(i._avatar=o.cached),i._createdAt=(i._createdAt?new Date(i._createdAt):!1)||null,i}return s(e,t),o(e,[{key:"toString",value:function(){var t="[UserExtendedModel";return this._id&&(t+=" #"+this._id),this._slug&&(t+=' "'+this._slug+'"'),t+"]"}},{key:"shortDescription",get:function(){return this._shortDescription}},{key:"description",get:function(){return this._description}},{key:"descriptionHtml",get:function(){return this._descriptionHtml}},{key:"coverOriginal",get:function(){return this._coverOriginal}},{key:"coverOriginalFilename",get:function(){return this._coverOriginalFilename}},{key:"avatarOriginal",get:function(){return this._avatarOriginal}},{key:"avatarOriginalFilename",get:function(){return this._avatarOriginalFilename}},{key:"createdAt",get:function(){return this._createdAt}},{key:"generatedBy",get:function(){return this._generatedBy}},{key:"isCurrentUser",get:function(){return this._isCurrentUser}},{key:"isFollowing",get:function(){return this._isFollowing}},{key:"isFollowed",get:function(){return this._isFollowed}},{key:"isFriend",get:function(){return this._isFriend}},{key:"isBlocked",get:function(){return this._isBlocked}},{key:"canMessage",get:function(){return this._canMessage}},{key:"isOnline",get:function(){return this._isOnline}},{key:"followingCount",get:function(){return this._followingCount}},{key:"isConfirmedGroupMember",get:function(){return this._isConfirmedGroupMember}},{key:"canConfirmMembership",get:function(){return this._canConfirmMembership}},{key:"canRemoveMembership",get:function(){return this._canRemoveMembership}}]),e}(l["default"]);e["default"]=c},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(4),o=i(s),a=n(1),l=i(a),c=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,t);var n=function(t){return t?new Date(t):null},i=e&&e.data||null;this._id=e&&e.id||0,this._userId=e&&e.user_id||0,this._activityUserId=e&&e.activity_user_id||0,this._activityId=e&&e.activity_id||0,this._post=i&&i.post||"",this._postRaw=i&&i.post_raw||"",this._metas=e&&e.metas.map(function(t){return new o["default"](t)})||[],this._createdAt=e&&n(e.created_at)||null,this._updatedAt=e&&n(e.updated_at)||null,this._editedAt=e&&n(e.edited_at)||null,this._deletedAt=e&&n(e.deleted_at)||null,this._user=e&&new l["default"](e.user)||null,this._userIsBlocked=e&&e.userIsBlocked||!1,this._hasLiked=e&&e.hasLiked||!1,this._url=e&&e.url||"",this._showDelete=e&&e.showDelete||!1,this._showEdit=e&&e.showEdit||!1,this._isOwnComment=e&&e.isOwnComment||!1,this._likesCount=e&&e.likesCount||0}return u(t,[{key:"toString",value:function(){var t="[ActivityModel";return this._id&&(t+=" #"+this._id),t+"]"}},{key:"like",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];t!=this._hasLiked&&(this._hasLiked=t,this._likesCount+=t?1:-1)}},{key:"id",get:function(){return this._id}},{key:"userId",get:function(){return this._userId}},{key:"activityUserId",get:function(){return this._activityUserId}},{key:"activityId",get:function(){return this._activityId}},{key:"post",get:function(){return this._post}},{key:"postRaw",get:function(){return this._postRaw}},{key:"metas",get:function(){return this._metas}},{key:"createdAt",get:function(){return this._createdAt}},{key:"updatedAt",get:function(){return this._updatedAt}},{key:"editedAt",get:function(){return this._editedAt}},{key:"deletedAt",get:function(){return this._deletedAt}},{key:"userIsBlocked",get:function(){return this._userIsBlocked}},{key:"user",get:function(){return this._user}},{key:"hasLiked",get:function(){return this._hasLiked}},{key:"url",get:function(){return this._url}},{key:"showDelete",get:function(){return this._showDelete}},{key:"showEdit",get:function(){return this._showEdit}},{key:"isOwnComment",get:function(){return this._isOwnComment}},{key:"likesCount",get:function(){return this._likesCount}}]),t}();e["default"]=c},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];n(this,t),this._images=e&&e.images||[],this._url=e&&e.url||"",this._title=e&&e.title||"",this._description=e&&e.description||"",this._provider=e&&e.provider||"",this._content=e&&e.content||"",this._isInternal=e&&e.isInternal||!1,this._thumbnail=e&&e.thumbnail||""}return i(t,[{key:"isPhoto",value:function(){return"photo"==this._content}},{key:"isVideo",value:function(){return"video"==this._content}},{key:"images",get:function(){return this._images}},{key:"url",get:function(){return this._url}},{key:"title",get:function(){return this._title}},{key:"description",get:function(){return this._description}},{key:"provider",get:function(){return this._provider}},{key:"content",get:function(){return this._content}},{key:"isInternal",get:function(){return this._isInternal}},{key:"thumbnail",get:function(){return this._thumbnail}}]),t}();e["default"]=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(1),o=i(s),a=n(3),l=i(a),c=n(6),h=i(c),_=n(8),d=i(_),f=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,t);var n=function(t){return t?new Date(t):null};this._id=e&&e.id||0,this._resourceId=e&&e.resource_id||0,this._type=e&&e.type||"",this._user=e&&new o["default"](e.user)||null,this._source=e&&e.source||"",this._sourceUrl=e&&e.sourceUrl||"",this._url=e&&e.url||"",this._fullUrl=e&&n(e.full_url)||"",this._publishedAt=e&&n(e.published_at)||null,this._createdAt=e&&n(e.created_at)||null,this._updatedAt=e&&n(e.updated_at)||null,this._editedAt=e&&n(e.edited_at)||null,this._isSubscribed=e&&e.isSubscribed||!1,this._showEdit=e&&e.showEdit||!1,this._showDelete=e&&e.showDelete||!1,this._userIsHidden=e&&e.userIsHidden||!1,this._userIsBlocked=e&&e.userIsBlocked||!1,this._userIsFollowed=e&&e.userIsFollowed||!1,this._isOwnActivity=e&&e.isOwnActivity||!1,this._hasPinned=e&&e.hasPinned||!1,this._pinsCount=e&&e.pinsCount||0,this._hasShared=e&&e.hasShared||!1,this._shareCount=e&&e.shareCount||0,this._commentsCount=e&&e.commentsCount||0,this._fullUrl=e&&e.fullUrl||"",this._hasLiked=e&&e.hasLiked||!1,this._likesCount=e&&e.likesCount||0,this._comments=[],e&&e.comments&&(this._comments=e.comments.map(function(t){return new l["default"](t)})),this._postData=null,this._videoData=null,e&&e.data&&(this.isPost()&&(this._postData=new h["default"](e.data)),this.isVideo()&&(this._videoData=new d["default"](e.data)))}return u(t,[{key:"toString",value:function(){var t="[ActivityModel";return this._id&&(t+=" #"+this._id),t+"]"}},{key:"isVideo",value:function(){return"video"==this._type}},{key:"isPost",value:function(){return"post"==this._type}},{key:"isFromYoutube",value:function(){return"youtube"==this.source}},{key:"isFromTwitch",value:function(){return"twitch"==this.source}},{key:"isFromPlayer",value:function(){return"player"==this.source}},{key:"hasAllComments",value:function(){return this._comments.length>=this._commentsCount}},{key:"_getCommentIndex",value:function(t){for(var e=0;e<this.comments.length;e++)if(this.comments[e].id==t)return e;return-1}},{key:"addComment",value:function(t){if(this.id!=t.activityId)throw"This comment doesn't belong to this activity";this.comments.push(t),this._commentsCount++}},{key:"updateComment",value:function(t){if(!t||!t.id)throw"Invalid comment to update on Activity "+this._id;var e=this._getCommentIndex(t.id);return 0>e?!1:(this.comments[e]=t,!0)}},{key:"removeComment",value:function(t){var e=this._getCommentIndex(t);return 0>e?!1:(this.comments.splice(e,1),!0)}},{key:"addCommentsToStart",value:function(t){if(!Array.isArray(t))throw"Earlier comments to add to Activity "+this._id+" wasn't an array";this._comments=this._comments?t.concat(this._comments):t}},{key:"id",get:function(){return this._id}},{key:"resourceId",get:function(){return this._resourceId}},{key:"type",get:function(){return this._type}},{key:"user",get:function(){return this._user}},{key:"source",get:function(){return this._source}},{key:"sourceUrl",get:function(){return this._sourceUrl}},{key:"url",get:function(){return this._url}},{key:"fullUrl",get:function(){return this._fullUrl}},{key:"publishedAt",get:function(){return this._publishedAt}},{key:"createdAt",get:function(){return this._createdAt}},{key:"updatedAt",get:function(){return this._updatedAt}},{key:"editedAt",get:function(){return this._editedAt}},{key:"isSubscribed",get:function(){return this._isSubscribed}},{key:"showEdit",get:function(){return this._showEdit}},{key:"showDelete",get:function(){return this._showDelete}},{key:"userIsHidden",get:function(){return this._userIsHidden}},{key:"userIsBlocked",get:function(){return this._userIsBlocked}},{key:"userIsFollowed",get:function(){return this._userIsFollowed}},{key:"isOwnActivity",get:function(){return this._isOwnActivity}},{key:"hasLiked",get:function(){return this._hasLiked}},{key:"likesCount",get:function(){return this._likesCount}},{key:"hasPinned",get:function(){return this._hasPinned}},{key:"pinsCount",get:function(){return this._pinsCount}},{key:"hasShared",get:function(){return this._hasShared}},{key:"shareCount",get:function(){return this._shareCount}},{key:"commentsCount",get:function(){return this._commentsCount}},{key:"comments",get:function(){return this._comments}},{key:"post",get:function(){return this._postData}},{key:"video",get:function(){return this._videoData}}]),t}();e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.ActivityPostMetaData=e["default"]=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(7),o=i(s),a=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,t);var n=e&&e.game||!1;this._post=e&&e.post||"",this._postRaw=e&&e.post_raw||"",this._metas=e&&e.metas.map(function(t){return new l(t)})||[],this._game=n&&new o["default"](e.game)||null,this._gameCheckInType=n&&n.check_in_type||null}return u(t,[{key:"isPlayingGame",value:function(){return"playing"==this._gameCheckInType}},{key:"post",get:function(){return this._post}},{key:"postRaw",get:function(){return this._postRaw}},{key:"metas",get:function(){return this._metas}},{key:"game",get:function(){return this._game}},{key:"gameCheckInType",get:function(){return this._gameCheckInType}}]),t}(),l=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,t),this._content=e&&e.content||"",this._title=e&&e.title||null,this._description=e&&e.description||null,this._provider=e&&e.provider||"",this._isInternal=e&&e.isInternal||!1,this._images=e&&e.images||[],this._url=e&&e.url||"",this._thumbnail=e&&e.thumbnail||null}return u(t,[{key:"content",get:function(){return this._content}},{key:"title",get:function(){return this._title}},{key:"description",get:function(){return this._description}},{key:"provider",get:function(){return this._provider}},{key:"isInternal",get:function(){return this._isInternal}},{key:"images",get:function(){return this._images}},{key:"url",get:function(){return this._url}},{key:"thumbnail",get:function(){return this._thumbnail}}]),t}();e["default"]=a,e.ActivityPostMetaData=l},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];n(this,t);var i=e&&e.cover||null,r=e&&e.box||null;this._id=e&&e.id||0,this._title=e&&e.title||"",this._shortDescription=e&&e.short_description||"",this._coverCached=i&&i.cached||null,this._coverOriginal=i&&i.original||null,this._coverOriginalFilename=i&&i.original_filename||null,this._boxCached=r&&r.cached||null,this._boxOriginal=r&&r.original||null,this._boxOriginalFilename=r&&r.original_filename||null,this._slug=e&&e.slug||"",this._url=e&&e.url||"",this._likesCount=e&&e.likes_count||0,this._hasLiked=e&&e.has_liked||!1}return i(t,[{key:"toString",value:function(){var t="[GameMetadataModel";return this._id&&(t+=" #"+this._id),this._slug&&(t+=' "'+this._slug+'"'),t+"]"}},{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}},{key:"shortDescription",get:function(){return this._shortDescription}},{key:"cover",get:function(){return this._coverCached}},{key:"coverOriginal",get:function(){return this._coverOriginal}},{key:"coverOriginalFilename",get:function(){return this._coverOriginalFilename}},{key:"box",get:function(){return this._boxCached}},{key:"boxOriginal",get:function(){return this._boxOriginal}},{key:"boxOriginalFilename",get:function(){return this._boxOriginalFilename}},{key:"slug",get:function(){return this._slug}},{key:"url",get:function(){return this._url}},{key:"likesCount",get:function(){return this._likesCount}},{key:"hasLiked",get:function(){return this._hasLiked}}]),t}();e["default"]=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];n(this,t),this._title=e&&e.title||"",this._description=e&&e.description||"",this._url=e&&e.url||"",this._thumbnail=e&&e.thumbnail||""}return i(t,[{key:"title",get:function(){return this._title}},{key:"description",get:function(){return this._description}},{key:"url",get:function(){return this._url}},{key:"thumbnail",get:function(){return this._thumbnail}}]),t}();e["default"]=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];n(this,t);var i=e&&e.cover||null,r=e&&e.box||null;this._id=e&&e.id||0,this._title=e&&e.title||"",this._shortDescription=e&&e.short_description||"",this._coverCached=i&&i.cached||null,this._coverOriginal=i&&i.original||null,this._coverOriginalFilename=i&&i.original_filename||null,this._boxCached=r&&r.cached||null,this._boxOriginal=r&&r.original||null,this._boxOriginalFilename=r&&r.original_filename||null,this._slug=e&&e.slug||"",this._url=e&&e.url||"",this._likesCount=e&&e.likes_count||0,this._hasLiked=e&&e.has_liked||!1}return i(t,[{key:"toString",value:function(){var t="[GameModel";return this._id&&(t+=" #"+this._id),this._slug&&(t+=' "'+this._slug+'"'),t+"]"}},{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}},{key:"shortDescription",get:function(){return this._shortDescription}},{key:"cover",get:function(){return this._coverCached}},{key:"coverOriginal",get:function(){return this._coverOriginal}},{key:"coverOriginalFilename",get:function(){return this._coverOriginalFilename}},{key:"box",get:function(){return this._boxCached}},{key:"boxOriginal",get:function(){return this._boxOriginal}},{key:"boxOriginalFilename",get:function(){return this._boxOriginalFilename}},{key:"slug",get:function(){return this._slug}},{key:"url",get:function(){return this._url}},{key:"likesCount",get:function(){return this._likesCount}},{key:"hasLiked",get:function(){return this._hasLiked}}]),t}();e["default"]=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.GameCompany=e.GamePlatform=e["default"]=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(9),l=i(a),c=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,e);var n=function(t){return t?new Date(t):null},i=u(this,Object.getPrototypeOf(e).call(this,t));return i._description=t&&t.description||"",i._displaySource=t&&t.display_source||!1,i._releasedAt=t&&n(t.released_at)||null,i._steamId=t&&t.steam_id||0,i._xbox360Id=t&&t.xbox360_id||0,i._xboxoneId=t&&t.xboxone_id||0,i._createdAt=t&&n(t.created_at)||null,i._updatedAt=t&&n(t.updated_at)||null,i._deletedAt=t&&n(t.deleted_at)||null,i._coverBy=t&&t.cover_by||0,i._website=t&&t.website||"",i._facebook=t&&t.facebook||"",i._twitter=t&&t.twitter||"",i._gplus=t&&t.gplus||"",i._steam=t&&t.steam||"",i._twitch=t&&t.twitch||"",i._youtube=t&&t.youtube||"",i._buyLink=t&&t.buy_link||"",i._kickstarter=t&&t.kickstarter||"",i._favouritesCount=t&&t.favourites_count||0,i._aliases=t&&t.alias&&t.alias.split("\n")||[],i._platforms=[],t&&t.platforms&&(i._platforms=t.platforms.map(function(t){return new h(t)})),i._developers=[],t&&t.developers&&(i._developers=t.developers.map(function(t){return new _(t)})),i._publishers=[],t&&t.publishers&&(i._publishers=t.developers.map(function(t){return new _(t)})),i}return s(e,t),o(e,[{key:"toString",value:function(){var t="[GameExtendedModel";return this._id&&(t+=" #"+this._id),this._slug&&(t+=' "'+this._slug+'"'),t+"]"}},{key:"description",get:function(){return this._description}},{key:"displaySource",get:function(){return this._displaySource}},{key:"releasedAt",get:function(){return this._releasedAt}},{key:"steamId",get:function(){return this._steamId}},{key:"xbox360Id",get:function(){return this._xbox360Id}},{key:"xboxoneId",get:function(){return this._xboxoneId}},{key:"createdAt",get:function(){return this._createdAt}},{key:"updatedAt",get:function(){return this._updatedAt}},{key:"deletedAt",get:function(){return this._deletedAt}},{key:"coverBy",get:function(){return this._coverBy}},{key:"aliases",get:function(){return this._aliases}},{key:"website",get:function(){return this._website}},{key:"facebook",get:function(){return this._facebook}},{key:"twitter",get:function(){return this._twitter}},{key:"gplus",get:function(){return this._gplus}},{key:"steam",get:function(){return this._steam}},{key:"twitch",get:function(){return this._twitch}},{key:"youtube",get:function(){return this._youtube}},{key:"buyLink",get:function(){return this._buyLink}},{key:"kickstarter",get:function(){return this._kickstarter}},{key:"platforms",get:function(){return this._platforms}},{key:"favouritesCount",get:function(){return this._favouritesCount}},{key:"developers",get:function(){return this._developers}},{key:"publishers",get:function(){return this._publishers}}]),e}(l["default"]),h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,t),this._id=e&&e.id||0,this._name=e&&e.name||"",this._order=e&&e.order||"",this._slug=e&&e.slug||"",this._displayName=e&&e.display_name||null}return o(t,[{key:"toString",value:function(){var t="[GamePlatform";return this._id&&(t+=" #"+this._id),this._slug&&(t+=' "'+this._slug+'"'),t+"]"}},{key:"id",get:function(){return this._id}},{key:"name",get:function(){return this._name}},{key:"order",get:function(){return this._order}},{key:"slug",get:function(){return this._slug}},{key:"displayName",get:function(){return this._displayName}}]),t}(),_=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];r(this,t);var n=function(t){return t?new Date(t):null};this._id=e&&e.id||0,this._userId=e&&e.user_id||0,this._name=e&&e.name||"",this._description=e&&e.description||"",this._homepage=e&&e.homepage||"",this._slug=e&&e.slug||"",this._createdAt=e&&n(e.created_at)||null,this._updatedAt=e&&n(e.updated_at)||null,this._deletedAt=e&&n(e.deleted_at)||null}return o(t,[{key:"toString",value:function(){var t="[GameCompany";return this._id&&(t+=" #"+this._id),this._slug&&(t+=' "'+this._slug+'"'),t+"]"}},{key:"id",get:function(){return this._id}},{key:"userId",get:function(){return this._userId}},{key:"name",get:function(){return this._name}},{key:"description",get:function(){return this._description}},{key:"homepage",get:function(){return this._homepage}},{key:"slug",get:function(){return this._slug}},{key:"createdAt",get:function(){return this._createdAt}},{key:"updatedAt",get:function(){return this._updatedAt}},{key:"deletedAt",get:function(){return this._deletedAt}}]),t}();e["default"]=c,e["default"]=c,e.GamePlatform=h,e.GameCompany=_}]);