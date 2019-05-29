import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Timeline.module.scss';

const Timeline = ({ fixed }) => (
  <div className={styles['box']}>
    <ul>
      <li className={styles['start']}>
        <span className={styles['point']} />
        <div className={styles['point__title']}>大手SI企業に入社</div>
        <div className={styles['point__time']}>
          <span>2016/4</span>
        </div>
      </li>

      <li className={styles['middle']}>
        <span className={styles['interval']} />
        <div className={styles['title']}>
          工場向け基幹系システムの開発プロジェクト
        </div>
        <div className={styles['info']}>
          基幹系パッケージシステムの導入プロジェクトに従事し、ウォーターフォールの各フェーズを担当
        </div>
        <div className={styles['name']}>エクセル</div>
        <div className={styles['time']}>
          <span>2016/5</span>
          <span>2017/6</span>
        </div>
      </li>

      <li className={styles['middle__point']}>
        <span className={styles['point']} />
        <div className={styles['point__title']}>物流系ベンチャーに入社</div>
        <div className={styles['point__time']}>
          <span>2017/7</span>
        </div>
      </li>

      <li className={styles['middle']}>
        <span className={styles['interval']} />
        <div className={styles['title']}>新米Webプログラマ</div>
        <div className={styles['info']}>
          細かいバグフィックスなどの、小規模の開発や運用を担当
        </div>
        <div className={styles['name']}>PHP, Laravel, React</div>
        <div className={styles['time']}>
          <span>2017/8</span>
          <span>2017/12</span>
        </div>
      </li>
      <li className={styles['middle']}>
        <span className={styles['interval']} />
        <div className={styles['title']}>新規プロダクト立ち上げ</div>
        <div className={styles['info']}>
          ハイブリッドスマホアプリ開発プロジェクトに、プロジェクト立ち上げからリリースまでの期間を従事
        </div>
        <div className={styles['name']}>Nuxt.js, Laravel, Cordova</div>
        <div className={styles['time']}>
          <span>2018/1</span>
          <span>2018/10</span>
        </div>
      </li>
      <li className={styles['middle']}>
        <span className={styles['interval']} />
        <div className={styles['title']}>
          API連携モジュールの大規模リファクタリング
        </div>
        <div className={styles['info']}>
          API連携モジュールの抜本的なリファクタリングを設計から実装まで担当
        </div>
        <div className={styles['name']}>Laravel, PHPUNIT, DDD</div>
        <div className={styles['time']}>
          <span>2018/11</span>
          <span>2019/2</span>
        </div>
      </li>
      <li className={styles['middle']}>
        <span className={styles['interval']} />
        <div className={styles['title']}>インフラ構成のコード化</div>
        <div className={styles['info']}>
          AWSマネジメントコンソールで構築されていたインフラ構成を、CloudFormationを用いて、コード化および自動化
        </div>
        <div className={styles['name']}>
          AWS全般, Capistrano, シェルスクリプト
        </div>
        <div className={styles['time']}>
          <span>2019/3</span>
          <span>2019/6</span>
        </div>
      </li>
    </ul>
    <hr />
    <a
      href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-05-07&ci=AWS00886902"
      target="_blank"
      rel="noopener noreferrer">
      <Img fixed={fixed} />
    </a>
  </div>
);

export default Timeline;
