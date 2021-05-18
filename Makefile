dist/mp4info.wasm.js:
	mkdir -p dist && \
	emcc --bind \
	-O3 \
	-L/opt/ffmpeg/lib \
	-I/opt/ffmpeg/include/ \
	-s EXTRA_EXPORTED_RUNTIME_METHODS="[FS, cwrap, ccall, getValue, setValue, writeAsciiToMemory]" \
	-s INITIAL_MEMORY=268435456 \
	-s ASSERTIONS=1 \
	-s STACK_OVERFLOW_CHECK=2 \
	-s PTHREAD_POOL_SIZE_STRICT=2 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-lavcodec -lavformat -lavfilter -lavdevice -lswresample -lpostproc -lswscale -lavutil -lm \
	-pthread \
	-lworkerfs.js \
	-o dist/mp4info.js \
	src/mp4info-wrapper.cpp