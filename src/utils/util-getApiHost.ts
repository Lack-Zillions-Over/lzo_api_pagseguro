const enum Host {
  production = 'https://api.pagseguro.com',
  development = 'https://sandbox.api.pagseguro.com',
}

const handle = async () => {
  const env = process.env.NODE_ENV;

  if (env === 'production') {
    return Host.production;
  } else {
    return Host.development;
  }
}

export default handle;