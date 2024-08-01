const hendler = {};

hendler.notFoundHandler = (requstProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found',
    });
};

module.exports = hendler;
