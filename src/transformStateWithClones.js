'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let currentState = { ...state };

  actions.forEach(action => {
    switch (action.type) {
      case 'clear':
        currentState = {};
        break;
      case 'addproperties':
        action.keysToRemove.forEach(key => {
          delete currentState[key];
        });
        break;
      default:
        throw new Error(`Unknown action Type: ${action.type}`);
    }

    states.push(currentState);
  });

  return states;
}

module.exports = transformStateWithClones;
