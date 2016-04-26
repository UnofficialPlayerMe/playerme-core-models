# upa-models
A module containing models that represent objects in the [Player v1 API](http://docs.playerme.apiary.io/).

# Installing
You can either just download the zipped files, or you can use a dependency manager like [Bower](http://bower.io/) or [NPM](https://docs.npmjs.com/getting-started/what-is-npm).

* Bower: `bower install -S "git+https://github.com/Zazz-PlayerMe/upa-models.git"`
* NPM: `npm install -S "git+https://github.com/Zazz-PlayerMe/upa-models.git"`

# Usage
After including either the standard or minified source file in the **dist** folder, the models will be accessible from `window.UPA.models`.  
Example: `var myUser = new UPA.models.UserModel();`

# Development
This is written in [ES2015](https://babeljs.io/docs/learn-es2015/) Javascript and uses [Webpack](https://webpack.github.io/) to bundle it and convert to ES5.
The project uses the [Gulp](http://gulpjs.com/) task-runner to start builds and tests.