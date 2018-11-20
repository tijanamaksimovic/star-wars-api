<template>
    <div class="plot"
        :planet="planet"
        :specie="specie"
        :character="character"
        :plotRequested="plotRequested"
    >
        <p class="title">{{ plotList[randomPlot].title }}</p>
        <div class="text">{{ plotList[randomPlot].description }}</div>
        <p class="resources">{{ plotList[randomPlot].resources }}</p>
    </div>
</template>

<script>
export default {
  name: 'PlotComponent',
  data() {
    return {
      plotList: [
        {
          title: 'REBELLION HIDEOUT',
          description: `Once again, the shadow of terror has engulfed the ${this.planet.name}. Every terrain form has become the hiding place for newly formed rebellion groups. Outraged rebels and normal citizens flew their villages to reach the ${this.planet.terrain}. Fear has spread across the galaxy, leading to war among species. The only specie who could foresee the consequences was the ${this.specie.name}. Little did they know that ${this.character.name} has already escaped the greedy Trade Federation and secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict…`,
          resources: `RESOURCES Planet: ${this.planet.name}, Planet terrain: ${this.planet.terrain}, Specie: ${this.specie.name}, Character: ${this.character.name}`,
        },
        {
          title: 'WARS OF THE SPECIES',
          description: `There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic, caused by recent conflict among species. The leader of ${this.specie.name} has spent the most of ${this.specie.average_lifespan} galactic years of his life to achieve supremacy of his peers. He has negotiated alliance with all the ${this.specie.classification} empires. As a consequence, citizens of ${this.planet.name} have summoned ${this.character.name} to end this grisly bloodsheding. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi...`,
          resources: `RESOURCES Specie: ${this.specie.name}, Specie lifespan: ${this.specie.average_lifespan}, Specie classification: ${this.specie.classification}, Planet: ${this.planet.name}, Character: ${this.character.name}`,
        },
        {
          title: 'SECRET WEAPON',
          description: `${this.character.name} has returned to the long forgotten planet of ${this.planet.name} in an attempt to rescue it, its villagers and the ${this.specie.language} dialect from extinction. The ${this.specie.name} have been seeking hideouts in the most remote galaxies where the remains of ancient species and some reconciliation still exists. The GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...`,
          resources: `RESOURCES Character: ${this.character.name}, Planet: ${this.planet.name}, Specie language: ${this.specie.language}, Specie; ${this.specie.name}`,
        },
      ],
      dataAvailable: false,
      plotResources: this.extractPlotResources,
    };
  },
  props: {
    planet: { required: true },
    specie: { required: true },
    character: { required: true },
    plotRequested: { type: Boolean, required: true, default: false },
  },
  computed: {
    randomPlot() {
      return Math.floor(Math.random() * Math.floor(this.plotList.length));
    },
  },
};
</script>

<style>
    .plot {
        width: 100%;
        height: 300px;
        border: 3px solid #ffd700;
        border-radius: 25px;
        margin-top: 20px;
        padding: 20px;
        color: #ffd700;
        overflow-y: auto;
    }
    .resources {
        margin-top: 40px;
    }
</style>
