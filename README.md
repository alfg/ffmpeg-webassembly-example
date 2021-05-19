# FFmpeg WebAssembly Example
A minimal example of building FFmpeg's `libav` to WebAssembly via [Emscripten](https://emscripten.org/) using Docker.

https://dev.to/alfg/ffmpeg-webassembly-2cbl

## Usage 
Build the WebAssembly files using Docker and copy the output to `www/`:
```
docker-compose run mp4info make
cp -a dist/. www/
```

Run the server:
```
npm install express
node server.js
```

Load the demo in a browser and select the `tears-of-steel-10s.mp4` file:

http://localhost:8080/www


## License
MIT
