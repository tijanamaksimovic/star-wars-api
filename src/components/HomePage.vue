<template>
    <v-app>
        <v-content>
            <div class="logo">
                <img class="logo-image" src="../assets/star-wars-logo.png" alt="logo">
            </div>
            <v-container fluid>
                <v-flex>
                    <SearchComponent
                        label="Choose a Planet"
                        :items="planetNames"
                        @getItems="getPlanets($event)"
                        @selectedItem="savePlanet($event)"
                        ref="searchPlanet"
                    ></SearchComponent>
                    <SearchComponent
                        label="Choose a Character"
                        :items="peopleNames"
                        @getItems="getPeople($event)"
                        @selectedItem="saveCharacter($event)"
                        ref="searchCharacter"
                    ></SearchComponent>
                    <SearchComponent
                        label="Choose a Specie"
                        :items="speciesNames"
                        @getItems="getSpecies($event)"
                        @selectedItem="saveSpecie($event)"
                        ref="searchSpecie"
                    ></SearchComponent>
                    <v-btn
                        color="warning"
                        @click="generatePlot()"
                        dark
                        :disabled="plotCharacter === null || plotPlanet === null || plotSpecie === null"
                    >Generate Plot
                    </v-btn>
                    <v-btn
                        @click="reset()"
                        dark
                    >Reset
                    </v-btn>
                    <template v-if="plotRequested && planet && character && specie">
                        <PlotComponent
                            :planet="planet"
                            :specie="specie"
                            :character="character"
                            :plotRequested="plotRequested"
                        ></PlotComponent>
                    </template>
                </v-flex>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import PlotComponent from './PlotComponent.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      plotPlanet: null,
      plotCharacter: null,
      plotSpecie: null,
      generatedPlot: false,
    };
  },
  components: {
    SearchComponent,
    PlotComponent,
  },
  methods: {
    getPlanets(event) {
      this.$store.dispatch('getPlanets', event);
    },
    getPeople(event) {
      this.$store.dispatch('getPeople', event);
    },
    getSpecies(event) {
      this.$store.dispatch('getSpecies', event);
    },
    savePlanet(event) {
      this.plotPlanet = event;
    },
    saveCharacter(event) {
      this.plotCharacter = event;
    },
    saveSpecie(event) {
      this.plotSpecie = event;
    },
    generatePlot() {
      this.generatedPlot = true;
    },
    reset() {
      this.$refs.searchPlanet.resetField();
      this.$refs.searchCharacter.resetField();
      this.$refs.searchSpecie.resetField();
    },
  },
  computed: {
    planetNames() {
      return this.$store.getters.getPlanetNames;
    },
    speciesNames() {
      return this.$store.getters.getSpeciesNames;
    },
    peopleNames() {
      return this.$store.getters.getPeopleNames;
    },
    planet() {
      return this.$store.getters.getPlotPlanet(this.plotPlanet);
    },
    character() {
      return this.$store.getters.getPlotCharacter(this.plotCharacter);
    },
    specie() {
      return this.$store.getters.getPlotSpecie(this.plotSpecie);
    },
    plotRequested() {
      return this.generatedPlot;
    },
  },
  created() {
    this.$store.dispatch('getPlanets');
    this.$store.dispatch('getSpecies');
    this.$store.dispatch('getPeople');
  },
};
</script>

<style>
    .logo-image {
        width: 200px;
        height: 120px;
    }
</style>
