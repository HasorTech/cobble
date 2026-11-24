// Licensed under the Apache License, Version 2.0. See LICENSE.txt.
const {themes} = require('prism-react-renderer');
const ecosystem = require('./hasor-tech/config');
const {onlineOrigins} = require('./hasor-tech/routes');

module.exports = ecosystem({
    title: 'Cobble',
    tagline: 'Java 基础工具包',
    url: process.env.DOCS_URL || onlineOrigins.cobble,
    baseUrl: process.env.DOCS_BASE_URL || '/',
    trailingSlash: true,
    favicon: 'img/favicon/cobble.svg',
    organizationName: 'HasorTech',
    projectName: 'cobble',
    onBrokenLinks: 'throw',
    onBrokenAnchors: 'throw',
    markdown: {
        hooks: {onBrokenMarkdownLinks: 'throw', onBrokenMarkdownImages: 'throw'},
    },
    i18n: {defaultLocale: 'zh-cn', locales: ['zh-cn', 'en']},
    presets: [['classic', {
        blog: false,
        docs: {
            path: 'docs/cn/docusaurus-plugin-content-docs/current',
            sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {customCss: require.resolve('./src/css/custom.css')},
    }]],
    themes: [[require.resolve('@easyops-cn/docusaurus-search-local'), {
        hashed: true,
        language: ['en', 'zh'],
        indexBlog: false,
        indexPages: true,
    }]],
    themeConfig: {
        colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
        prism: {theme: themes.github, additionalLanguages: ['java', 'bash', 'diff', 'json']},
        footer: {copyright: `Copyright © ${new Date().getFullYear()} Cobble. Built with Docusaurus.`},
    },
}, 'cobble');
