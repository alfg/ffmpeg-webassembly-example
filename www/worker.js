onmessage = (e) => {
    const file = e.data[0];

    let data;

    console.log('worker', file);

    if (!FS.analyzePath('/work').exists) {
        FS.mkdir('/work');
    }
    FS.mount(WORKERFS, { files: [file] }, '/work');
    const info = Module.run('/work/' + file.name);
    console.log(info);

    postMessage(info);

    FS.unmount('/work');
}
self.importScripts('mp4info.js');