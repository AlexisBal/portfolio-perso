<template>
  <div class="bg-[url('assets/img/bg.png')] grid w-screen max-w-screen h-full sm:h-full min-h-screen min-w-screen sm:min-h-screen sm:min-w-screen md:min-h-screen md:min-w-screen bg-cover bg-no-repeat bg-fixed bg-center">
    <div class="grid-flow-col grid lg:pt-5 lg:pb-5 w-screen h-fit bg-white lg:pl-8 lg:pr-8 pt-4 pb-4 pl-4 pr-2" >
      <p class="font-sans lg:text-2xl text-xl text-center font-medium justify-self-start">Alexis Balayre</p>
      <div class="justify-self-end flex">
        <!-- Phone -->
        <a class="lg:pl-4 lg:pr-4 lg-2 pr-2" href="tel:+33695831470">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="w-8 h-8">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>
        </a>
        <!-- Email -->
        <a class="lg:pl-4 lg:pr-4 lg-2 pr-2" href="mailTo:alexis.balayre@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </a>
        <!-- Github -->
        <a class="lg:pl-4 lg:pr-4 lg-2 pr-2" href="https://github.com/AlexisBal">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 496 512" 
            class="w-8 h-8"
            fill="black">
            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
          </svg>
        </a>
         <!-- Linkedin -->
         <a class="lg:pl-4 lg:pr-4 lg-2 pr-2" href="https://fr.linkedin.com/in/alexis-balayre">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="black">
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </a>
        <!-- Twitter -->
        <a class="lg:pl-4 lg:pr-4 lg-2 pr-2" href="https://twitter.com/Belas_Eth">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="bg-white w-fit h-fit grid grid-flow-row lg:pl-6 lg:pr-6 rounded-xl justify-self-center mt-8">
      <div class="h-auto w-auto rounded-full justify-self-center">
        <img class="lg:w-40 w-20 rounded-full" src="./assets/img/alexis.png"/>
      </div>
      <div class="lg:pt-8 p-4 lg:pb-8 self-center">
        <p class="justify-self-center text-xl lg:text-2xl font-medium self-center">Full Stack Web3 Developer</p>
      </div>
    </div>
    
    <div class="bg-white ml-8 mr-8 lg:w-3/6 h-fit mt-10 lg:mt-20 p-6 md:p-8 rounded-xl justify-self-center">
      <p class="lg:text-xl md:text-xl text-lg text-justify">My name is Alexis Balayre and I am a French <a class="lg:text-xl md:text-xl text-lg font-bold">full-stack developer</a> specialized in <a class="lg:text-xl md:text-xl text-lg font-bold">Web3</a>. I realize all the missions related to the creation of a <a class="lg:text-xl md:text-xl text-lg  font-bold">decentralized application (DApp)</a> from <a class="lg:text-xl md:text-xl text-lg  font-bold">smart contracts</a> to the <a class="lg:text-xl md:text-xl text-lg  font-bold">user interface</a>.</p>
    </div>

    <div class="flex flex-col lg:flex-row lg:pl-40 lg:pr-40 mb-10 mt-10 lg:mb-20 lg:mt-20 justify-center w-screen">
      <div class="bg-white grid p-6 lg:p-8 md:p-8 mr-8 ml-8 mt-4 rounded-xl lg:w-full lg:ml-20 lg:mr-20 md:ml-20 md:mr-20">
        <p class="lg:text-3xl text-2xl font-bold text-center">Experience</p>
        <div>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-4">Sept 2022 - Now : Blockchain Developer at <a class="underline decoration-sky-500 font-bold" href="https://coinshares.com/">CoinShares</a></p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-4">Sept 2022 - Now : Vice President of the <a class="font-bold">Blockchain Lab</a> at <a class="underline decoration-sky-500 font-bold" href="https://fr.linkedin.com/company/garageisep">Garage Isep</a></p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-4">May 2022 - Now : Blockchain Developer at <a class="underline decoration-sky-500 font-bold" href="https://github.com/SleepnClub/Sleepn-Contracts">Sleepn</a></p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-4">Sept 2021 : Beginning of my journey into <a class="font-bold">Web3</a></p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-4">2019 - 2021 : Exploring Web2 technologies during my digital engineering studies</p>
        </div>
      </div>
      <div class="bg-white grid p-6 md:p-8 lg:p-8 mr-8 ml-8 mt-10 md:mt-4 rounded-xl lg:w-full lg:ml-20 lg:mr-20 md:ml-20 md:mr-20">
        <p class="lg:text-3xl text-2xl font-bold text-center">My Services</p>
        <div>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-6"><a class="lg:text-xl md:text-xl text-lg  font-bold">Creation</a> and <a class="lg:text-xl md:text-xl text-lg  font-bold">deployment</a> of smart contracts</p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-2"><a class="lg:text-xl md:text-xl text-lg  font-bold">Performance</a> and <a class="lg:text-xl md:text-xl text-lg  font-bold">security testing</a> of smart contracts</p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-2"><a class="lg:text-xl md:text-xl text-lg  font-bold">Optimisation</a> of smart contracts </p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-2"><a class="lg:text-xl md:text-xl text-lg  font-bold">Integration</a> of smart contracts </p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-2">Creation of <a class="lg:text-xl md:text-xl text-lg  font-bold">NFT collections</a></p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-2">Creation of <a class="lg:text-xl md:text-xl text-lg  font-bold">crypto-currencies</a></p>
          <p class="lg:text-xl md:text-xl text-lg  font-medium mt-2">Creation of <a class="lg:text-xl md:text-xl text-lg font-bold">DApps</a></p>
        </div>
      </div>
    </div>

    <div class="bg-white h-fit w-screen max-w-screen mb-10 lg:mb-20 p-4 flex overflow-hidden">
      <div class="flex w-screen max-w-screen animate-slidein">
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-8 ml-8" src="./assets/img/docker-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-8 ml-8" src="./assets/img/vs-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-8 ml-8" src="./assets/img/typescript-logo.svg"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-8 ml-8" src="./assets/img/solidity-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-8 ml-8" src="./assets/img/remix-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-8 ml-8" src="./assets/img/hardhat-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/foundry-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/ethersjs-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/web3js-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/nest-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/nuxtjs-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/react-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/docker-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/vs-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/typescript-logo.svg"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/solidity-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/remix-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/hardhat-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/foundry-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/ethersjs-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/web3js-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/nest-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/nuxtjs-logo.png"/>
        <img class="lg:h-20 lg:w-20 w-10 h-10 mr-5 ml-8" src="./assets/img/react-logo.png"/>
      </div>
    </div>


    <Footer />
  </div>
</template>


