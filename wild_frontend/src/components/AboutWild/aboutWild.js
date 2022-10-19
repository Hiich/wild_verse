import React, { useLayoutEffect } from "react";
import "./aboutWild.css";
import bannerimg from "../../images/aboutus_banner_img.jpg";
import round from "../../images/round1.png";
import memo1 from "../../images/memories1.png";
import memo2 from "../../images/memories2.png";
import memo3 from "../../images/memories3.png";
import memo4 from "../../images/memories4.png";

import sli1 from "../../images/FullSizeRender2.JPG";
import sli2 from "../../images/IMG_0395.JPG";
import sli3 from "../../images/IMG_R_0057.JPG";
import sli4 from "../../images/SKULL 9.JPG";
import sli5 from "../../images/IMG_R_0032.JPG";
import sli6 from "../../images/FullSizeRender.JPG";
import sli7 from "../../images/IMG_0392.JPG";
import sli8 from "../../images/IMG_0396.JPG";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutWild = () => {
  const Banner = () => {
    return (
      <div
        className="about_sec"
        style={{ backgroundImage: `url(${bannerimg})` }}
      >
        <div className="banner_width">
          <div className="banner_text one">
            <div className="h1_tag">
              <h1>
                <b>BACK</b>GROUND
              </h1>
              <h1 className="text_u">
                <b>BACK</b>GROUND
              </h1>
            </div>
            <p>
              <i>
                “It’s difficult to say where I fit into electronic music right
                now, but my roots are definitely hip-hop,jazz, disco, Classical,
                Acid, Chicago House ,Detroit techno and Minimal ” he says. “ But
                then I discovered so many other kinds of music, that I
                integrated all those to become what I am and to do this kind of
                sound.”
              </i>
            </p>
            <p>
              It’s this combination of his heritage and a hunger to continue
              soaking up new influences that characterises his musical approach,
              blurring the lines between the past and present to create
              something truly timeless.
            </p>
          </div>
          <div className="banner_text two">
            <div className="h1_tag">
              <h1>
                <b>ARTIST</b> PROFILE
              </h1>
              <h1 className="text_u">
                <b>ARTIST</b> PROFILE
              </h1>
            </div>
            <p>
              DJ W!LD has gone from being a cult favourite of the Paris
              underground to a globally recognised house talent. Blending house,
              minimal, techno, acid , he is a DJ who can work any crowd thanks
              to his carefully curated selections and ability to go deep, dark
              or dirty whenever required.
              <br />
              He has also notably found his own respected imprints: first is The
              W Label that offers up the classic W!ld sound and remixers
              including Kerri Chandler, Chez Damier and Andres , Honey Dijon and
              many more and second is his new DAILYCID imprint. It seeks and
              supports new talent and in 2019 has put out some critically
              acclaimed new EPs as well as hosting its own stage at SXM festival
              and secret basements in London suburbs and tucked away spots in
              New York, Ibiza, Amsterdam, Berlin… What’s more, DAILYCID XXX held
              its own fetish themed party series in Ibiza in 2018 and brought
              back some of that illicit and hedonistic steel that made the White
              Isle so famous in the first place. More of these followed in
              London and ADE, with plenty more to come. W!LD has also launched
              Spit&Die, where the concept is one with his own track and one
              remix from one legend of electronic music. The first release
              kicked off with a minimal house masterpiece from the one and only
              BabyFord.
              <br />
              Long interested in contemporary art and fashion, W!LD has
              soundtracked catwalk shows for Paris Fashion Week, including for
              Vivienne Westwood, Thierry Mugler, Christian Lacroix. He also
              paints, always works to blend lights, music, and his art and
              continues to take risks. Despite many years in the game, then, DJ
              W!LD never rests, never stops listening and learning. It means he
              is one step ahead of the crowd and more vital than ever whilst
              never compromising his art.
            </p>
          </div>
        </div>
      </div>
    );
  };
  const Textsec = () => {
    return (
      <div className="was_sec">
        <h2>
          <b>W!LD</b> ART SAUVAGE
        </h2>
        <h2 className="text_u">
          <b>W!LD</b> ART SAUVAGE
        </h2>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
      </div>
    );
  };

  const VideoStrip = () => {
    return (
      <>
        <div className="vi_sec">
          <iframe
            src="https://www.youtube.com/embed/2fyOwP2C8v4"
            className="vi_img"
            title="yt"
          />
        </div>
      </>
    );
  };
  const Memories = () => {
    return (
      <div className="memori_sec">
        <img className="round" src={round} alt="" />
        <h2>
          <b>MEM</b>ORIES
        </h2>
        <h2 className="text_u">
          <b>MEM</b>ORIES
        </h2>
        <div className="memoimgsec">
          <img src={memo1} alt="" />
          <img src={memo2} alt="" />
          <img src={memo3} alt="" />
          <img src={memo4} alt="" />
          <div style={{ clear: `both` }}></div>
        </div>
      </div>
    );
  };

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(".horizontal__item");
    let t1 = gsap.timeline();

    setTimeout(() => {
      if (sections.length) {
        let maxWidth = 0;

        const getMaxWidth = () => {
          maxWidth = 0;
          let tempSection = [];
          sections?.forEach((section) => {
            tempSection.push(section);
          });
          let finalSec = tempSection.slice(0, 7);
          finalSec?.forEach((el) => {
            maxWidth += el.offsetWidth;
            maxWidth += gsap.getProperty(el, "marginLeft");
          });

          maxWidth += gsap.getProperty(".horizontal", "paddingLeft");
          maxWidth += gsap.getProperty(".horizontal__list", "paddingLeft");
          maxWidth += 20;

          return maxWidth;
        };

        getMaxWidth();

        // gsap.set("section.spacer", {
        //   minHeight:
        //     window.innerHeight -
        //     document.querySelector(".horizontal")?.offsetHeight,
        // });

        t1.to(sections, {
          x: () => `-${maxWidth - window.innerWidth}`,
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal",
            pin: ".wrapper",
            scrub: 0.5,
            end: () => `+=${maxWidth}`,
          },
        });

        sections.forEach((sct, i) => {
          ScrollTrigger.create({
            trigger: sct,
            start: () =>
              "top top-=" +
              (sct.offsetLeft - window.innerWidth / 2) *
                (maxWidth / (maxWidth - window.innerWidth)),
            end: () =>
              "+=" +
              sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
            toggleClass: { targets: sct, className: "active" },
          });
        });
      }

      // ScrollTrigger?.refresh();
    }, 1000);

    setTimeout(() => {
      ScrollTrigger?.refresh();
    }, 1500);

    return () => {
      t1?.kill();
    };
  }, []);

  return (
    <div>
      <div className="wrapper">
        {Banner()}
        {Textsec()}
        <section className="horizontal">
          <div className="horizontal__container content-container">
            <div className="horizontal__scroll">
              <div className="horizontal__list">
                <div className="horizontal__item">
                  <h2>ART Sauvage is the artistic branch of W!LD</h2>
                </div>
                <div className="horizontal__item">
                  <img src={sli1} alt="" />
                </div>
                <div className="horizontal__item">
                  <img src={sli2} alt="" />
                </div>
                <div className="horizontal__item">
                  <h2>
                    Through different techniques such as paintings, graffiti,
                    paintings, photography and stencil
                  </h2>
                </div>
                <div className="horizontal__item">
                  <img src={sli3} alt="" />
                </div>
              </div>
              <div className="horizontal__list">
                <div className="horizontal__item">
                  <img src={sli4} alt="" />
                </div>
                <div className="horizontal__item">
                  <img src={sli5} alt="" />
                </div>
                <div className="horizontal__item">
                  <h2>He explores the vanity of life in our modern world</h2>
                </div>
                <div className="horizontal__item">
                  <img src={sli6} alt="" />
                </div>
                <div className="horizontal__item">
                  <img src={sli7} alt="" />
                </div>
                <div className="horizontal__item">
                  <h2>
                    The finitude of existence, the ephemeral nature of the
                    present, the contingency of life, the non-existence of the
                    past
                  </h2>
                </div>
                <div className="horizontal__item">
                  <img src={sli8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {VideoStrip()}
        {Memories()}
      </div>
    </div>
  );
};

export default AboutWild;
