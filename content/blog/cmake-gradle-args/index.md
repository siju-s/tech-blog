---
title: "Cmake - Pass build flags from gradle file"
category: "Android"
date: "2024-04-20"
---
To pass custom build flags from `build.gradle` file to Cmake, add the following to
`android` block in `app\build.gradle` file

```
 externalNativeBuild {
        cmake {            
            arguments "-DTEST_BOOL_FLAG=1", "-DTEST_STRING_VAR=1.0.0.0"
        }
    }
```

Here, we have defined 2 custom build flags for `cmake`. 
1. `TEST_BOOL_FLAG` is a boolean variable with value set to 1 which means `True`
2. `TEST_STRING_VAR` is a String variable with value `1.0.0.0`

These 2 variables will be available to `CMake` file and can be accessed as `${TEST_BOOL_FLAG}` and 
`${TEST_STRING_VAR}` respectively.