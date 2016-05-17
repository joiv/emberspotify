define('ember-spotify/tests/album/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - album/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'album/model.js should pass jshint.');
  });
});
define('ember-spotify/tests/album/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - album/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'album/route.js should pass jshint.');
  });
});
define('ember-spotify/tests/album/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - album/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'album/serializer.js should pass jshint.');
  });
});
define('ember-spotify/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-spotify/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('ember-spotify/tests/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass jshint.');
  });
});
define('ember-spotify/tests/application/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/serializer.js should pass jshint.');
  });
});
define('ember-spotify/tests/application/torii-adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/torii-adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/torii-adapter.js should pass jshint.');
  });
});
define('ember-spotify/tests/application/torii-provider.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/torii-provider.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/torii-provider.js should pass jshint.');
  });
});
define('ember-spotify/tests/components/track-list/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/track-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/track-list/component.js should pass jshint.');
  });
});
define('ember-spotify/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-spotify/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-spotify/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-spotify/tests/helpers/start-app', 'ember-spotify/tests/helpers/destroy-app'], function (exports, _qunit, _emberSpotifyTestsHelpersStartApp, _emberSpotifyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberSpotifyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberSpotifyTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-spotify/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-spotify/tests/helpers/resolver', ['exports', 'ember-spotify/resolver', 'ember-spotify/config/environment'], function (exports, _emberSpotifyResolver, _emberSpotifyConfigEnvironment) {

  var resolver = _emberSpotifyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberSpotifyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberSpotifyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-spotify/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-spotify/tests/helpers/start-app', ['exports', 'ember', 'ember-spotify/app', 'ember-spotify/config/environment'], function (exports, _ember, _emberSpotifyApp, _emberSpotifyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberSpotifyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberSpotifyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-spotify/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-spotify/tests/helpers/torii', ['exports'], function (exports) {
  exports.stubValidSession = stubValidSession;

  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:session');
    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('ember-spotify/tests/integration/components/track-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('track-list', 'Integration | Component | track list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'track-list', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.5.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'track-list', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-spotify/tests/integration/components/track-list/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/track-list/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/track-list/component-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/login/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - login/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'login/route.js should pass jshint.');
  });
});
define('ember-spotify/tests/player/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - player/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'player/controller.js should pass jshint.');
  });
});
define('ember-spotify/tests/player/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - player/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'player/route.js should pass jshint.');
  });
});
define('ember-spotify/tests/player/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - player/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'player/service.js should pass jshint.');
  });
});
define('ember-spotify/tests/playlist/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - playlist/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'playlist/adapter.js should pass jshint.');
  });
});
define('ember-spotify/tests/playlist/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - playlist/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'playlist/model.js should pass jshint.');
  });
});
define('ember-spotify/tests/playlist/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - playlist/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'playlist/route.js should pass jshint.');
  });
});
define('ember-spotify/tests/playlist/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - playlist/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'playlist/serializer.js should pass jshint.');
  });
});
define('ember-spotify/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-spotify/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-spotify/tests/search/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - search/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'search/adapter.js should pass jshint.');
  });
});
define('ember-spotify/tests/search/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - search/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'search/controller.js should pass jshint.');
  });
});
define('ember-spotify/tests/search/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - search/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'search/model.js should pass jshint.');
  });
});
define('ember-spotify/tests/search/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - search/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'search/route.js should pass jshint.');
  });
});
define('ember-spotify/tests/search/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - search/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'search/serializer.js should pass jshint.');
  });
});
define('ember-spotify/tests/search/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - search/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'search/service.js should pass jshint.');
  });
});
define('ember-spotify/tests/test-helper', ['exports', 'ember-spotify/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberSpotifyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberSpotifyTestsHelpersResolver['default']);
});
define('ember-spotify/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-spotify/tests/token/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - token/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'token/service.js should pass jshint.');
  });
});
define('ember-spotify/tests/track/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - track/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'track/model.js should pass jshint.');
  });
});
define('ember-spotify/tests/track/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - track/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'track/serializer.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/album/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('album', 'Unit | Model | album', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-spotify/tests/unit/album/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/album/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/album/model-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/album/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:album', 'Unit | Route | album', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-spotify/tests/unit/album/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/album/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/album/route-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/album/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('album', 'Unit | Serializer | album', {
    // Specify the other units that are required for this test.
    needs: ['serializer:album']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-spotify/tests/unit/album/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/album/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/album/serializer-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/player/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:player', 'Unit | Controller | player', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-spotify/tests/unit/player/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/player/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/player/controller-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/player/service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:player', 'Unit | Service | player', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-spotify/tests/unit/player/service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/player/service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/player/service-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/playlist/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:playlist', 'Unit | Route | playlist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-spotify/tests/unit/playlist/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/playlist/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/playlist/route-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/playlist/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('playlist', 'Unit | Serializer | playlist', {
    // Specify the other units that are required for this test.
    needs: ['serializer:playlist']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-spotify/tests/unit/playlist/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/playlist/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/playlist/serializer-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/search/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:search', 'Unit | Adapter | search', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-spotify/tests/unit/search/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/search/adapter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/search/adapter-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/search/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:search', 'Unit | Controller | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-spotify/tests/unit/search/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/search/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/search/controller-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/search/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('search', 'Unit | Model | search', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-spotify/tests/unit/search/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/search/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/search/model-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/search/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-spotify/tests/unit/search/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/search/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/search/route-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/search/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('search', 'Unit | Serializer | search', {
    // Specify the other units that are required for this test.
    needs: ['serializer:search']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-spotify/tests/unit/search/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/search/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/search/serializer-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/search/service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:search', 'Unit | Service | search', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-spotify/tests/unit/search/service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/search/service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/search/service-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/track/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('track', 'Unit | Model | track', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-spotify/tests/unit/track/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/track/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/track/model-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/track/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('track', 'Unit | Serializer | track', {
    // Specify the other units that are required for this test.
    needs: ['serializer:track']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-spotify/tests/unit/track/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/track/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/track/serializer-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/unit/user/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Serializer | user', {
    // Specify the other units that are required for this test.
    needs: ['serializer:user']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-spotify/tests/unit/user/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/user/serializer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/user/serializer-test.js should pass jshint.');
  });
});
define('ember-spotify/tests/user/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user/adapter.js should pass jshint.');
  });
});
define('ember-spotify/tests/user/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user/model.js should pass jshint.');
  });
});
define('ember-spotify/tests/user/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user/serializer.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-spotify/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map