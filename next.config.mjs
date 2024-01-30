/** @type {import('next').NextConfig} */
const nextConfig = {
webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      use: [
        {
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    })

    return config
  },
}

export default nextConfig;
