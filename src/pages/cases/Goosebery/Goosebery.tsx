import styles from './Goosebery.module.scss';
import { createBem } from '@shared/lib/bem';
import { Case } from '@shared/ui/business_ui/Case';
import { cases } from '@shared/ui/business_ui/Case/config/cases.ts';
import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import GraphIcon from '@shared/assets/icons/graph.svg';
import PrototypeIcon from '@shared/assets/icons/prototypes.svg';
import FlowIcon from '@shared/assets/icons/flow.svg';
import vision1 from '@shared/assets/images/vision-1.png';
import vision2 from '@shared/assets/images/vision-2.png';
import vision3 from '@shared/assets/images/vision-3.png';
import testing1 from '@shared/assets/images/testing-1.png';
import testing2 from '@shared/assets/images/testing-2.png';
import testing3 from '@shared/assets/images/testing-3.png';
import testing4 from '@shared/assets/images/testing-4.png';
import preview from '@shared/assets/videos/preview.mp4';

export const Goosebery: React.FC = () => {
  const location = useLocation();
  const caseId = location.pathname.split('/').pop();
  const bem = createBem('goosebery', styles);

  const caseData = React.useMemo(() => {
    return cases.find((item) => item.id === caseId);
  }, [caseId]);

  return (
    <>
      {caseData && <Case page {...caseData} />}
      <div className={bem()}>
        <div className={bem('inner')}>
          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <h2 className={bem('heading', '2')}>Product</h2>
            <p className={classNames(bem('heading', '4'), bem('pt-serif'))}>
              — Gooseberry: an app for people looking to make new connections,
              whether in their local area or while traveling, as well as helping
              users better and faster acclimate to their living environment, and
              stay in touch with friends and acquaintances.
            </p>
            <p
              className={classNames(
                bem('body', ['1', 'italic']),
                bem('pt-serif')
              )}
            >
              To comply with my non-disclosure agreement, I have omitted and
              obfuscated confidential information in this case study. All
              information in this case study is my own and does not necessarily
              reflect the views of Gooseberry.
            </p>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                Challenge
              </h4>
              <div>
                <h3 className={bem('heading', '3')}>
                  31% of Gooseberry users are dropping off the app 1.5 month
                  after the initial setup.
                </h3>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  A notable segment of Gooseberry users experience a decline in
                  engagement after their initial interactions with the app,
                  indicating potential gaps in the app’s ongoing engagement
                  strategies.
                </p>
              </div>
            </div>
            <div className={bem('graph-image')}>
              <GraphIcon />
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                MY ROLE AND TEAM
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  I worked on a team with 2 designers, the product owners,
                  managers and engineering team, and was responsible for the
                  visual part of the design as well as conducting researches to
                  gather feedback, identify insights, and help conceptualize
                  ideas and drive decision-making.
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                USER RESEARCH
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  As a team we conducted qualitative research to gather insights
                  and validate our assumptions. Through card sorting, the team
                  and I outlined the main problem and research objectives. I
                  also led qualitative user interviews and was responsible for
                  writing interview scripts, which led us to...
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('cards')}>
              <div className={bem('cards-wrapper')}>
                <h5 className={bem('cards-title')}>Problem</h5>
                <div className={bem('cards-inner')}>
                  <div className={bem('cards-item', 'red')}>
                    Users experience stress during relocation or travel, making
                    it harder to focus on forming connections.
                  </div>
                  <div className={bem('cards-item', 'red')}>
                    Users, especially those new to an area or in transit,
                    struggle to build relationships and adapt to their new
                    surroundings quickly.
                  </div>
                  <div className={bem('cards-item', 'red')}>
                    Users face difficulty transitioning from virtual
                    introductions to in-person meet-ups.
                  </div>
                  <div className={bem('cards-item', 'red')}>
                    Absence of a clear, accessible path to move from online
                    connections to real-world interactions without awkwardness
                    or hassle.
                  </div>
                  <div className={bem('cards-item', 'red')}>
                    Absence of a smooth way to establish a local support
                    network, meet like-minded people, and access relevant
                    information.
                  </div>
                  <div className={bem('cards-item')}>
                    Users have-stress periods of relocation or travel, while
                    they expect an experience that not only encourages, but
                    sustains them.
                  </div>
                </div>
              </div>
              <div className={bem('cards-wrapper')}>
                <h5 className={bem('cards-title')}>Research Goals</h5>
                <div className={bem('cards-inner', 'big')}>
                  <div className={bem('cards-item', 'yellow')}>
                    Identify the specific types of stressors users experience
                    during relocation or travel, and how these impact their
                    ability to socialize and engage with new people.
                  </div>
                  <div className={bem('cards-item', 'yellow')}>
                    What are the most common challenges faced by users in
                    relocation or high-stress travel scenarios?
                  </div>
                  <div className={bem('cards-item', 'yellow')}>
                    Discover the most effective ways to help users establish
                    quick, meaningful connections, especially for those new to
                    an area.
                  </div>
                  <div className={bem('cards-item')}>
                    How do users currently try to establish connections or find
                    local information during transition periods?
                  </div>
                  <div className={bem('cards-item', 'yellow')}>
                    What criteria do users consider most important when deciding
                    to connect with others (e.g., shared interests, location,
                    similar background)?
                  </div>
                  <div className={bem('cards-item', 'yellow')}>
                    How quickly do users expect to meet others when they join
                    the app, and what would an ideal timeline look like?
                  </div>
                  <div className={bem('cards-item', 'yellow')}>
                    Understand the challenges users face in converting virtual
                    introductions into real-world meetings and explore features
                    that could ease this transition.
                  </div>
                  <div className={bem('cards-item')}>
                    What prevent users from moving from virtual interactions to
                    in-person meet-ups?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                Customer problem
              </h4>
              <div>
                <h3 className={bem('heading', '3')}>
                  63% of those surveyed have high-stress periods of relocation
                  or travel, while users expect an experience that not only
                  encourages, but sustains them.
                </h3>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  A significant portion of Gooseberry users, particularly those
                  who are new to a living area or traveling, find it difficult
                  to establish meaningful connections quickly.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Despite the app's aim to foster new relationships and help
                  users acclimate to their environment, many users struggle to
                  convert virtual introductions into real-world connections.
                </p>
              </div>
            </div>
          </div>

          <div className={bem('item', 'white')}>
            <div className={classNames('container', 'container--small')}>
              <h4
                className={classNames(
                  bem('body', ['1', 'semibold']),
                  bem('white-title')
                )}
              >
                WHAT USERS ARE FEELING
              </h4>
              <div className={bem('white-content')}>
                <div className={bem('white-item')}>
                  <p className={bem('body', ['1', 'italic'])}>
                    “Moving to a new city is always overwhelming, and while I’ve
                    met some people, it’s still been tough to{' '}
                    <b>turn those first chats into lasting connections.</b>”
                  </p>
                </div>
                <div className={bem('white-item')}>
                  <p className={bem('body', ['1', 'italic'])}>
                    “I expected things to be easier during my travels, but I’ve
                    found it <b>harder than I thought to make friendships</b>{' '}
                    stick beyond the initial introductions.”
                  </p>
                </div>
                <div className={bem('white-item')}>
                  <p className={bem('body', ['1', 'italic'])}>
                    “It’s great to meet new people, but I need{' '}
                    <b>more help transitioning from virtual conversations</b> to
                    building real relationships in a new place.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                HOW MIGHT WE?
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  <b>HMW</b> help users convert virtual introductions into
                  real-world connections?
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  <b>HMW</b> build an environment that encourages long-term
                  connection rather than just initial interaction?
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  <b>HMW</b> support users in sustaining relationships even as
                  they travel or relocate?
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                SUCCESS METRICS
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Our main metric was retention rate one and a half month after
                  installing the app. We expected the retention rate to increase
                  by at least 10%.
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                HYPOTHESIS
              </h4>
              <div>
                <h3 className={bem('heading', '3')}>
                  Enabling users to interact with each other in real time
                  through events will facilitate ease of establishing steady
                  introductions and communication as well as decrease stress
                  levels when relocating or traveling.
                </h3>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                PROTOTYPING
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Based on our research, we knew that it was not enough for
                  users to establish connections through chats, let alone
                  meaningful interactions.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Moreover, getting to know someone in a new city or town seemed
                  overwhelming, and the majority of users pointed to the fact
                  that direct interaction with other users nearby would help
                  acclimatize and socialize faster, which would have a generally
                  positive impact on mental health.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Taking the things above into consideration, I figured out that
                  we should not primarily tie communication to chats and
                  restrict users from having a real conversation. Giving an
                  opportunity that would allow users to directly participate in
                  live activities as well as create them, would reduce that
                  virtual introduction gap and simplify the way users could get
                  to know each other.{' '}
                  <b>
                    However, it was important not to move interactions
                    completely beyond the app.
                  </b>
                </p>
                <div className={bem('prototype-image')}>
                  <PrototypeIcon />
                </div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  I’ve build some sketches to visualize how the flow might look
                  to users. When producing the flow, it was crucial to make it
                  as simple as possible, so that users can quickly find what’s
                  they were missing.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Besides that, I’ve come up with an idea that{' '}
                  <b>we should not limit users to just personal events</b>{' '}
                  because there could be a high risk users would just make a few
                  interactions and never come back again.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  So I decided that we could complete the overall picture with
                  events from organizations. In that way users would be more
                  engaged with the app, in particular, book organization events.{' '}
                  <b>
                    Additionally, by attracting organizations to the app, we
                    would significantly expand the number of users and potential
                    revenue from transactions.
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <h4 className={bem('body', ['1', 'semibold'])}>FLOW</h4>
            <div className={bem('flow-image')}>
              <FlowIcon />
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                VISION
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  We aimed to make user experience as streamlined as possible so
                  that users could swiftly search for the events. We added a
                  primary button next to the search field so it was always in
                  front of their eyes.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  At the same time, users could explore all events at a glance.
                  To make them easy to browse and not look overwhelming, I
                  decided to display them as cards with short and clear
                  information inside. Users could effortlessly scan the page and
                  find something to their liking. Additionally, we provided
                  users with multiple sorting options.
                </p>
                <div className={bem('vision-images')}>
                  <div className={bem('vision-item')}>
                    <img src={vision1} alt="vision screenshot" />
                  </div>
                  <div className={bem('vision-item')}>
                    <img src={vision2} alt="vision screenshot" />
                  </div>
                  <div className={bem('vision-item')}>
                    <img src={vision3} alt="vision screenshot" />
                  </div>
                </div>
                <video className={bem('video')} src={preview} controls />
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                USER TESTING
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Before finilizing the vision, we had a concern that we might
                  have troubles with handling personal event requests because
                  users didn’t want just anyone to meet or visit their house, to
                  put it simply. All users were able to send requests for
                  joining an event, but the final decision was still made by
                  event creator on the other side.{' '}
                  <b>
                    So to validate our hypothesis, we decided to launch an A/B
                    test to a group of our customers.
                  </b>
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Users could easily get offended or frustrated by receiving
                  constant rejections so I made a decision that we should
                  communicate the event join message in a different way so that
                  users didn’t blame themselves if they were denied.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Moreover, to prevent one user from getting numerous requests
                  to join an event and other users from getting their hopes up,
                  I suggested that the number of remaining seats should be
                  displayed.
                </p>
              </div>
            </div>
            <div className={bem('testing-images')}>
              <div className={bem('testing-item')}>
                <h5
                  className={classNames(
                    bem('body', ['1', 'semibold']),
                    bem('testing-title')
                  )}
                >
                  Control (A)
                </h5>
                <div className={bem('testing-wrapper')}>
                  <img src={testing1} alt="testing screenshot" />
                  <img src={testing2} alt="testing screenshot" />
                </div>
              </div>
              <div className={bem('testing-item')}>
                <h5
                  className={classNames(
                    bem('body', ['1', 'semibold']),
                    bem('testing-title')
                  )}
                >
                  Variation (B)
                </h5>
                <div className={bem('testing-wrapper')}>
                  <img src={testing3} alt="testing screenshot" />
                  <img src={testing4} alt="testing screenshot" />
                </div>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('flex')}>
              <h4
                className={classNames(
                  bem('flex-left'),
                  bem('body', ['1', 'semibold', 'subtitle'])
                )}
              >
                RESULTS
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  After the experiment we saw first positive results and
                  realized the event feature was worth investing more time and
                  effort. In the end, we decided to proceed with the variation
                  B, as the users found it more intuitive and user-friendly.
                </p>
                <h3 className={bem('heading', '3')}>
                  After rolling it out to 100% of users, we’ve got 17% increase
                  in customer retention.
                </h3>
              </div>
            </div>
          </div>

          <div className={classNames('footer', bem('footer'))}>
            <div
              className={classNames(
                bem('footer-inner'),
                'container',
                'container--small'
              )}
            >
              <div className={bem('footer-item')}>
                <h5 className={bem('footer-title')}>Location</h5>
                <p className={bem('footer-text')}>Kyiv, Ukraine</p>
              </div>
              <div className={bem('footer-item')}>
                <h5 className={bem('footer-title')}>Telegram</h5>
                <a
                  href={'https://t.me/Lannox01'}
                  className={bem('footer-text')}
                  target={'_blank'}
                >
                  @Lannox01
                </a>
              </div>
              <div className={bem('footer-item')}>
                <h5 className={bem('footer-title')}>Contact</h5>
                <a
                  href={'mailto:gula31052001@gmail.com'}
                  className={bem('footer-text')}
                  target={'_blank'}
                >
                  gula31052001@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
