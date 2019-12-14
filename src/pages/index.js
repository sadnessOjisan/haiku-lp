import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">俳句 meets babel and eslint</h2>
            <p className="text-white-50">
              ソースコード内から俳句を見つけ、babelでビルド時に教えることで、あなたの隠れた俳句力を可視化する。さらに業務中につい俳句で遊び過ぎないように、埋め込まれた俳句を検出する。
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <a href="https://github.com/sadnessOjisan/haiku-core">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center tet-lg-left">
                <h4>haiku-core</h4>
                <p className="text-black-50 mb-0">
                  俳句の算出のコアロジックです。babel,
                  eslintの双方から呼び出せる形で提供されます。
                </p>
              </div>
            </div>
          </div>
        </a>{' '}
        <a href="https://github.com/sadnessOjisan/babel-plugin-detect-haiku">
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">babel-plugin-detect-haiku</h4>
                    <p className="mb-0 text-white-50">
                      ビルド時に俳句を検出するbabel-plugin
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/sadnessOjisan/eslint-plugin-detect-haiku">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage2} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">eslint-plugin-detect-haiku</h4>
                    <p className="mb-0 text-white-50">
                      俳句を見つけ、警告するeslint-plugin
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/sadnessOjisan/independent-haiku-detect">
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">independent-haiku-detect</h4>
                    <p className="mb-0 text-white-50">
                      予約語を含めた俳句も検出できるツール。AST
                      parserを直接呼び出す。
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/sadnessOjisan/js-word-count-for-haiku">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage2} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">js-word-count-for-haiku</h4>
                    <p className="mb-0 text-white-50">
                      俳句かどうかを判定するモジュール
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/sadnessOjisan/js-word-kana">
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">js-word-kana</h4>
                    <p className="mb-0 text-white-50">
                      JSにおける関数名や予約語のカタカナ一覧辞書。575の文字数判定に使う。
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/sadnessOjisan/pubget">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage2} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">pubget</h4>
                    <p className="mb-0 text-white-50">
                      指定したライブラリのpublic関数を取得する。辞書を作るときのツール
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
