<template>
  <div class="home">
    <navbar></navbar>
    <div v-show="modalInicial == false" class="flex justify-end pt-4 flex-col items-center">
      <button @click="[modalInicial = true, classeCarousel = classeBackup]" class="modal-close px-4 bg-green-200 p-3 rounded-lg text-verde-dark hover:bg-green-100">Desfazer</button>
    </div>
    <div v-show="modalInicial" class="flex justify-center flex-col items-center mt-24 pt-6">
      <div class="flex flex-col -m-24 items-center bg-green-100 p-10 rounded-lg shadow-2xl max-w-md mx-auto md:max-w-1xl transform"> 
        <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
        <svg class="fill-current text-laranja-light" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" @click="[modalInicial=false, classeBackup = classeCarousel, classeCarousel = classeCarouselClosed]">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
        <img class="h-64 w-64 rounded-full object-cover transform transition duration-500 hover:scale-105" src="../assets/imgs/sala1.jpg" alt="">
        <h5 class="text-2xl font-semibold mt-4"> você vai gostar do seu natural. prometo!  </h5>
        <p class="text-justify mt-4"> 
          <span class="sm:text-green-900 md:text-teal-200 "> arte feita com amor, dedicação e comprometimento. </span> 
          <span> respeitando ao máximo o seu natural. 
          deixar ainda mais lindo o que já é demasiado. sou toda love love por tudo isso aqui. 
          expressando meu propósito: é sobre preservar. sobre auto-amar. sobre ser singular.
          </span>
        </p>
        <div class="rounded-md p-1 pt-5 max-w-sm w-full mx-auto max-h-12">
          <div class="flex space-x-4">
            <img class="rounded-full h-12 w-12" src="../assets/imgs/keth1.png"> 
            <div class="flex space-x-4 pt-2">
              você vai gostar do seu natural. prometo!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="containers" :class="classeCarousel">
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/imgs/keth1.png" alt="">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Teste</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
           <p class="text-sm pt-4 pb-2 border-t border-b">
            &nbsp;R$35,00 
          </p>
          <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
          <span class="text-sm border-l-3"> 50 min </span>
        </div>
        <div class="px-6 pt-4 pb-2 ">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">henna</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">epilação</span>
          <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">coloração</span> -->
        </div>
      </div>
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/imgs/keth1.png" alt="">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Teste</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <p class="text-sm pt-4 pb-2 border-t border-b">
            &nbsp;R$95,00 
          </p>
          <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
          <span class="text-sm border-l-3"> 90 min </span>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">coloração</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">tintura</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">browlamination</span>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/imgs/keth1.png" alt="Mountain">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Teste</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">lifting</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';

export default {
  name: 'Home',
  components: {
    navbar
  },
  data () {
      return{
        system: {
        },
        modalInicial: true,
        classeCarousel: "mt-20 p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-4xl mx-auto md:max-w-1xl rounded overflow-hidden shadow-lg",
        classeCarouselClosed: "mt-0 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-4xl mx-auto md:max-w-1xl rounded overflow-hidden shadow-lg",
        classeBackup: "",
      }
    },
    methods:{
    

    mounted(){
      
    }
  }
}
</script>
