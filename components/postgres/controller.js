const debug = require('debug')('offers-controller');
module.exports = (options) => {

    const start = ({ postgres, config, logger }, cb) => {
        const getFamilies = () => {
            debug('Getting all families...');
            return Promise.resolve([{ id: 0 }, { id: 1 }]);
        };

        cb(null, {
            getFamilies
        });
    };

    return { start };
  };