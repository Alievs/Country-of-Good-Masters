var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    .addEntry('catalog', './assets/js/catalog.js')
    .addEntry('categories', './assets/js/categories.js')
    .addEntry('product', './assets/js/product.js')
    .addEntry('compare', './assets/js/compare.js')
    .addEntry('cart', './assets/js/cart_manage.js')
    .addEntry('payment', './assets/js/payment.js')
    .addEntry('thankspage', './assets/js/components/thankspage.js')
    .addEntry('wish', './assets/js/wish.js')
    .addEntry('account', './assets/js/components/account.js')
    .addEntry('commentList', './assets/js/comments/comments.js')
    .addEntry('view', './assets/js/viewed/viewed.js')

    .addStyleEntry('login', './assets/styles/login_register.scss')
    .addStyleEntry('emptySearch', './assets/styles/empty_search/empty_search.scss')
    .addStyleEntry('infopage', './assets/styles/page/infopage.scss')
    .addStyleEntry('comment', './assets/styles/comment/comment.scss')
    .addStyleEntry('orders', './assets/styles/orders/orders.scss')
    .addStyleEntry('404page', './assets/styles/page/404page.scss')
    .addStyleEntry('viewed', './assets/styles/viewed/viewed.scss')
    // .addStyleEntry('account', './assets/styles/account.scss')
    //.addEntry('page1', './assets/page1.js')
    //.addEntry('page2', './assets/page2.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    //.enableSingleRuntimeChunk()
    .disableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    .copyFiles([
        {
            from: './assets/images/products',
            to: 'images/products/[path][name].[hash:8].[ext]'
        },
        {
            from: './assets/images',
            to: 'images/[path][name].[hash:8].[ext]'
        }

    ])

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/admin.js')
;

module.exports = Encore.getWebpackConfig();
