---
blocks:
  - style:
      alignment: 'flex-col-reverse items-center items-center-vertical '
      padding: pt-20 pb-16 pr-10 pl-10
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-7xl mb-0 '
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 undefined mb-0 '
      contentOrder: labelHeadingsContent
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1666373408/medusa/medusa-logo_wwpiuj.svg
    label: ''
    headline: Medusa
    subhead: ''
    body: ''
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center items-center-vertical '
      padding: 'pt-0 pb-20 pr-10 pl-10 sm:pt-0 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: w-3/4 min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-5xl mb-0 '
      subheadStyles: text-black font-1 text-2xl mb-0 font-bold
      textStyles: 'text-black font-1 undefined mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: ''
    subhead: Simple programmatic access control onchain backed by cryptography
    body: ''
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-20 pr-10 pl-10 sm:pt-14 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-2xl mb-10 font-bold
      subheadStyles: 'text-black font-1 text-2xl mb-0 '
      textStyles: 'text-black font-1 text-xl mb-16 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: What is it?
    subhead: ''
    body: >
      Medusa enables to dapp to write their access control rules using their
      native language and rely on Medusa for delegating access to
      contents.&#x20;


      Medusa network relies on threshold cryptography to let smart contracts
      control a private key without anyone knowing it.
    buttons:
      - label: Demo
        link: 'https://demo.medusanet.xyz'
        type: primary
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-20 pr-10 pl-10 sm:pt-5 sm:pb-24 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-2xl mb-10 font-bold
      subheadStyles: 'text-black font-1 text-2xl mb-0 '
      textStyles: 'text-black font-1 text-xl mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Use Cases
    subhead: ''
    body: >
      Medusa allows a smart contract to control a private key and decrypts
      content for specific readers on demand: Alice can encrypt its latest
      discovery, and define precily using its regular toolings the rules for
      anyone to read it (holder of this NFT, stake X amount etc). At any point
      in time in the future, Bob can get back an encrypted message that only him
      can decrypt from Medusa.
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center items-start-vertical '
      padding: 'pt-10 pb-20 pr-10 pl-10 sm:pt-10 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-2xl mb-10 font-bold
      subheadStyles: 'text-black font-1 text-2xl mb-0 '
      textStyles: >-
        text-black font-1 text-xl mb-16  sm:text-black sm:font-1 sm:text-xl
        sm:mb-5 
      contentOrder: labelHeadingsContent
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1666373348/medusa/medusa-code-sample_pqjbpk.svg
    label: ''
    headline: Developer Friendly
    subhead: ''
    body: >
      Medusa is a smart contract that anyone can use in the stack of their app.
      Developers don’t need any extra tooling to start using it.
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-20 pr-10 pl-10 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-2xl mb-10 font-bold
      subheadStyles: 'text-black font-1 text-2xl mb-0 '
      textStyles: 'text-black font-1 text-xl mb-16 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Technology
    subhead: ''
    body: >
      The technology Medusa is using is based on threshold cryptography which a
      fantastic technique to decentralize any cryptographic operations. The
      secret key is shared between multiple participants and no one knows it.
      This allows to encrypt a message towards Medusa without no one being able
      to reveal it. Medusa then re-encrypts this message to a specific recipient
      dictacted by onchain events. Everything is backed by cryptographic proofs
      to ensure integrity and privacy of the content.
    buttons:
      - label: Full Documentation Project
        link: /
        type: primary
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-20 pr-10 pl-10 sm:pt-10 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-2xl mb-10 font-bold
      subheadStyles: 'text-black font-1 text-2xl mb-0 '
      textStyles: 'text-black font-1 text-xl mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Status
    subhead: ''
    body: >
      Medusa aims to expands its use cases, using the same technology, such as
      timelock encryption (public decryption where everyone can read after a
      specified time).

      This project is at an early stage but we have a demo working already on
      Goerli ethereum testnet at
      [demo.medusanet.xyz](http://demo.medusanet.xyz), check it out!
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-20 pr-10 pl-10 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-2xl mb-10 font-bold
      subheadStyles: 'text-black font-1 text-2xl mb-0 '
      textStyles: 'text-black font-1 text-xl mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Team
    subhead: ''
    body: >
      Medusa is being built by experts in threshold cryptography, inside the
      cryptonet team at Protocol Labs, building decentralized protocol for the
      future of web3.
    _template: feature
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-10 pb-10 pr-10 pl-10
      contentWidth: w-full
      columns: '3'
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-5xl mb-0 '
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 undefined mb-0 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: ' opacity-100'
      padding: pt-0 pb-0 pr-0 pl-0
      borderStyles: border-gray border-0
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-2xl mb-0 font-bold
      subheadStyles: 'text-black font-1 undefined mb-0 '
      textStyles: 'text-black font-1 text-sm mb-0 '
      buttonType: primary
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - headline: We're Hiring
        subhead: ''
        text: ''
        link: '#'
      - headline: Contact Us
        subhead: ''
        text: ''
        link: '#'
      - headline: Join Us On Discord
        subhead: ''
        text: ''
        link: '#'
    _template: textCards
meta:
  pageTitle: Microgen
  pageDescription: Make modern web 3.0 ready websites with a real-time visual editor.
---

