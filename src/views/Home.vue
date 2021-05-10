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

    <div class="w-full bg-gray-200 py-10">
      <div class="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded">
        <div class="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
          <div class="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
            <div class="flex items-center">
              <a class="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1="16" y1="5" x2="19" y2="8" />
                </svg>
              </a>
              <a class="text-gray-600 dark:text-gray-400 mx-2 p-2 border-transparent border bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
              <a class="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </a>
              <a class="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
              </a>
              <a class="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </a>
            </div>
          </div>

          <div class="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
            <div class="flex items-center lg:border-l lg:border-r border-gray-300 py-3 lg:py-0 lg:px-6">
              <p class="text-base text-gray-600 dark:text-gray-400" id="page-view">Viewing 1 - 20 of 60</p>
              <a class="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded" onclick="pageView(false)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </a>
              <a class="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer" onclick="pageView(true)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </a>
            </div>
            <div class="flex items-center lg:border-r border-gray-300 pb-3 lg:pb-0 lg:px-6">
              <div class="relative w-32 z-10">
                <div class="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <select aria-label="Selected tab" class="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                  <option>List View</option>
                  <option>Grid View</option>
                </select>
              </div>
            </div>
            <div class="lg:ml-6 flex items-center">
              <button class="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">Finalizar dia</button>
              <div class="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
          <table class="min-w-full bg-white dark:bg-gray-800">
            <thead>
            <tr class="w-full h-16 border-gray-300 border-b py-8">
              <th class="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="checkAll(this)" />
              </th>
              <th class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                <div class="text-gray-600 dark:text-gray-400 opacity-0 cursor-default relative w-10">
                  <div class="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs">3</div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  </svg>
                </div>
              </th>
              <th class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Data</th>
              <th class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Cliente</th>
              <th class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Designer</th>
              <th class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Valor total</th>
              <th class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Horário</th>
              <th class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                <div class="opacity-0 w-2 h-2 rounded-full bg-indigo-400"></div>
              </th>
              <td class="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Mais</td>
            </tr>
            </thead>

            <tbody>
            <tr v-for="agendamento in agendamentos" :key="agendamento.index" class="h-24 border-gray-300 border-b">
              <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                <input type="checkbox" class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
              </td>
              <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                <div class="relative w-10 text-gray-600 dark:text-gray-400">
                  <div class="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs">{{agendamento.QntServicos}}</div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  </svg>
                </div>
              </td>
              <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{{$moment(agendamento.dataAgendamento).format('DD/MM')}} - {{agendamento.dia}}</td>
              <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{{agendamento.nome}}</td>
              <td class="pr-6 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="h-8 w-8">
                    <img src="../assets/imgs/keth1.png" alt="" class="h-full w-full rounded-full overflow-hidden shadow" />
                  </div>
                  <p class="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Kethelly Karolayne Dantas Fonseca</p>
                </div>
              </td>
              <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">R$ {{agendamento.ValorTotal}},00</td>
              <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{{$moment(agendamento.dataAgendamento).format('HH:mm')}}</td>
              <td class="pr-6">
                <div v-if="agendamento.IdStatus == 1" class="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div v-else-if="agendamento.IdStatus == 2" class="w-2 h-2 rounded-full bg-green-400"></div>
                <div v-else-if="agendamento.IdStatus == 3" class="w-2 h-2 rounded-full bg-purple-400"></div>
                <div v-else-if="agendamento.IdStatus == 4" class="w-2 h-2 rounded-full bg-red-400"></div>
                <div v-else class="w-2 h-2 rounded-full bg-indigo-400"></div>
              </td>
              <td class="pr-8 relative">
                <div class="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                  <ul class="bg-white dark:bg-gray-800 shadow rounded py-1">
                    <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Editar</li>
                    <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Cancelar</li>
                  </ul>
                </div>
                <button class="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" @click="dropdownFunction($event)" class="icon icon-tabler icon-tabler-dots-vertical dropbtn" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="19" r="1" />
                    <circle cx="12" cy="5" r="1" />
                  </svg>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    navbar
  },
  data () {
      return{
        system: {
        },
        temp: 0,
        agendamentos: null,
        modalInicial: true,
        classeCarousel: "mt-20 p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-4xl mx-auto md:max-w-1xl rounded overflow-hidden shadow-lg",
        classeCarouselClosed: "mt-0 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-4xl mx-auto md:max-w-1xl rounded overflow-hidden shadow-lg",
        classeBackup: "",
      }
    },
    methods:{
      getInfo(){
        axios.get('http://localhost:8000/api/v1/agendamentos').then((res) => {
          this.agendamentos = res.data
        })
      },
      dropdownFunction(event) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        let list = event.currentTarget.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
        for (i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.add("hidden");
        }
        list.classList.toggle("hidden");
      },
      documentClick(event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            openDropdown.classList.add("hidden");
          }
        }
      },
      checkAll(event) {
        let rows = event.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.children;
        for (var i = 0; i < rows.length; i++) {
          if (event.currentTarget.checked) {
            rows[i].classList.add("bg-gray-100");
            let checkbox = rows[i].getElementsByTagName("input")[0];
            if (checkbox) {
              checkbox.checked = true;
            }
          } else {
            rows[i].classList.remove("bg-gray-100");
            let checkbox = rows[i].getElementsByTagName("input")[0];
            if (checkbox) {
              checkbox.checked = false;
            }
          }
        }
      },
      tableInteract(event) {
        var single = event.currentTarget.parentElement.parentElement;
        single.classList.toggle("bg-gray-100");
      },
      pageView(val) {
        let text = document.getElementById("page-view");
        if (val) {
          if (this.$data.temp === 2) {
            this.$data.temp = 0;
          } else {
            this.$data.temp = this.$data.temp + 1;
          }
        } else if (this.$data.temp !== 0) {
          this.$data.temp = this.$data.temp - 1;
        }
        switch (this.$data.temp) {
          case 0:
            text.innerHTML = "Viewing 1 - 20 of 60";
            break;
          case 1:
            text.innerHTML = "Viewing 21 - 40 of 60";
            break;
          case 2:
            text.innerHTML = "Viewing 41 - 60 of 60";
        }
      },
    },
    mounted(){
      this.getInfo()
    },
    created() {
      document.addEventListener("click", this.documentClick);
    },
    unmounted() {
      document.removeEventListener("click", this.documentClick);
    },
}
</script>
