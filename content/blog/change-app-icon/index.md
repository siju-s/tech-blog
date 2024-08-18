---
title: "Android - Change app icon"
category: "Android"
date: '2024-04-22'
---

- We can change app icon using `activity-alias` in `AndroidManifest.xml`. Here, the `targetActivity` will be same but only the `alias-name` will be different.
- Label also can be changed like icon
- `intent-filter` is must to allow launching app when alias/icon is changed



```
 <activity-alias
            android:name=".MainActivityA"
            android:enabled="true"
            android:exported="true"
            android:icon="@mipmap/ic_launcher_a"
            android:label="@string/app_name_a"
            android:targetActivity=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity-alias>

        <activity-alias
            android:name=".MainActivityB"
            android:enabled="false"
            android:exported="true"
            android:icon="@mipmap/ic_launcher_b"
            android:label="@string/app_name_b"
            android:targetActivity=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity-alias>


```

Component name should contain the whole package name

```
   val packageManager = context.packageManager
    val componentName = "com.rwmobi.xlaunchericons.MainActivityA"

    packageManager.setComponentEnabledSetting(
        ComponentName(context, componentName),
        PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
        PackageManager.DONT_KILL_APP
    )
```    




### Credits
https://medium.com/@callmeryan/changing-the-android-app-icon-programmatically-c913550330d  
Code : https://github.com/ryanw-mobile/XLauncherIcons