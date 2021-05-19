// Run this script as a Web Worker so it doesn't block the
// browser's main thread.
// See: index.html.
onmessage = (e) => {
    const file = e.data[0];
    let data;

    // Create and mount FS work directory.
    if (!FS.analyzePath('/work').exists) {
        FS.mkdir('/work');
    }
    FS.mount(WORKERFS, { files: [file] }, '/work');

    // Run the Wasm function we exported.
    const info = Module.run('/work/' + file.name);
    console.log(info);

    // Post message back to main thread.
    postMessage(info);

    // Unmount the work directory.
    FS.unmount('/work');
}

// Import the Wasm loader generated from our Emscripten build.
self.importScripts('mp4info.js');