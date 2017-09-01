import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collection-modal', 'Integration | Component | collection modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{collection-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#collection-modal}}
      template block text
    {{/collection-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
