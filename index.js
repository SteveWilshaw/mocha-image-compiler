var loader = function(module, filename) {
    return module._compile('module.exports = \'' + filename.replace(__dirname, '') + '\'', filename)
};

require.extensions['.png'] = loader;
require.extensions['.jpg'] = loader;
require.extensions['.gif'] = loader;
require.extensions['.svg'] = loader;
require.extensions['.ico'] = loader;
