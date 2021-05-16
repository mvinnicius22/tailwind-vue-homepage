<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Ganho mensal"
              statTitle="R$ 850,00"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Desde abril"
              statIconName="far fa-chart-bar"
              statIconColor="bg-green-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Gasto mensal"
              statTitle="R$ 145,00"
              statArrow="up"
              statPercent="10"
              statPercentColor="text-red-500"
              statDescripiron="Desde abril"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Atendimentos"
              statTitle="36"
              statArrow="up"
              statPercent="1.10"
              statPercentColor="text-green-500"
              statDescripiron="Desde abril"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Meta mensal"
              statTitle="49,65%"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              statDescripiron="adiantada"
              statIconName="fas fa-percent"
              statIconColor="bg-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/CardStats.vue";

export default {
  components: {
    CardStats,
  },
};
</script>
