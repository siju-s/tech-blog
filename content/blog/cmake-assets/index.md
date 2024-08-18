---
title: "Cmake - Copy files to assets"
category: "Android"
---
Cmake allows to copy files to assets so that it can be packaged into your `apk` or `aar`.
To do this, use the following command in your `CmakeLists.txt`. 

```
set(ASSETS_DIR ${CMAKE_CURRENT_SOURCE_DIR}/../assets)

## Copies test.txt to Assets directory
file(COPY ${CMAKE_CURRENT_SOURCE_DIR}/test.txt
     DESTINATION ${ASSETS_DIR})

```
If `assets` directory doesn't exist, its created by `CMake` while running this command.