---
sidebar_position: 1
title: Cobble 介绍
description: 按需选用 Cobble 的通用工具、动态代理、资源加载和配置模块。
---

Cobble 是一套可按需引入的 Java 工具库，提供通用工具、动态代理、资源扫描与加载、配置读取等能力。各模块可独立使用，适合在 Java 应用和框架中复用。

| 需求 | 模块 |
| --- | --- |
| 处理字符串、集合与类型转换 | [cobble-lang](modules.md#cobble-lang) |
| 生成动态代理或增强已有对象 | [cobble-dynamic](modules.md#cobble-dynamic) |
| 扫描和加载项目资源 | [cobble-loader](modules.md#cobble-loader) |
| 用统一接口读取配置 | [cobble-settings](modules.md#cobble-settings) |

当前源码使用 Java 17 构建。模块的 Maven groupId 为 `net.hasor`，artifactId 与上表中的模块名一致。只引入实际用到的模块即可。
