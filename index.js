const seriaport = require('serialport');


seriaport
  .list()
  .then(res => {
    const list = res.map(i => ({ 
      id: i.path, 
      title: i.manufacturer ? `${i.path} (${i.manufacturer})`: i.path 
    }));
    process.send(list);
  })
  .catch(() => process.send([]));
