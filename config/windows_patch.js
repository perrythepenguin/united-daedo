try {
  require('os').networkInterfaces();
}
catch (e) {
  require('os').networkInterfaces = () => ({});
}
