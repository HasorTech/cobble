// Licensed under the Apache License, Version 2.0. See LICENSE.txt.
import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Community from '@site/hasor-tech/Community';
import LicenseBadge from '@site/static/img/projects/icons/license.svg';
import styles from './index.module.css';

const modules = [
    {name: 'cobble-lang', description: <Translate id="cobble.lang">字符串、集合、类型转换和通用工具。</Translate>},
    {name: 'cobble-dynamic', description: <Translate id="cobble.dynamic">基于 ASM 的动态代理与方法拦截。</Translate>},
    {name: 'cobble-loader', description: <Translate id="cobble.loader">资源扫描与加载、加载器编排和类隔离。</Translate>},
    {name: 'cobble-settings', description: <Translate id="cobble.settings">统一读取 Properties、XML 与 YAML 配置。</Translate>},
];

export default function Home() {
    const mascot = useBaseUrl('/img/projects/cobble.svg');
    const title = translate({id: 'cobble.home.title', message: 'Java 基础工具包'});
    const description = translate({
        id: 'cobble.home.description',
        message: '按需使用通用工具、动态代理、资源加载和配置读取。',
    });
    return <Layout title={title} description={description}>
        <main>
            <header className={styles.hero}>
                <div className={`container ${styles.heroLayout}`}>
                    <div>
                        <h1>{title}</h1>
                        <p className={styles.description}>{description}</p>
                        <div className={styles.actions}>
                            <Link className="button button--primary" to="/docs/guides/modules">
                                <Translate id="project.home.quickstart">快速开始</Translate>
                            </Link>
                            <Link className="button button--outline button--primary" to="/docs/guides/overview">
                                <Translate id="project.home.overview">认识 Cobble</Translate>
                            </Link>
                        </div>
                    </div>
                    <img className={styles.heroMascot} src={mascot} alt="" width="588" height="452" />
                </div>
            </header>
            <section className={`container ${styles.topics}`} aria-labelledby="cobble-modules">
                <h2 id="cobble-modules"><Translate id="cobble.modules.title">模块</Translate></h2>
                <div className={styles.grid}>
                    {modules.map(({name, description: summary}) => <article className={styles.card} key={name}>
                        <h3>{name}</h3>
                        <p>{summary}</p>
                        <Link to={`/docs/guides/modules#${name}`}><Translate id="project.home.details">了解更多</Translate></Link>
                    </article>)}
                </div>
            </section>
            <section className={styles.participation} aria-labelledby="participation-title">
                <div className="container">
                    <Community>
                        <div className={styles.participationHeading}>
                            <h2 id="participation-title"><Translate id="project.community.title">加入社区</Translate></h2>
                            <a className={styles.licenseBadge} href="https://www.apache.org/licenses/LICENSE-2.0.html"
                               target="_blank" rel="noopener noreferrer" aria-label="Apache License 2.0">
                                <LicenseBadge aria-hidden="true" focusable="false" />
                            </a>
                        </div>
                        <p><Translate id="project.community.description">交流使用经验、反馈问题，参与 Cobble 的改进。</Translate></p>
                    </Community>
                </div>
            </section>
        </main>
    </Layout>;
}
