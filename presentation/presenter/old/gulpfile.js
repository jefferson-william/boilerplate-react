// Generated on 2021-07-20 using generator-angular 0.16.0

const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const openURL = require('open')
const lazypipe = require('lazypipe')
const rimraf = require('rimraf')
const wiredep = require('wiredep').stream
const runSequence = require('gulp4-run-sequence')
const sass = require('gulp-sass')(require('sass'))

const host = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://localhost:4000'

const yeoman = {
  // eslint-disable-next-line global-require
  app: require('./bower.json').appPath || 'app',
  dist: 'dist',
}

const paths = {
  scripts: [`${yeoman.app}/scripts/**/*.js`],
  styles: [`${yeoman.app}/styles/**/*.scss`],
  test: ['test/spec/**/*.js'],
  testRequire: [
    `${yeoman.app}/bower_components/angular/angular.js`,
    `${yeoman.app}/bower_components/angular-mocks/angular-mocks.js`,
    `${yeoman.app}/bower_components/angular-resource/angular-resource.js`,
    `${yeoman.app}/bower_components/angular-cookies/angular-cookies.js`,
    `${yeoman.app}/bower_components/angular-sanitize/angular-sanitize.js`,
    `${yeoman.app}/bower_components/angular-route/angular-route.js`,
    'test/mock/**/*.js',
    'test/spec/**/*.js',
  ],
  karma: 'karma.conf.js',
  views: {
    main: `${yeoman.app}/index.html`,
    files: [`${yeoman.app}/views/**/*.html`],
  },
}

/// /////////////////////
// Reusable pipelines //
/// /////////////////////

const styles = lazypipe()
  .pipe(sass, {
    outputStyle: 'expanded',
    precision: 10,
  })
  .pipe($.autoprefixer, 'last 1 version')
  .pipe(gulp.dest, '.tmp/styles')

/// ////////
// Tasks //
/// ////////

gulp.task('styles', function () {
  return gulp.src(paths.styles).pipe(sass()).pipe(gulp.dest('.tmp/styles'))
})

gulp.task('fileinclude', function () {
  return gulp
    .src(yeoman.views.main)
    .pipe(
      $.fileInclude({
        prefix: '@@',
        basepath: `${__dirname}/app`,
      }),
    )
    .pipe(`${yeoman.dist}/views`)
})

gulp.task('template', function () {
  return gulp
    .src(paths.views.main)
    .pipe(
      $.template({
        scripts: [{ name: '@app/react/button', url: `${host}/Button/index.js` }],
      }),
    )
    .pipe(gulp.dest(`${yeoman.dist}/views`))
})

gulp.task('clean:tmp', function (cb) {
  rimraf('./.tmp', cb)
})

gulp.task('start:server', function () {
  $.connect.server({
    root: [yeoman.app, '.tmp'],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000,
  })
})

gulp.task(
  'start:client',
  gulp.series(['start:server', 'fileinclude', 'template', 'styles'], function () {
    openURL('http://localhost:9000')
  }),
)

gulp.task('start:server:test', function () {
  $.connect.server({
    root: ['test', yeoman.app, '.tmp'],
    livereload: true,
    port: 9001,
  })
})

gulp.task('watch', function () {
  $.watch(paths.styles).pipe($.plumber()).pipe(styles()).pipe($.connect.reload())

  $.watch(paths.views.files).pipe($.plumber()).pipe($.connect.reload())

  $.watch(paths.scripts).pipe($.plumber()).pipe($.connect.reload())

  $.watch(paths.test).pipe($.plumber())

  gulp.watch('bower.json', gulp.parallel(['bower']))
})

gulp.task('serve', function (cb) {
  runSequence('clean:tmp', ['start:client'], 'watch', cb)
})

gulp.task('serve:prod', function () {
  $.connect.server({
    root: [yeoman.dist],
    livereload: true,
    port: 9000,
  })
})

gulp.task(
  'test',
  gulp.series(['start:server:test'], function () {
    const testToFiles = paths.testRequire.concat(paths.scripts, paths.test)
    return gulp.src(testToFiles).pipe(
      $.karma({
        configFile: paths.karma,
        action: 'watch',
      }),
    )
  }),
)

// inject bower components
gulp.task('bower', function () {
  return gulp
    .src(paths.views.main)
    .pipe(
      wiredep({
        directory: `${yeoman.app}/bower_components`,
        ignorePath: '..',
      }),
    )
    .pipe(gulp.dest(`${yeoman.app}/views`))
})

/// ////////
// Build //
/// ////////

gulp.task('clean:dist', function (cb) {
  rimraf('./dist', cb)
})

gulp.task('html', function () {
  return gulp.src(`${yeoman.app}/views/**/*`).pipe(gulp.dest(`${yeoman.dist}/views`))
})

gulp.task(
  'client:build',
  gulp.series(['html', 'styles'], function () {
    const jsFilter = $.filter('**/*.js')
    const cssFilter = $.filter('**/*.css')

    return gulp
      .src(paths.views.main)
      .pipe($.useref({ searchPath: [yeoman.app, '.tmp'] }))
      .pipe(jsFilter)
      .pipe($.ngAnnotate())
      .pipe($.uglify())
      .pipe(jsFilter.restore)
      .pipe(cssFilter)
      .pipe($.minifyCss({ cache: true }))
      .pipe(cssFilter.restore)
      .pipe($.rev())
      .pipe($.revReplace())
      .pipe(gulp.dest(yeoman.dist))
  }),
)

gulp.task('images', function () {
  return gulp
    .src(`${yeoman.app}/images/**/*`)
    .pipe(
      $.cache(
        $.imagemin({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true,
        }),
      ),
    )
    .pipe(gulp.dest(`${yeoman.dist}/images`))
})

gulp.task('copy:extras', function () {
  return gulp.src(`${yeoman.app}/*/.*`, { dot: true }).pipe(gulp.dest(yeoman.dist))
})

gulp.task('copy:fonts', function () {
  return gulp.src(`${yeoman.app}/fonts/**/*`).pipe(gulp.dest(`${yeoman.dist}/fonts`))
})

gulp.task(
  'build',
  gulp.series(['clean:dist'], function () {
    runSequence(['images', 'copy:extras', 'copy:fonts', 'client:build'])
  }),
)

gulp.task('default', gulp.series(['build']))
