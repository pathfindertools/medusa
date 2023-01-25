---
blocks:
  - style:
      alignment: flex-col-reverse items-center items-center-vertical gap-4
      padding: pt-9 pb-10 pr-10 pl-10
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
      padding: 'pt-0 pb-7 pr-10 pl-10 sm:pt-0 sm:pb-0 sm:pr-5 sm:pl-5'
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
      padding: 'pt-10 pb-9 pr-10 pl-10 sm:pt-14 sm:pb-0 sm:pr-5 sm:pl-5'
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
      Medusa enables to dapp to write their access control rules natively and
      rely on Medusa for delegating access to encrypted contents.&#x20;


      Check out the demo on Arbitrum testnet !
    buttons:
      - label: Demo
        link: 'https://demo.medusanet.xyz'
        type: primary
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-9 pr-10 pl-10 sm:pt-5 sm:pb-24 sm:pr-5 sm:pl-5'
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
      Medusa is meant to sit below your app to delegate access to encrypted
      contents: private mailing list, payable contents, NFT gated contents, etc.


      Alice can encrypt its latest discovery, submit the encryption to her smart
      contract that defines precisely the rules for anyone to read it (holder of
      this NFT, paid X eth...). &#x20;
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center items-start-vertical '
      padding: 'pt-10 pb-9 pr-10 pl-10 sm:pt-10 sm:pb-0 sm:pr-5 sm:pl-5'
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


      Dapps can use the deployed Medusa contract in side their contracts and are
      good to go.


      Clients can use the Typescrit Medusa SDK library to locally encrypt and
      decrypt content but do not need to connect to any external endpoints!
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-9 pr-10 pl-10 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
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
        link: 'https://doc.medusanet.xyz'
        type: primary
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-9 pr-10 pl-10 sm:pt-10 sm:pb-0 sm:pr-5 sm:pl-5'
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
      Currently Medusa is in heavy development phase, yet we already have an
      alphanet, features complete, deployed on Arbitrum Goerli, check out the
      [demo](https://demo.medusanet.xyz) !&#x20;


      Medusa aims to deploy its tentacles on many chains, including Ethereum &
      Filecoin during the coming months.&#x20;


      As well, starting Q1'23, Medusa will expand its use cases,  such as
      providing public decryption (can use for timelock encryption where
      everyone can read after a specified time, or sealed bid auctions) and
      randomness beacon.
    _template: feature
  - style:
      alignment: 'flex-col items-center items-start-vertical '
      padding: 'pt-10 pb-11 pr-10 pl-10 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
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
      [cryptonet team](https://cryptonet.org) at [Protocol
      Labs](https://protocol.ai), building decentralized protocols for the
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
        link: 'https://boards.greenhouse.io/protocollabs'
      - headline: Contact Us
        subhead: ''
        text: ''
        link: 'mailto:info@medusanet.xyz'
      - headline: Join Us On Discord
        subhead: ''
        text: ''
        link: 'https://discord.com/cryptonet'
    _template: textCards
meta:
  pageTitle: Medusa
  pageDescription: Simple programmatic access control onchain backed by cryptography
  siteImageSrc: >-
    https://res.cloudinary.com/protocolai/image/upload/v1666382062/medusa_cropped_title_t9jy3p.svg
---

