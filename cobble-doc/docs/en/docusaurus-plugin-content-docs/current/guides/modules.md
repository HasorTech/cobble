---
sidebar_position: 2
title: Module overview
---

## cobble-lang

Provides `StringUtils`, `CollectionUtils`, and type conversion utilities. For example, use `StringUtils.isBlank(text)` to check whether text contains only whitespace or is empty.

## cobble-dynamic

Uses ASM to create dynamic proxies. Add method interception to a type or existing object, or make a proxy implement additional interfaces.

## cobble-loader

Load classpath, directory, and JAR/ZIP resources. Select paths by prefix, suffix, or regular expression, and combine loaders when resources live in multiple locations.

## cobble-settings

Read Properties, XML, and YAML through one interface. When loading several files, later values override earlier values with the same key. For example, load `app.yaml` from the classpath and read the application name.

```java
import net.hasor.cobble.setting.DefaultSettings;
import net.hasor.cobble.setting.Settings;

Settings settings = new DefaultSettings("app.yaml");
String name = settings.getString("app.name");
```
