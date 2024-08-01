const hendler = {};

hendler.sampleHandler = (requstProperties, callback) => {
    console.log(requstProperties);
    callback(200, {
        message: 'this is a sample url',
    });
};

module.exports = hendler;
