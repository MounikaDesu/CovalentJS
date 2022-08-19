const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './libs/components/src/index.ts',
    styles: './libs/components/styles/styles.scss',
    theme: './libs/components/styles/theme/theme.scss',

    actionRibbon: './libs/components/src/action-ribbon/action-ribbon.ts',
    alert: './libs/components/src/alert/alert.ts',
    appShell: './libs/components/src/app-shell/app-shell.ts',
    button: './libs/components/src/button/button.ts',
    checkbox: './libs/components/src/checkbox/checkbox.ts',
    circularProgress:
      './libs/components/src/circular-progress/circular-progress.ts',
    dialog: './libs/components/src/dialog/dialog.ts',
    drawer: './libs/components/src/drawer/drawer.ts',
    emptyState: './libs/components/src/empty-state/empty-state.ts',
    formField: './libs/components/src/formfield/formfield.ts',
    icon: './libs/components/src/icon/icon.ts',
    iconButton: './libs/components/src/icon-button/icon-button.ts',
    iconCheckbox: './libs/components/src/icon-checkbox/icon-check-toggle.ts',
    iconRadio: './libs/components/src/icon-radio/icon-radio-toggle.ts',
    linearProgress: './libs/components/src/linear-progress/linear-progress.ts',
    list: './libs/components/src/list/list.ts',
    listItem: './libs/components/src/list/list-item.ts',
    listExpansion: './libs/components/src/list/list-expansion.ts',
    listRadioItem: './libs/components/src/list/radio-list-item.ts',
    menu: './libs/components/src/menu/menu.ts',
    radio: './libs/components/src/radio/radio.ts',
    select: './libs/components/src/select/select.ts',
    slider: './libs/components/src/slider/slider.ts',
    sliderRange: './libs/components/src/slider/slider-range.ts',
    snackBar: './libs/components/src/snackbar/snackbar.ts',
    switch: './libs/components/src/switch/switch.ts',
    tab: './libs/components/src/tab/tab.ts',
    tabBar: './libs/components/src/tab/tab-bar.ts',
    textArea: './libs/components/src/textarea/textarea.ts',
    textField: './libs/components/src/textfield/textfield.ts',
    toolbar: './libs/components/src/toolbar/toolbar.ts',
    topAppBar: './libs/components/src/top-app-bar/top-app-bar.ts',
    topAppBarFixed: './libs/components/src/top-app-bar/top-app-bar-fixed.ts',
    treeList: './libs/components/src/tree-list/tree-list.ts',
    treeListItem: './libs/components/src/tree-list/tree-list-item.ts',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        include: /libs\/components\/src/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true, // defaults to false
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.s(c|a)ss$/,
        include: /libs\/components\/styles/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
            },
          },
          'extract-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        './libs/components/package.json',
        { from: './libs/icons/covalent-icons.css', to: './icons' },
        { from: './libs/icons/covalent-icons.eot', to: './icons' },
        { from: './libs/icons/covalent-icons.svg', to: './icons' },
        { from: './libs/icons/covalent-icons.ttf', to: './icons' },
        { from: './libs/icons/covalent-icons.woff', to: './icons' },
        { from: './libs/icons/favicon.ico', to: './icons' },
      ],
    }),
  ],
};
