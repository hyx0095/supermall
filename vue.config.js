module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        /* 脚手架已经配置了的：'@': 'src' */
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
