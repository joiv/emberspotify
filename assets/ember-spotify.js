"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ember-spotify/album/model', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
  exports['default'] = _emberDataModel['default'].extend({
    name: _emberData['default'].attr(),
    tracks: _emberData['default'].hasMany()
  });
});
define('ember-spotify/album/route', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({});
});
define('ember-spotify/album/serializer', ['exports', 'ember', 'ember-spotify/application/serializer', 'ember-data/serializers/embedded-records-mixin'], function (exports, _ember, _emberSpotifyApplicationSerializer, _emberDataSerializersEmbeddedRecordsMixin) {
	var get = _ember['default'].get;
	exports['default'] = _emberSpotifyApplicationSerializer['default'].extend(_emberDataSerializersEmbeddedRecordsMixin['default'], {

		attrs: { tracks: { embedded: 'always' } },

		normalizeArrayResponse: function normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
			return this._super(store, primaryModelClass, payload.items, id, requestType);
		},

		normalize: function normalize(modelName, hash) {
			if (get(hash, 'tracks.items')) {
				hash.tracks = get(hash, 'tracks.items');
			} else {
				delete hash.tracks;
			}
			return this._super(modelName, hash);
		}
	});
});
define("ember-spotify/album/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-spotify/album/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "track-list", [], ["tracks", ["subexpr", "@mut", [["get", "model.tracks", ["loc", [null, [1, 22], [1, 34]]]]], [], []]], ["loc", [null, [1, 0], [1, 36]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-spotify/app', ['exports', 'ember', 'ember-spotify/resolver', 'ember-load-initializers', 'ember-spotify/config/environment'], function (exports, _ember, _emberSpotifyResolver, _emberLoadInitializers, _emberSpotifyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberSpotifyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberSpotifyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberSpotifyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberSpotifyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-spotify/application/adapter', ['exports', 'ember-data/adapters/rest', 'ember'], function (exports, _emberDataAdaptersRest, _ember) {
  exports['default'] = _emberDataAdaptersRest['default'].extend({
    token: _ember['default'].inject.service(),
    host: 'https://api.spotify.com',
    namespace: 'v1',
    headers: _ember['default'].computed('token', function () {
      return {
        "Authorization": 'Bearer ' + this.get('token').retreive()
      };
    }).volatile()

  });
});
define('ember-spotify/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      accessDenied: function accessDenied() {
        this.transitionTo('login');
      }
    }
  });
});
define('ember-spotify/application/serializer', ['exports', 'ember-data/serializers/json', 'ember'], function (exports, _emberDataSerializersJson, _ember) {
	exports['default'] = _emberDataSerializersJson['default'].extend({
		keyForAttribute: _ember['default'].String.underscore
	});
});
define("ember-spotify/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "ember-spotify/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-spotify/application/torii-adapter', ['exports', 'ember'], function (exports, _ember) {
  var inject = _ember['default'].inject;
  exports['default'] = _ember['default'].Object.extend({

    store: inject.service(),
    token: inject.service(),

    open: function open(_ref) {
      var authorizationToken = _ref.authorizationToken;

      this.get('token').store(authorizationToken.access_token);
      return this.fetch();
    },

    fetch: function fetch() {
      return this.get('store').queryRecord('user', {}).then(function (currentUser) {
        return { currentUser: currentUser };
      });
    }
  });
});
define('ember-spotify/application/torii-provider', ['exports', 'torii/providers/oauth2-bearer', 'torii/configuration'], function (exports, _toriiProvidersOauth2Bearer, _toriiConfiguration) {
  exports['default'] = _toriiProvidersOauth2Bearer['default'].extend({

    name: 'spotify',
    baseUrl: 'https://accounts.spotify.com/authorize',

    optionalUrlParams: ['show_dialog'],
    showDialog: (0, _toriiConfiguration.configurable)('showDialog', false),

    responseParams: ['access_token', 'expires_in', 'state', 'token_type'],

    redirectUri: (0, _toriiConfiguration.configurable)('redirectUri')
  });
});
define('ember-spotify/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-spotify/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberSpotifyConfigEnvironment) {

  var name = _emberSpotifyConfigEnvironment['default'].APP.name;
  var version = _emberSpotifyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ember-spotify/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiComponentsToriiIframePlaceholder) {
  exports['default'] = _toriiComponentsToriiIframePlaceholder['default'];
});
define('ember-spotify/components/track-list/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		tracks: null,
		player: _ember['default'].inject.service('player'),
		actions: {
			play: function play(track) {
				this.get('player').playTrack(track);
			}
		}
	});
});
define("ember-spotify/components/track-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 10
              },
              "end": {
                "line": 22,
                "column": 10
              }
            },
            "moduleName": "ember-spotify/components/track-list/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "artist.name", ["loc", [null, [21, 12], [21, 27]]]]],
          locals: ["artist"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 26,
              "column": 4
            }
          },
          "moduleName": "ember-spotify/components/track-list/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n           ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "ui tiny icon button");
          var el4 = dom.createTextNode("\n          		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1, 1]);
          var element2 = dom.childAt(element1, [1]);
          var morphs = new Array(5);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createAttrMorph(element2, 'class');
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["play", ["get", "track", ["loc", [null, [14, 63], [14, 68]]]]], [], ["loc", [null, [14, 47], [14, 70]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["subexpr", "and", [["subexpr", "eq", [["get", "track", ["loc", [null, [15, 36], [15, 41]]]], ["get", "player.track", ["loc", [null, [15, 42], [15, 54]]]]], [], ["loc", [null, [15, 32], [15, 55]]]], ["get", "player.isPlaying", ["loc", [null, [15, 56], [15, 72]]]]], [], ["loc", [null, [15, 27], [15, 73]]]], "pause", "play"], [], ["loc", [null, [15, 22], [15, 90]]]], " icon"]]], ["content", "track.name", ["loc", [null, [18, 12], [18, 26]]]], ["block", "each", [["get", "track.artists", ["loc", [null, [20, 18], [20, 31]]]]], [], 0, null, ["loc", [null, [20, 10], [22, 19]]]], ["inline", "link-to", [["get", "track.album.name", ["loc", [null, [24, 22], [24, 38]]]], "album", ["get", "track.album.id", ["loc", [null, [24, 47], [24, 61]]]]], [], ["loc", [null, [24, 12], [24, 63]]]]],
        locals: ["track"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "ember-spotify/components/track-list/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui very basic table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Track");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Artist");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Album");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "tracks", ["loc", [null, [11, 12], [11, 18]]]]], [], 0, null, ["loc", [null, [11, 4], [26, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('ember-spotify/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-spotify/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-spotify/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('ember-spotify/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-spotify/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberSpotifyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberSpotifyConfigEnvironment['default'].APP.name, _emberSpotifyConfigEnvironment['default'].APP.version)
  };
});
define('ember-spotify/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-spotify/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ember-spotify/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-spotify/initializers/export-application-global', ['exports', 'ember', 'ember-spotify/config/environment'], function (exports, _ember, _emberSpotifyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberSpotifyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _emberSpotifyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberSpotifyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-spotify/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
define('ember-spotify/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _toriiBootstrapSession, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _toriiBootstrapSession['default'])(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
define('ember-spotify/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'ember-spotify/config/environment'], function (exports, _toriiBootstrapTorii, _toriiConfiguration, _emberSpotifyConfigEnvironment) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiConfiguration.configure)(_emberSpotifyConfigEnvironment['default'].torii || {});
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports['default'] = initializer;
});
define('ember-spotify/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ember-spotify/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('ember-spotify/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ember-spotify/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("ember-spotify/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ember-spotify/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/router-dsl-ext'], function (exports, _toriiBootstrapRouting, _toriiConfiguration, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      var router = applicationInstance.get('router');
      var setupRoutes = function setupRoutes() {
        var authenticatedRoutes = router.router.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
define('ember-spotify/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _toriiLibContainerUtils, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('ember-spotify/login/route', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			if (this.get('session.isAuthenticated')) {
				this.transitionTo('player');
			}
		},
		actions: {
			signIn: function signIn() {
				var _this = this;

				this.get('session').open('application').then(function () {
					_this.transitionTo('player');
				});
			}
		}
	});
});
define("ember-spotify/login/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-spotify/login/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "ui button");
        var el2 = dom.createTextNode("Sign in");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["signIn"], [], ["loc", [null, [1, 26], [1, 45]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-spotify/player/controller', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		player: _ember['default'].inject.service('player'),
		query: '',
		actions: {
			toggle: function toggle() {
				var player = this.get('player');
				if (player.get('track')) {
					if (player.get('isPlaying')) {
						player.pause();
					} else {
						player.play();
					}
				}
			},
			search: function search() {
				var query = this.get('query');
				this.transitionToRoute('search', { queryParams: { query: query } });
				// debugger;
			}
		}
	});
});
define('ember-spotify/player/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-spotify/player/service', ['exports', 'ember'], function (exports, _ember) {
  var noTrackMessage = 'Nothing is playing right now';

  exports['default'] = _ember['default'].Service.extend({
    audio: null,
    track: null,

    isPlaying: false,
    currentTrack: noTrackMessage,

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      var audio = new Audio();
      audio.autoplay = true;

      audio.onended = function () {
        return _this.set('isPlaying', false);
      };
      audio.onpause = function () {
        return _this.set('isPlaying', false);
      };
      audio.onplaying = function () {
        return _this.set('isPlaying', true);
      };

      this.set('audio', audio);
    },

    playTrack: function playTrack(track) {
      var oldTrack = this.get('track');
      if (oldTrack === track) {
        if (this.get('isPlaying')) {
          this.pause();
        } else {
          this.play();
        }
      } else {
        this.set('track', track);
        this.set('audio.src', track.get('previewUrl'));
        this.play();
      }
    },

    play: function play() {
      this.get('audio').play();
    },

    pause: function pause() {
      this.get('audio').pause();
    }
  });
});
define("ember-spotify/player/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 10
            },
            "end": {
              "line": 28,
              "column": 10
            }
          },
          "moduleName": "ember-spotify/player/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "link-to", [["get", "playlist.name", ["loc", [null, [27, 22], [27, 35]]]], "playlist", ["get", "playlist.owner.id", ["loc", [null, [27, 47], [27, 64]]]], ["get", "playlist.id", ["loc", [null, [27, 65], [27, 76]]]]], ["class", "item"], ["loc", [null, [27, 12], [27, 91]]]]],
        locals: ["playlist"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 56,
            "column": 0
          }
        },
        "moduleName": "ember-spotify/player/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui top attached menu");
        dom.setAttribute(el1, "id", "topbar");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header item");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "spotify large icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ember-spotify\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "right menu");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ui icon input");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "search icon");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "item");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "ui avatar image");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui attached segment");
        dom.setAttribute(el1, "id", "content");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui divided grid");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "four wide column");
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui fluid vertical text menu");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "twelve wide column");
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui bottom attached segment");
        dom.setAttribute(el1, "id", "playbar");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui form");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "inline fields");
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "field");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "ui mini icon button");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "field");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("em");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 3]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(fragment, [3, 1]);
        var element5 = dom.childAt(fragment, [5, 1, 1]);
        var element6 = dom.childAt(element5, [1, 1]);
        var element7 = dom.childAt(element6, [1]);
        var morphs = new Array(9);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
        morphs[2] = dom.createAttrMorph(element3, 'src');
        morphs[3] = dom.createMorphAt(element2, 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(element4, [1, 1]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
        morphs[6] = dom.createElementMorph(element6);
        morphs[7] = dom.createAttrMorph(element7, 'class');
        morphs[8] = dom.createMorphAt(dom.childAt(element5, [3, 1]), 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["search"], ["on", "submit"], ["loc", [null, [7, 14], [7, 45]]]], ["inline", "input", [], ["placeholder", "Search...", "value", ["subexpr", "@mut", [["get", "query", ["loc", [null, [10, 50], [10, 55]]]]], [], []]], ["loc", [null, [10, 12], [10, 57]]]], ["attribute", "src", ["concat", [["get", "session.currentUser.avatar", ["loc", [null, [15, 44], [15, 70]]]]]]], ["content", "session.currentUser.displayName", ["loc", [null, [16, 8], [16, 43]]]], ["block", "each", [["get", "session.currentUser.playlists", ["loc", [null, [26, 18], [26, 47]]]]], [], 0, null, ["loc", [null, [26, 10], [28, 19]]]], ["content", "outlet", ["loc", [null, [34, 8], [34, 18]]]], ["element", "action", ["toggle"], [], ["loc", [null, [44, 46], [44, 65]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "player.isPlaying", ["loc", [null, [45, 27], [45, 43]]]], "pause", "play"], [], ["loc", [null, [45, 22], [45, 60]]]], " icon"]]], ["content", "player.track.name", ["loc", [null, [50, 13], [50, 34]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('ember-spotify/playlist/adapter', ['exports', 'ember-spotify/application/adapter'], function (exports, _emberSpotifyApplicationAdapter) {
	exports['default'] = _emberSpotifyApplicationAdapter['default'].extend({
		urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
			var baseUrl = this.buildURL();
			return baseUrl + '/users/' + snapshot.adapterOptions.owner_id + '/playlists/' + id;
		}
	});
});
define('ember-spotify/playlist/model', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	exports['default'] = _emberDataModel['default'].extend({
		user: _emberData['default'].belongsTo('user', { inverse: 'playlists' }),
		owner: _emberData['default'].belongsTo('user', { inverse: null }),
		name: _emberData['default'].attr('string'),
		tracks: _emberData['default'].hasMany()
	});
});
define('ember-spotify/playlist/route', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(_ref) {
			var owner_id = _ref.owner_id;
			var playlist_id = _ref.playlist_id;

			return this.store.findRecord('playlist', playlist_id, { adapterOptions: { owner_id: owner_id } });
		}
	});
});
define('ember-spotify/playlist/serializer', ['exports', 'ember-spotify/application/serializer', 'ember-data/serializers/embedded-records-mixin'], function (exports, _emberSpotifyApplicationSerializer, _emberDataSerializersEmbeddedRecordsMixin) {
	exports['default'] = _emberSpotifyApplicationSerializer['default'].extend(_emberDataSerializersEmbeddedRecordsMixin['default'], {

		attrs: { tracks: { embedded: 'always' } },

		normalizeArrayResponse: function normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
			return this._super(store, primaryModelClass, payload.items, id, requestType);
		},

		normalize: function normalize(modelName, hash) {
			if (hash.tracks.items) {
				hash.tracks = hash.tracks.items;
			} else {
				delete hash.tracks;
			}
			return this._super(modelName, hash);
		}
	});
});
define("ember-spotify/playlist/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 36
          }
        },
        "moduleName": "ember-spotify/playlist/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "track-list", [], ["tracks", ["subexpr", "@mut", [["get", "model.tracks", ["loc", [null, [6, 22], [6, 34]]]]], [], []]], ["loc", [null, [6, 0], [6, 36]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ember-spotify/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ember-spotify/router', ['exports', 'ember', 'ember-spotify/config/environment'], function (exports, _ember, _emberSpotifyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberSpotifyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.authenticatedRoute('player', { path: '/' }, function () {
      this.route('playlist', { path: '/playlists/:owner_id/:playlist_id', resetNamespace: true });
      this.route('album', { path: '/albums/:album_id', resetNamespace: true });
      this.route('search', { resetNamespace: true }); //, { path: '/search/:'});
    });
    this.route('login');
    // this.route('search');
  });

  exports['default'] = Router;
});
define('ember-spotify/search/adapter', ['exports', 'ember-spotify/application/adapter'], function (exports, _emberSpotifyApplicationAdapter) {
  exports['default'] = _emberSpotifyApplicationAdapter['default'].extend({
    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      this._super(id, modelName, snapshot);
      return this.urlPrefix('search?type=track&q=' + id, this.urlPrefix());
    }
  });
});
define('ember-spotify/search/controller', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		queryParams: ['query'],
		query: null
	});
});
define('ember-spotify/search/model', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
  exports['default'] = _emberDataModel['default'].extend({
    tracks: _emberData['default'].hasMany({ inverse: null })
  });
});
define('ember-spotify/search/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    queryParams: {
      query: {
        refreshModel: true
      }
    },

    model: function model(_ref) {
      var query = _ref.query;

      return this.store.findRecord('search', query);
    }
  });
});
define('ember-spotify/search/serializer', ['exports', 'ember-spotify/application/serializer', 'ember-data/serializers/embedded-records-mixin'], function (exports, _emberSpotifyApplicationSerializer, _emberDataSerializersEmbeddedRecordsMixin) {
  exports['default'] = _emberSpotifyApplicationSerializer['default'].extend(_emberDataSerializersEmbeddedRecordsMixin['default'], {

    attrs: {
      tracks: { embedded: 'always' }
    },

    normalize: function normalize(modelName, hash) {
      if (hash.tracks && hash.tracks.items) {
        hash.tracks = hash.tracks.items;
      } else {
        delete hash.tracks;
      }
      return this._super(modelName, hash);
    },

    normalizeFindRecordResponse: function normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
      payload.id = id;
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('ember-spotify/search/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({});
});
define("ember-spotify/search/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ember-spotify/search/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "track-list", [], ["tracks", ["subexpr", "@mut", [["get", "model.tracks", ["loc", [null, [4, 22], [4, 34]]]]], [], []]], ["loc", [null, [4, 2], [4, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "ember-spotify/search/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui info message");
          var el2 = dom.createTextNode("No tracks matching your search!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "ember-spotify/search/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        dom.setAttribute(el1, "class", "ui header");
        var el2 = dom.createTextNode("Search Results");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.tracks", ["loc", [null, [3, 6], [3, 18]]]]], [], 0, 1, ["loc", [null, [3, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('ember-spotify/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ember-spotify/services/popup', ['exports', 'torii/services/popup'], function (exports, _toriiServicesPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesPopup['default'];
    }
  });
});
define('ember-spotify/services/torii-session', ['exports', 'torii/services/session'], function (exports, _toriiServicesSession) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesSession['default'];
    }
  });
});
define('ember-spotify/services/torii', ['exports', 'torii/services/torii'], function (exports, _toriiServicesTorii) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesTorii['default'];
    }
  });
});
define('ember-spotify/token/service', ['exports', 'ember'], function (exports, _ember) {

  var TOKEN_KEY = 'ember-spotify-token';

  exports['default'] = _ember['default'].Service.extend({
    clear: function clear() {
      localStorage.removeItem(TOKEN_KEY);
    },

    retreive: function retreive() {
      return localStorage[TOKEN_KEY];
    },

    store: function store(token) {
      localStorage.setItem(TOKEN_KEY, token);
    }
  });
});
define('ember-spotify/track/model', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	exports['default'] = _emberDataModel['default'].extend({
		name: _emberData['default'].attr(),
		duration: _emberData['default'].attr(),
		popularity: _emberData['default'].attr(),
		previewUrl: _emberData['default'].attr(),
		artists: _emberData['default'].attr(),
		album: _emberData['default'].belongsTo()
	});
});
define('ember-spotify/track/serializer', ['exports', 'ember-spotify/application/serializer', 'ember-data/serializers/embedded-records-mixin'], function (exports, _emberSpotifyApplicationSerializer, _emberDataSerializersEmbeddedRecordsMixin) {
	exports['default'] = _emberSpotifyApplicationSerializer['default'].extend(_emberDataSerializersEmbeddedRecordsMixin['default'], {
		attrs: {
			album: { embedded: 'always' },
			duration: { key: 'duration_ms' }
		},

		normalize: function normalize(modelName, hash) {
			hash = hash.track || hash;
			return this._super(modelName, hash);
		}
	});
});
define('ember-spotify/user/adapter', ['exports', 'ember-spotify/application/adapter'], function (exports, _emberSpotifyApplicationAdapter) {
	exports['default'] = _emberSpotifyApplicationAdapter['default'].extend({
		urlForQueryRecord: function urlForQueryRecord() {
			var baseUrl = this.buildURL();
			return baseUrl + '/me';
		}
	});
});
define('ember-spotify/user/model', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		playlists: _emberData['default'].hasMany('playlist', { inverse: 'user' }),
		displayName: _emberData['default'].attr('string'),
		avatar: _emberData['default'].attr('string')
	});
});
define('ember-spotify/user/serializer', ['exports', 'ember-spotify/application/serializer'], function (exports, _emberSpotifyApplicationSerializer) {
	exports['default'] = _emberSpotifyApplicationSerializer['default'].extend({
		normalize: function normalize(modelName, hash) {
			hash.avatar = hash.images[0].url;
			hash.links = { playlists: 'playlists' };
			return this._super(modelName, hash);
		}
	});
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ember-spotify/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-spotify';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ember-spotify/app")["default"].create({"name":"ember-spotify","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-spotify.map