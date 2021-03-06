import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'Who are you?',
    content: () => (
      <>
        This is currently just me, Jp. Born in France, moved to Montréal a couple of years ago. Now a dual citizen.<br />
        I started an indie musical label when I was 16, began my professional careers in non-profits and freelancing. Then, when I moved to Montréal, I got into the big corporate world at Gameloft. Dabbled in a couple of things between video games, robotics, ecommerce, music industry, startups, artificial intelligence...<br />
        I'm currently Growth Ops Manager at Local Logic.<br />
        As a person, I'm a photographer with over 100M views, an avid video game player, and a gardening enthusiast.
      </>
    ),
  },
  {
    title: 'Why should I believe in you?',
    content: () => (
      <>
        Because I'm 100% bullshit free and I was described in my last gigs as "<em>one of the most impactful hires [they] made</em>", "<em>a growth rockstar</em>", "<em>the best bridge between teams</em>"...<br />
        From pre-series A startups to worldwide conglomerate, I've proved time and time again to be an asset that yield results.
      </>
    ),
  },
  {
    title: 'What do you do exactly?',
    content: () => (
      <>
        I'm here to share my knowledge, experience, and expertise to fuel sustainable growth for digital produts<br />
        I can bring you what worked, what didn't, why, what tools to use, what errors to avoid, what decisions to take today to yield 100X benefits down the road...
      </>
    ),
  },
  {
    title: 'Where do you work?',
    content: () => (
      <>
        I'm currently based in Montréal, QC. I can work from anywhere with an internet connection.
      </>
    ),
  },
  {
    title: 'When can you start?',
    content: () => (
      <>
        Wow, let's calm down. I like the enthusiasm but I'm very picky about what sort of project I get into.<br />
        Let's chat first and see if this could be a good fit.
      </>
    ),
  },
  {
    title: 'How much $$$?',
    content: () => (
      <>
        Let's figure it out. If there's a good fit, we'll work something out.
      </>
    ),
  },
  {
    title: 'Are there mandates you would refuse?',
    content: () => (
      <>
        I'm not into bullshit, workaholism, micro-management, and general assholeness.<br />
      </>
    ),
  },
  {
    title: 'I do not like your tone in your replies above',
    content: () => (
      <>
        I've reached a point where I know what I do, what I like, and what I bring to the table.<br />
        I also know what bores me, what angers me, and the patterns to toxic/annoying/misleading/bullshitty projects.<br />
        So, I'm being super radical and transparent in those questions so we can both save time and energy.<br />
        <em>what's the point of dialing it down anyways?</em>
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
