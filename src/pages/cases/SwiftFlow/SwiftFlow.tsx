import styles from './SwiftFlow.module.scss';
import { createBem } from '@shared/lib/bem';
import { Case } from '@shared/ui/business_ui/Case';
import { cases } from '@shared/ui/business_ui/Case/config/cases.ts';
import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import SwiftFlowStepsIcon from '@shared/assets/icons/swiftflow-steps.svg';
import PrototypeIcon from '@shared/assets/icons/swifthflow-prototype.svg';
import FlowIcon from '@shared/assets/icons/swiftflow-flow.svg';
import data from '@shared/assets/images/swiftflow-data.png';
import testing1 from '@shared/assets/images/swiftflow-testing-1.png';
import testing2 from '@shared/assets/images/swiftflow-testing-2.png';
import testing3 from '@shared/assets/images/swiftflow-testing-3.png';
import testing4 from '@shared/assets/images/swiftflow-testing-4.png';

export const SwiftFlow: React.FC = () => {
  const location = useLocation();
  const caseId = location.pathname.split('/').pop();
  const bem = createBem('swiftflow', styles);

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
              — SwiftFlow: a logistics company that owns training assets and
              provides them to large-scale corporations to manage their
              personnel.
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
              reflect the views of SwiftFlow.
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
                  Every minor price change in a contract requires manual
                  updating of an awful lot of individual courses, which is
                  time-consuming and prone to errors.
                </h3>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Price setup is the key revenue drivers for SwiftFlow.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  When a contract changes, the company currently has to manually
                  adjust the daily rate for individual courses per customer.
                  With multiple negotiated rates and discounts based on course
                  categories, updating prices efficiently across multiple
                  courses for each client is overwhelmingly challenging.
                </p>
                <div className={bem('graph-image')}>
                  <SwiftFlowStepsIcon />
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
                MY ROLE AND TEAM
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  I worked on a team with 2 designers, the product owners,
                  managers and engineering team, and was responsible for the
                  visual part of the design and took the lead of the
                  architecture vision.
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
                COLLABORATING WITH ENGINEERS
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Before starting the design process, it was crucial to align
                  the functional architecture with the engineering team to
                  identify possible solutions and their implementation. In
                  addition, at the time we were working on the second part of
                  the platform, so it was important to stick to the design
                  system and not come up with any new layouts to save time and
                  reuse existing components.
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
                DATA
              </h4>
              <div>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Since we already had a solution with setting up companies in
                  the first release, I decided that we should figure out how we
                  could implement the pricing setup part into the existing flow
                  so it would be interconnected with the training platform.
                </p>
              </div>
            </div>
            <img
              className={bem('data-image')}
              src={data}
              alt={'swiftflow data'}
            />
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
                  <b>HMW</b> we streamline the contract rate updates to apply
                  changes across all relevant courses automatically?
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  <b>HMW</b> might we categorize courses and apply group
                  discounts to reduce repetitive manual updates?
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  <b>HMW</b> might we implement a pricing update process that
                  minimizes errors and increases accuracy?
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
                  Setting the price based on a course category with the
                  subsequent automatic update of the SKUS will reduce the amount
                  of manual work and allow for flexible contract management in
                  case of minor changes.
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
                  Based on our investigation, we knew there was a gap between
                  course categories and SKUS that didn’t allow for quick
                  management, as one category could include a ton of SKUS which
                  ultimately made it difficult to set a single price.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  I’ve figured out that to decrease that gap, we could make SKUS
                  dependant on a course category which would enable us to relate
                  SKUS to a specific category so they are a single entity.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  Moreover, it was crucial not to iterate much on the table
                  layout for the design to be consistent with the first part of
                  the platform. Looking at the solutions we had in the first
                  release I saw that we can slightly adjust the table without
                  overhauling the design by adding expandable / collapsible
                  element to include SKUS into a category.
                </p>
                <div className={bem('prototype-image')}>
                  <PrototypeIcon />
                </div>
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
                  that clients could swiftly assign prices for a specific
                  customer based on a course category and that price change
                  would automatically allocated to that category. We added a new
                  subpage to the existing company creation flow so the clients
                  could manage things related to their customers at a time.
                </p>
                <p className={classNames(bem('body', '1'), bem('pt-serif'))}>
                  At the same time, we provided the clients with an opportunity
                  to manage price setup for the course SKUS via a click based on
                  a course category not to manually put a discount percentage
                  for every single SKU separately.
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(bem('item'), 'container', 'container--small')}
          >
            <div className={bem('testing-images')}>
              <div className={bem('testing-item')}>
                <h5
                  className={classNames(
                    bem('body', ['1', 'semibold']),
                    bem('testing-title')
                  )}
                >
                  FROM
                </h5>
                <h6
                  className={classNames(
                    bem('testing-subtitle'),
                    bem('body', '1'),
                    bem('pt-serif')
                  )}
                >
                  Manual setup by piece
                </h6>
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
                  ...TO
                </h5>
                <h6
                  className={classNames(
                    bem('testing-subtitle'),
                    bem('body', '1'),
                    bem('pt-serif')
                  )}
                >
                  Automatic setup by category
                </h6>
                <div className={bem('testing-wrapper')}>
                  <img src={testing4} alt="testing screenshot" />
                  <img src={testing3} alt="testing screenshot" />
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
                  Since the price setup functionality was planned to be used
                  only by a limited number of people, that is admins of the
                  platform, I presented the vision to stakeholders and was given
                  the green light to start implementing the flow.
                </p>
                <h3 className={bem('heading', '3')}>
                  After implementing the new flow, we were able to decrease the
                  price setup time specific by customer from 1 day to just 5
                  minutes.
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
