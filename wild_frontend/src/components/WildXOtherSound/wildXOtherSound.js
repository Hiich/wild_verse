import React from "react";
import "./wildXOtherSound.css";

import eevd from "../../videos/othersound_banner.m4v";
import ob from "../../images/othersound_black_bg.png";
import stb from "../../images/sec_two_bg.svg";
import ul from "../../images/user_logo.png";
import sg from "../../images/solid-grooves.png";
import kj from "../../images/kyle-johnston.png";
import os from "../../images/othersound.png";
import ptwo from "../../images/pointer_two.png";
import pthree from "../../images/pointer_three.png";
import pfour from "../../images/pointer_four.png";
import pfive from "../../images/pointer_five.png";
import ttwo from "../../images/ticket_two.png";
import tthree from "../../images/ticket_three.png";
import gr from "../../images/gift_re.png";
import currency from "../../images/currency.png";
import Wave from "react-wavify";
import { useMedia } from "react-use";
import QuantitySection from "./QuantitySection";

const WildXOtherSound = () => {
  const isMobileView = useMedia("(max-width: 768px)");

  return (
    <>
      <style>
        {"\
        .App{\
          overflow:visible;\
        }\
      "}
      </style>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="vidimg">
              <video
                preload="metadata"
                loop
                muted
                autoPlay
                playsInline="true"
                className="videoimg"
                src={eevd + "#t=0.001"}
                alt="sample-1"
              />
              {/* <img src={ob} alt="" /> */}
            </div>
            <h1 className="h1_tag">
              OTHERSOUND IS A NFT PLATFORM THROUGH WHICH PROMINENT MUSIC
              PERFORMERS WILL LAUNCH THEIR COLLECTION INCLUDING MANY ADVANTAGES
              FOR THEIR COMMUNITY
            </h1>
          </div>
        </div>
      </div>
      <div className="sec_two">
        <div>
          <Wave
            fill="url(#gradient)"
            paused={false}
            options={{
              amplitude: 300,
              speed: 0.08,
              points: isMobileView ? 2 : 8,
              height: 50,
            }}
            className="waves"
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="30%" stopColor="#ffff00" />
                <stop offset="90%" stopColor="#000000" />
              </linearGradient>
            </defs>
          </Wave>
        </div>
        <div className="container">
          <div className="row">
            <div className="sec_two_text">
              <h2>
                EACH MUSIC PERFORMER WILL SELL 50 TO 1000 ART & MUSIC NFTS
                THROUGH OUR PLATFORM. WITH A PURPOSE.
              </h2>
              <p>
                Those NFTs are also a key access to lists, invitations,
                exclusive events, giveaways and many other advantages for the
                NFT holders. The platform is set to launch new collections on a
                regular basis, starting with DJ W!LD.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="sectwopoints">
              <div className="sectwo_points">
                <div className="imginner">
                  <img className="userimg" src={sg} alt="" />
                </div>
                <h2>DJ W!LD</h2>
                <p>Solid Grooves</p>
                <button>25.09.22</button>
              </div>
              <div className="sectwo_points">
                <div className="imginner">
                  <img src={ul} alt="" />
                </div>
                <h2>TBA</h2>
                <p>Music on</p>
                <button>NOV 22</button>
              </div>
              <div className="sectwo_points">
                <div className="imginner">
                  <img src={ul} alt="" />
                </div>
                <h2>TBA</h2>
                <p>Crosstown rebels</p>
                <button>NOV 22</button>
              </div>
              <div className="sectwo_points">
                <div className="imginner">
                  <img src={ul} alt="" />
                </div>
                <h2>TBA</h2>
                <p>Hot creations</p>
                <button>DEC 22</button>
              </div>
              <div className="sectwo_points">
                <div className="imginner">
                  <img src={ul} alt="" />
                </div>
                <h2>TBA</h2>
                <p>Solid Grooves</p>
                <button>DEC 22</button>
              </div>
            </div>
          </div>
          <QuantitySection/>
        </div>
      </div>
      <div className="sec_three" style={{ backgroundImage: `url(${kj})` }}>
        <div className="container">
          <div className="row">
            <h2>
              GIVING MUSIC LOVERS THE OPPORTUNITY TO GET CLOSER TO THEIR
              FAVORITE ARTISTS.
            </h2>
          </div>
        </div>
      </div>
      <div className="sec_four_points">
        <div className="container">
          <div className="row">
            <div className="col_width_33">
              <div className="sec_pointers first">
                <img src={os} alt="" />
                <h3>
                  OTHERSOUND WAS CREATED FOR MUSIC PERFORMERS AND LOVERS TO
                  BENEFIT FROM ALL THE ADVANTAGES THAT WEB3 OFFERS.
                </h3>
                <p>
                  Web3 capabilities allow deeper and meaningful interactions
                  with music performers as well as proposing various offers and
                  accesses from the othersound platform.
                </p>
              </div>
            </div>
            <div className="col_width_66">
              <div className="sec_pointer two">
                <div className="p_text">
                  <h3>EXCLUSIVE ACCESS TO EVENTS</h3>
                  <p>
                    Music performers will give NFT holders special access to
                    their own events.
                  </p>
                </div>
                <img className="points" src={ttwo} alt="" />
                <img className="bg_img" src={ptwo} alt="" />
              </div>
              <div className="sec_pointer three">
                <div className="p_text">
                  <h3>GIFTS AND REWARDS</h3>
                  <p>
                    NFT holders will receive exclusive gifts from music
                    performers and the othersound platform, such as exclusive
                    tracks, vinyls and other products.
                  </p>
                </div>
                <img className="points" src={gr} alt="" />
                <img className="bg_img" src={pthree} alt="" />
              </div>
              <div className="sec_pointer four">
                <div className="p_text">
                  <h3>WHITELISTS FOR OTHER DJ COLLECTIONS</h3>
                  <p>
                    NFT holders of one or several collections will be granted
                    whitelists for future collections.
                  </p>
                </div>
                <img className="points" src={currency} alt="" />
                <img className="bg_img" src={pfour} alt="" />
              </div>
              <div className="sec_pointer five">
                <div className="p_text">
                  <h3>OTHERSOUND EVENTS</h3>
                  <p>
                    As our community grows, we will organise events exclusively
                    for the NFT holders, with music performers featured on our
                    platform.
                  </p>
                </div>
                <img className="points" src={tthree} alt="" />
                <img className="bg_img" src={pfive} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <QuantitySection/>
          </div>
        </div>
      </div>
    </>
  );
};

export default WildXOtherSound;
