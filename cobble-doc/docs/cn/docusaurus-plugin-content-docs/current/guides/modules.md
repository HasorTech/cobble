---
sidebar_position: 2
title: 模块概览
---

## cobble-lang

提供 `StringUtils`、`CollectionUtils` 和类型转换工具。需要判断文本是否为空白时，可以调用 `StringUtils.isBlank(text)`。

## cobble-dynamic

基于 ASM 提供动态代理。可针对类型或已有对象增加方法拦截，也可为代理实现接口。

## cobble-loader

按应用的资源位置选择加载器，可读取 classpath、目录和 JAR/ZIP 资源。扫描时可按前缀、后缀或正则表达式筛选路径，也可以组合多个加载器。

## cobble-settings

用统一接口读取 Properties、XML 和 YAML。读取多个文件时，后加载的同名配置会覆盖先加载的值。例如，加载 classpath 中的 `app.yaml` 后读取应用名称。

```java
import net.hasor.cobble.setting.DefaultSettings;
import net.hasor.cobble.setting.Settings;

Settings settings = new DefaultSettings("app.yaml");
String name = settings.getString("app.name");
```
