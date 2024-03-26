#!/bin/bash

# Build script to copy necessary files and create the build directory

# Step 1: Create build directory if it doesn't exist
BUILD_DIR="build"
if [ ! -d "$BUILD_DIR" ]; then
    mkdir "$BUILD_DIR"
fi

# Step 2: Copy source files to build directory
echo "Copying source files..."
cp src/* "$BUILD_DIR/"

echo "Build completed successfully!"
